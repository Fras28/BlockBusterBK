
// {
//     "data": {
//         "id": "25P40349TX627731V",
//         "status": "COMPLETED",
//         "payment_source": {
//             "paypal": {
//                 "email_address": "sb-whl9f21146846@personal.example.com",
//                 "account_id": "FRFLNXJTLUEX8",
//                 "name": {
//                     "given_name": "John",
//                     "surname": "Doe"
//                 },
//                 "address": {
//                     "country_code": "MX"
//                 }
//             }
//         },
//         "purchase_units": [
//             {
//                 "reference_id": "default",
//                 "shipping": {
//                     "name": {
//                         "full_name": "John Doe"
//                     },
//                     "address": {
//                         "address_line_1": "Calle Juarez 1",
//                         "address_line_2": "Col. Cuauhtemoc",
//                         "admin_area_2": "Miguel Hidalgo",
//                         "admin_area_1": "Ciudad de Mexico",
//                         "postal_code": "11580",
//                         "country_code": "MX"
//                     }
//                 },
//                 "payments": {
//                     "captures": [
//                         {
//                             "id": "18X263959D3299931",
//                             "status": "COMPLETED",
//                             "amount": {
//                                 "currency_code": "USD",
//                                 "value": "24.99"
//                             },
//                             "final_capture": true,
//                             "seller_protection": {
//                                 "status": "ELIGIBLE",
//                                 "dispute_categories": [
//                                     "ITEM_NOT_RECEIVED",
//                                     "UNAUTHORIZED_TRANSACTION"
//                                 ]
//                             },
//                             "seller_receivable_breakdown": {
//                                 "gross_amount": {
//                                     "currency_code": "USD",
//                                     "value": "24.99"
//                                 },
//                                 "paypal_fee": {
//                                     "currency_code": "USD",
//                                     "value": "1.49"
//                                 },
//                                 "net_amount": {
//                                     "currency_code": "USD",
//                                     "value": "23.50"
//                                 }
//                             },
//                             "links": [
//                                 {
//                                     "href": "https://api.sandbox.paypal.com/v2/payments/captures/18X263959D3299931",
//                                     "rel": "self",
//                                     "method": "GET"
//                                 },
//                                 {
//                                     "href": "https://api.sandbox.paypal.com/v2/payments/captures/18X263959D3299931/refund",
//                                     "rel": "refund",
//                                     "method": "POST"
//                                 },
//                                 {
//                                     "href": "https://api.sandbox.paypal.com/v2/checkout/orders/25P40349TX627731V",
//                                     "rel": "up",
//                                     "method": "GET"
//                                 }
//                             ],
//                             "create_time": "2022-09-30T14:58:31Z",
//                             "update_time": "2022-09-30T14:58:31Z"
//                         }
//                     ]
//                 }
//             }
//         ],
//         "payer": {
//             "name": {
//                 "given_name": "John",
//                 "surname": "Doe"
//             },
//             "email_address": "sb-whl9f21146846@personal.example.com",
//             "payer_id": "FRFLNXJTLUEX8",
//             "address": {
//                 "country_code": "MX"
//             }
//         },
//         "links": [
//             {
//                 "href": "https://api.sandbox.paypal.com/v2/checkout/orders/25P40349TX627731V",
//                 "rel": "self",
//                 "method": "GET"
//             }
//         ]
//     }
// }
