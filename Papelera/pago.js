// import axios from "axios";
// import users from "../db/models/users.model";
// import { Request, Response, Router } from "express";
// import { UserService } from "../services/user.service";
// import QueryString from "qs";
// import { token } from "morgan";

// export const usersService = new UserService(new users());

// const CLIENT = 'AZ3uE4WtcfAbqy5f_Ak2Uxnqd4sCZH5EyG1LeOAzz072y_I-IPyzY3esn1BRJ0KWpqulbcq-5NnGQxVB';
// const SECRET = 'EAzzDuNzWs9-wZSuNwqO-VV4BteE8OUvQctWqC7VBLeYdhClktLEmHHAjxMZYI24f5zmhwCI57yLr1Qk';
// const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // Live https://api-m.paypal.com

// const auth = { user: CLIENT, pass: SECRET }

// //------------------------------------- CREA INSTANCIA DE PAGO-------------------------
// export const createPaymentGold = async (req: Request, res: Response) => {

//           const body = {
//         intent: 'CAPTURE',
//         purchase_units: [{
//             amount: {
//                 currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
//                 value: '24.99'
//             }
//         }],
//         application_context: {
//             brand_name: `BlockbusterHenry.com`,
//             landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
//             user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
//             return_url: `http://localhost:3000/execute-paymentGold`, // Url despues de realizar el pago
//             cancel_url: `http://localhost:3000/cancel-payment` // Url despues de realizar el pago
//         }
//     }

//     //https://api-m.sandbox.paypal.com/v2/checkout/orders [POST]
//     const result = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, body,{
//         auth:{
//             username: CLIENT,
//             password: SECRET,
//         },
//     });
    
//     console.log(result.data, "acaaaaaa crear pago")
//     //res.redirect(result.data.links[1].href)
//     res.json({ data: result.data.links[1].href })
//     //res.send("Creating order");
// }
  



// const getData = async(token: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[] | undefined) => {
//     try{
//         if(typeof token === "string" ){
//             const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {},{
//                 auth:{
//                     username: CLIENT,
//                     password: SECRET,
//                 },
//             })
//             return {data: response.data}
//         } else{
//             throw new Error
//         }
//     } catch(e){
//         console.log("Payment failed")
//     }
//  }

// //-------------------------------------- EJECUTA PAGO----------------------------------
// export const executePaymentGold = async (req: Request, res: Response) => {
//     const token: string | QueryString.ParsedQs | string[] | QueryString.ParsedQs[] | undefined  = req.query.token;
//     const data = getData(token)
//     const { id } = req.body;
//     try{
//         if(da === 'COMPLETED'){
//             usersService.defineCategoryGold(id)
//             res.send("Pay succses")
//         } else {
//             res.send("Pay has been rejected")
//         }
//     } catch(e) {
//     console.log(e)
//     }
// }


 