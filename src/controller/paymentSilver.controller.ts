import axios from "axios";
import users from "../db/models/users.model";
import { Request, Response, Router } from "express";
import { UserService } from "../services/user.service";
import { token } from "morgan";
import { tokenToString } from "typescript";

export const usersService = new UserService(new users());

const CLIENT =
  "AZ3uE4WtcfAbqy5f_Ak2Uxnqd4sCZH5EyG1LeOAzz072y_I-IPyzY3esn1BRJ0KWpqulbcq-5NnGQxVB";
const SECRET =
  "EAzzDuNzWs9-wZSuNwqO-VV4BteE8OUvQctWqC7VBLeYdhClktLEmHHAjxMZYI24f5zmhwCI57yLr1Qk";
const PAYPAL_API = "https://api-m.sandbox.paypal.com"; // Live https://api-m.paypal.com

const auth = { user: CLIENT, pass: SECRET };

export const createPaymentSilver = async (req: Request, res: Response) => {
  const body = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD", //https://developer.paypal.com/docs/api/reference/currency-codes/
          value: "19.99",
        },
      },
    ],
    application_context: {
      brand_name: `BlockbusterHenry.com`,
      landing_page: "NO_PREFERENCE", // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
      user_action: "PAY_NOW", // Accion para que en paypal muestre el monto del pago
      return_url:  `https://blockbuster-pf.vercel.app/silver`, // Url despues de realizar el pago
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

  console.log(result.data);
  res.json({ data: result.data.links[1].href });

  //res.send("Creating order");
};

export const silverToken = async (req: Request, res: Response) => {
  try {
    const { id, token } = req.body;
    usersService.defineCategorySilverToken(id, token);
  } catch (e) {
    console.log(e);
  }
  res.send("token sended");
};

export const executePaymentSilver = async (req: Request, res: Response) => {
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

  res.send("Payment succses");
};

export const apiSilver = async (req: Request, res: Response) => {
  const { id } = req.body;
  try {
    usersService.defineCategorySilver(id);
    res.send("category changed to silver");
  } catch (e) {
    console.log(e);
  }
};
