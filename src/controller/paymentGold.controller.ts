import axios from "axios";
import { NextFunction, Request, response, Response, Router } from "express";
import { User } from "../services/user.service";
import { usersService } from "./users.controller";

const CLIENT =
  "AZ3uE4WtcfAbqy5f_Ak2Uxnqd4sCZH5EyG1LeOAzz072y_I-IPyzY3esn1BRJ0KWpqulbcq-5NnGQxVB";
const SECRET =
  "EAzzDuNzWs9-wZSuNwqO-VV4BteE8OUvQctWqC7VBLeYdhClktLEmHHAjxMZYI24f5zmhwCI57yLr1Qk";
const PAYPAL_API = "https://api-m.sandbox.paypal.com"; // Live https://api-m.paypal.com

const auth = { user: process.env.CLIENT, pass: process.env.SECRET };

export const createPaymentGold = async (req: Request, res: Response) => {
  const body = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD", //https://developer.paypal.com/docs/api/reference/currency-codes/
          value: "24.99",
        },
      },
    ],
    application_context: {
      brand_name: `BlockbusterHenry.com`,
      landing_page: "NO_PREFERENCE", // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
      user_action: "PAY_NOW", // Accion para que en paypal muestre el monto del pago
      return_url: `https://blockbuster-pf.vercel.app/gold`, // Url despues de realizar el pago
      cancel_url: `https://blockbuster-pf.vercel.app`, // Url despues de realizar el pago
    },
  };

  //https://api-m.sandbox.paypal.com/v2/checkout/orders [POST]
  const result = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, body, {
    auth: {
      username: CLIENT,
      password: SECRET,
    },
  });
  console.log(result.data, "create");
  res.send({ data: result.data.links[1].href });
};




export const goldToken = async (req: Request, res: Response) => {
  try {
    const { id, token } = req.body;
    usersService.defineCategoryGoldToken(id, token);
  } catch (e) {
    console.log(e);
  }
  res.send("token sended");
};


export const executePaymentGold = async (req: Request, res: Response) => {
  const { token } = req.query;
  const response = await axios.post(
    `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {},
    {
      auth: {
        username: CLIENT,
        password: SECRET,
      },
    }
  );
  // usersService.defineCategoryGold(id)

  res.redirect("payment silver succes");
};



export const apiGold = async (req: Request, res: Response) => {
  try{
    const { id } = req.body;
    usersService.defineCategoryGold(id);
      res.send("category changed to gold");
  }catch(e){
    console.log(e)
  }

};
