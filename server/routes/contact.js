const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const contact = await Contact.create(req.body);

    // Forward lead to external HeyDay admin dashboard
    try {
      await fetch(process.env.ADMIN_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.ADMIN_API_KEY,
        },
        body: JSON.stringify({
          website: "heyday",
          full_name: req.body.name,
          phone_number: req.body.phone,
          email: req.body.email,
          subject: req.body.subject,
          preferred_contact_method: req.body.contactMethod,
          property_type: req.body.propertyType,
          preferred_location: req.body.location,
          budget_range: req.body.budget,
          area_size: req.body.area,
          message: req.body.message,
        }),
      });
    } catch (forwardErr) {
      console.error("Admin dashboard forward failed:", forwardErr.message);
      // don't fail the user's request just because forwarding failed
    }

    res.status(201).json({ success: true, message: "Lead submitted successfully", data: contact });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;