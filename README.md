# Stripe Generate ID
curl https://api.stripe.com/v1/products \
  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \
  -d name="Gold Special"

# Copy ID Property and REPLACE {{PRODUCT_ID}}
  prod_O3MaTFGrm8cqyI

curl https://api.stripe.com/v1/prices \
  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \
  -d product="prod_O3MaTFGrm8cqyI" \
  -d unit_amount=2000 \
  -d currency=usd

# Resulting JSON
  {
  "id": "price_1NHFtp2eZvKYlo2CxVG8Fyx5",
  "object": "price",
  "active": true,
  "billing_scheme": "per_unit",
  "created": 1686357805,
  "currency": "usd",
  "custom_unit_amount": null,
  "livemode": false,
  "lookup_key": null,
  "metadata": {},
  "nickname": null,
  "product": "prod_O3MaTFGrm8cqyI",
  "recurring": null,
  "tax_behavior": "unspecified",
  "tiers_mode": null,
  "transform_quantity": null,
  "type": "one_time",
  "unit_amount": 2000,
  "unit_amount_decimal": "2000"
}%         

# Copy Price ID and REPLACE {{PRICE_ID}}
price_1NHFtp2eZvKYlo2CxVG8Fyx5

curl https://api.stripe.com/v1/checkout/sessions \
  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \
  -d "payment_method_types[]"=card \
  -d "line_items[][price]"="price_1NHFtp2eZvKYlo2CxVG8Fyx5" \
  -d "line_items[][quantity]"=1 \
  -d mode=payment \
  -d success_url="https://example.com/success?session_id={CHECKOUT_SESSION_ID}" \
  -d cancel_url="https://example.com/cancel"

  # Checkout sessions curl request

  {
  "id": "price_1NHFtp2eZvKYlo2CxVG8Fyx5",
  "object": "price",
  "active": true,
  "billing_scheme": "per_unit",
  "created": 1686357805,
  "currency": "usd",
  "custom_unit_amount": null,
  "livemode": false,
  "lookup_key": null,
  "metadata": {},
  "nickname": null,
  "product": "prod_O3MaTFGrm8cqyI",
  "recurring": null,
  "tax_behavior": "unspecified",
  "tiers_mode": null,
  "transform_quantity": null,
  "type": "one_time",
  "unit_amount": 2000,
  "unit_amount_decimal": "2000"
}%                                                                                                                                         
keithyanosy@Keiths-MBP shop-shop % curl https://api.stripe.com/v1/checkout/sessions \
  -u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \
  -d "payment_method_types[]"=card \
  -d "line_items[][price]"="price_1NHFtp2eZvKYlo2CxVG8Fyx5" \
  -d "line_items[][quantity]"=1 \
  -d mode=payment \
  -d success_url="https://example.com/success?session_id={CHECKOUT_SESSION_ID}" \
  -d cancel_url="https://example.com/cancel"
{
  "id": "cs_test_a1Vg7Nl1knoknDr3iA3obJwrMViV1ioR3Otei6D8YUU3bqHidiyIb9nGHr",
  "object": "checkout.session",
  "after_expiration": null,
  "allow_promotion_codes": null,
  "amount_subtotal": 2000,
  "amount_total": 2000,
  "automatic_tax": {
    "enabled": false,
    "status": null
  },
  "billing_address_collection": null,
  "cancel_url": "https://example.com/cancel",
  "client_reference_id": null,
  "consent": null,
  "consent_collection": null,
  "created": 1686358062,
  "currency": "usd",
  "currency_conversion": null,
  "custom_fields": [],
  "custom_text": {
    "shipping_address": null,
    "submit": null
  },
  "customer": null,
  "customer_creation": "if_required",
  "customer_details": null,
  "customer_email": null,
  "expires_at": 1686444462,
  "invoice": null,
  "invoice_creation": {
    "enabled": false,
    "invoice_data": {
      "account_tax_ids": null,
      "custom_fields": null,
      "description": null,
      "footer": null,
      "metadata": {},
      "rendering_options": null
    }
  },
  "livemode": false,
  "locale": null,
  "metadata": {},
  "mode": "payment",
  "payment_intent": "pi_3NHFxy2eZvKYlo2C18E0koBA",
  "payment_link": null,
  "payment_method_collection": "always",
  "payment_method_options": {},
  "payment_method_types": [
    "card"
  ],
  "payment_status": "unpaid",
  "phone_number_collection": {
    "enabled": false
  },
  "recovered_from": null,
  "setup_intent": null,
  "shipping_address_collection": null,
  "shipping_cost": null,
  "shipping_details": null,
  "shipping_options": [],
  "status": "open",
  "submit_type": null,
  "subscription": null,
  "success_url": "https://example.com/success?session_id={CHECKOUT_SESSION_ID}",
  "total_details": {
    "amount_discount": 0,
    "amount_shipping": 0,
    "amount_tax": 0
  },
  "url": "https://checkout.stripe.com/c/pay/cs_test_a1Vg7Nl1knoknDr3iA3obJwrMViV1ioR3Otei6D8YUU3bqHidiyIb9nGHr#fidkdWxOYHwnPyd1blpxYHZxWlFcampIVGRwc2FAQXQwMUtsUXVtTDJvfScpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl"
}%

# Copy and Paste sessionID into HTML

  "id": "cs_test_a1Vg7Nl1knoknDr3iA3obJwrMViV1ioR3Otei6D8YUU3bqHidiyIb9nGHr",
  
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- cdn for stripe library -->
  <script src="https://js.stripe.com/v3/"></script>

  <script>
    // use client-side test api key
    var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

    // immediately redirect to stripe using your checkout session
    stripe.redirectToCheckout({
      sessionId: 'cs_test_a1Vg7Nl1knoknDr3iA3obJwrMViV1ioR3Otei6D8YUU3bqHidiyIb9nGHr'
    });
  </script>
</body>
</html>
```