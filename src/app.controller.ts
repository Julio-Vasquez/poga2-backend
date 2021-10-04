import { Controller, Get, Response } from '@nestjs/common'

@Controller()
export class AppController {
  @Get('/')
  public HomeApi() {
    return ` 
        <b>(=^ェ^=)</b>
        <b style="font-size: 30px">Welcome to Poga2 Api Visit => </b>
        <a href="https://naughty-lamport-fa5307.netlify.app/" style="font-size: 30px">
          https://naughty-lamport-fa5307.netlify.app/
        </a> 
         <b>(=^ェ^=)</b>
      `
  }
}
