"""Local FI Command Center launcher. Standard-library Python; no PowerShell."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import json
import os
import sys
import threading
import urllib.error
import urllib.request
import webbrowser

VERSION = '14.0.83'
ROOT = Path(__file__).resolve().parent
URL = 'http://localhost:5500/'
REQUIRED = ('index.html', 'css/command-center.css', 'js/command-center.js',
            'assets/kla-plus-official.png', 'assets/raiders-mini-user-shield-transparent.png')


def missing_files(root=ROOT):
    return [name for name in REQUIRED if not (root / name).is_file()]


def open_browser(url=URL):
    try:
        if webbrowser.open(url, new=2):
            print('[OK] Browser launch requested.', flush=True)
            return True
    except Exception as error:
        print('[WARN] Browser launch: ' + str(error), flush=True)
    if sys.platform == 'win32':
        try:
            os.startfile(url)
            print('[OK] Windows URL handler opened.', flush=True)
            return True
        except OSError as error:
            print('[WARN] Windows URL handler: ' + str(error), flush=True)
    print('[ACTION] Open this address in Edge or Chrome: ' + url, flush=True)
    return False


def existing_version(url=URL):
    try:
        with urllib.request.urlopen(url + '_cc_health', timeout=2) as response:
            data = json.load(response)
        if data.get('app') == 'FI Command Center':
            return data.get('version')
    except (OSError, ValueError, urllib.error.URLError):
        pass
    return None


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path.split('?', 1)[0] == '/_cc_health':
            payload = json.dumps({'app': 'FI Command Center', 'version': VERSION}).encode()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Content-Length', str(len(payload)))
            self.send_header('Cache-Control', 'no-store')
            self.end_headers()
            self.wfile.write(payload)
            return
        super().do_GET()

    def end_headers(self):
        if self.path.split('?', 1)[0].endswith(('.html', '.css', '.js')) or self.path == '/':
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()


def main():
    print('FI COMMAND CENTER V' + VERSION, flush=True)
    print('[INFO] Folder: ' + str(ROOT), flush=True)
    absent = missing_files()
    if absent:
        print('[ERROR] Incomplete folder: ' + ', '.join(absent), flush=True)
        print('Extract the complete ZIP before starting. Do not run from inside the ZIP.', flush=True)
        return 1
    try:
        server = ThreadingHTTPServer(('localhost', 5500), partial(Handler, directory=str(ROOT)))
    except OSError as error:
        version = existing_version()
        if version == VERSION:
            print('[OK] This version is already running at ' + URL, flush=True)
            open_browser()
            return 0
        print('[ERROR] Cannot start the local server: ' + str(error), flush=True)
        print('[ACTION] Close the previous Command Center server window, then start again.', flush=True)
        if version:
            print('[INFO] Running version: V' + str(version), flush=True)
        return 1
    print('[OK] Local server ready: ' + URL, flush=True)
    print('[INFO] Keep this window open. Ctrl+C stops this server.', flush=True)
    threading.Thread(target=open_browser, daemon=True).start()
    try:
        server.serve_forever(poll_interval=0.5)
    except KeyboardInterrupt:
        print('\n[INFO] Server stopped.', flush=True)
    finally:
        server.server_close()
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
