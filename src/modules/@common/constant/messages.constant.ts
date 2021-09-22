export const SUCCESS = (sms: string) => `${sms}, creado exitosamente. ✔️`

export const FAILED = (sms: string) => `
  Ya existe un registro con esas credenciales, 
  no ha sido posible crear el registro de ${sms}. ✖️
`

export const NO_EXISTS = (sms: string) => `No se encontro el registro de ${sms}`
