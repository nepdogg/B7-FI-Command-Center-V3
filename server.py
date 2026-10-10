"""B7 FI V12 local static server with visible startup and persistent diagnostics."""
import datetime as dt
import http.server
import json
import os
from pathlib import Path
import sys
import traceback
import webbrowser

ROOT = Path(__file__).resolve().parent
BASE = Path(os.environ.get('LOCALAPPDATA', str(ROOT))) / 'B7-FI-Command-Center' / 'logs'
BASE.mkdir(parents=True, exist_ok=True)
LOG = BASE / 'v12-diagnostics.log'
PORT = 5500

def report(message):
    line = f'[{dt.datetime.now().isoformat(timespec="seconds")}] {message}'
    print(line, flush=True)
    with LOG.open('a', encoding='utf-8') as f:
        f.write(line + '\n')

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, fmt, *args):
        # Report errors, not every static file request.
        if args and str(args[1] if len(args) > 1 else '').startswith(('4', '5')):
            report('HTTP ERROR ' + fmt % args)

    def do_GET(self):
        if self.path == '/__health':
            b = json.dumps({'version': '12.0.0', 'root': str(ROOT), 'mode': 'LOCAL ONLY'}).encode()
            self.send_response(200); self.send_header('Content-Type', 'application/json'); self.send_header('Content-Length', str(len(b))); self.end_headers(); self.wfile.write(b); return
        return super().do_GET()

    def do_POST(self):
        if self.path != '/__client_error':
            self.send_error(404); return
        n = min(int(self.headers.get('Content-Length', '0')), 8192)
        body = self.rfile.read(n).decode('utf-8', 'replace')
        report('BROWSER ERROR ' + body.replace('\n', ' ')[:5000])
        self.send_response(204); self.end_headers()

if __name__ == '__main__':
    report('====================================================')
    report('B7 FI COMMAND CENTER V12.0.0 — FOUNDATION TEST')
    report('Application folder: ' + str(ROOT))
    report('Log file: ' + str(LOG))
    report('Data: Browser IndexedDB; NO Microsoft List writes')
    try:
        httpd = http.server.ThreadingHTTPServer(('127.0.0.1', PORT), Handler)
    except OSError as e:
        report('STARTUP FAILED: Port 5500 is unavailable. Close the old Command Center server window first. ' + str(e))
        input('Press Enter to close...')
        sys.exit(1)
    report(f'SERVER READY: http://localhost:{PORT}/')
    webbrowser.open(f'http://localhost:{PORT}/')
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        report('Server stopped by user')
    except Exception:
        report('SERVER CRASH: ' + traceback.format_exc())
        raise
    finally:
        httpd.server_close()
