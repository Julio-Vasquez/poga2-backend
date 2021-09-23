import { Controller, Get, Response } from '@nestjs/common'

@Controller()
export class AppController {
  @Get('/')
  public HomeApi() {
    return ` 
        Welcome to Poga2 Api => Visit
        https://poga2frontnetlify.com
        
      `
  }
}
