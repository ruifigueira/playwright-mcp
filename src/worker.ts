/**
 * Copyright (c) Cloudflare.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { McpAgent } from 'agents/mcp';
import { Context } from './context';
import { createServer } from '.';

export class PlaywrightMCP extends McpAgent<Env, {}, {}> {
  private _context!: Context;
  // we can use a Server instead of a McpServer here
  // @ts-expect-error
  server = createServer(this.env.BROWSER, {
    vision: false,
  });

  async init() {
    // do nothing
  }
}

export default PlaywrightMCP.mount('/sse');
