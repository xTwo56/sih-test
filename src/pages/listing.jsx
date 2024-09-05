import React from "react";
import wheat from "../assets/wheat.jpeg";

const Listing = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 text-[#64d2af]">
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left mx-auto ">
        WHEAT CONTRACT FARMING AGREEMENT
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src={wheat}
          alt="A vast wheat field, ready for harvest"
          className="w-full md:w-1/2 h-auto mb-4 md:mb-0 rounded-lg shadow-lg"
        />

        <div className="md:ml-6">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              1. SCOPE OF AGREEMENT
            </h2>
            <p className="text-base  text-[#7d7d7d]">
              The Farmer agrees to cultivate and deliver [Quantity] tons of
              wheat on [Number] acres of farmland located at [Farm Location].
              This must meet the quality standards and specifications outlined
              in the agreement. The Buyer agrees to purchase the wheat from the
              Farmer under the terms set forth.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              2. QUALITY SPECIFICATIONS
            </h2>
            <p className="text-base text-[#7d7d7d]">
              The wheat to be delivered must meet the following specifications:
            </p>
            <ul className="list-disc list-inside text-[#7d7d7d]">
              <li>
                <b className="text-[#3a3839]">Moisture Content:</b> No more than
                [X]%
              </li>
              <li>
                <b className="text-[#3a3839]">Protein Level:</b> At least [Y]%
              </li>
              <li>
                <b className="text-[#3a3839]">Grain Size:</b> [Specific size or
                standard]
              </li>
            </ul>
            <p className="text-base text-[#7d7d7d] mt-2">
              The wheat must pass a quality inspection at the time of delivery.
              Other quality requirements must be adhered to as agreed.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              3. PROVISION OF INPUTS
            </h2>
            <p className="text-base text-[#7d7d7d]">
              The Buyer agrees to provide the following inputs to the Farmer:
            </p>
            <ul className="list-disc list-inside text-[#7d7d7d]">
              <li>Seeds (variety and quantity)</li>
              <li>Fertilizers and pesticides</li>
            </ul>
            <p className="text-base text-[#7d7d7d] mt-2">
              The cost of these inputs will either:
            </p>
            <ul className="list-disc list-inside text-[#7d7d7d]">
              <li>Be deducted from the final payment to the Farmer, or</li>
              <li>
                Be provided at no additional cost to the Farmer as part of the
                agreement.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              4. DELIVERY SCHEDULE
            </h2>
            <p className="text-base text-[#7d7d7d]">
              The Farmer agrees to deliver the wheat to the Buyer at [Delivery
              Location] no later than [Delivery Date(s)]. The delivery schedule
              is as follows:
            </p>
            <ul className="list-disc list-inside text-[#7d7d7d]">
              <li>
                <span className="text-[#3a3839]">First Delivery:</span> [Date
                and Quantity]
              </li>
              <li>
                <span className="text-[#3a3839]">Final Delivery:</span> [Date
                and Quantity]
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              5. PRICE AND PAYMENT TERMS
            </h2>
            <p className="text-base text-[#7d7d7d]">
              The Buyer agrees to purchase the wheat at a rate of [Agreed Price]
              per ton, subject to the wheat meeting the agreed-upon quality
              standards. Payment will be made:
            </p>
            <ul className="list-disc list-inside text-[#7d7d7d]">
              <li>Upon delivery and inspection, or</li>
              <li>Within [X] days of delivery.</li>
            </ul>
            <p className="text-base text-[#7d7d7d] mt-2">
              Any deductions for inputs will be clearly detailed in the payment
              breakdown provided to the Farmer.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              6. INSPECTION AND QUALITY CONTROL
            </h2>
            <p className="text-base text-[#7d7d7d]">
              Upon delivery, the Buyer will inspect the wheat to ensure it meets
              the required quality specifications. If the wheat does not meet
              these standards, the Buyer reserves the right to:
            </p>
            <ul className="list-disc list-inside text-[#7d7d7d]">
              <li>Reject the wheat and return it to the Farmer, or</li>
              <li>Renegotiate the price based on the quality delivered.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">7. RISK AND TITLE</h2>
            <p className="text-base text-[#7d7d7d]">
              Risk of loss or damage to the wheat remains with the Farmer until
              it is delivered and accepted by the Buyer. Once the wheat is
              inspected and accepted, the title and risk transfer to the Buyer.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              8. FARMER'S OBLIGATIONS
            </h2>
            <ul className="list-disc list-inside text-[#7d7d7d]">
              <li>
                The Farmer agrees to follow the cultivation practices and
                guidelines provided by the Buyer.
              </li>
              <li>
                The Farmer must notify the Buyer immediately in case of any
                unforeseen circumstances (e.g., natural disasters) that could
                affect production or delivery.
              </li>
              <li>
                The Farmer is responsible for maintaining the crop's health and
                quality until the point of delivery.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              9. BUYER'S OBLIGATIONS
            </h2>
            <ul className="list-disc list-inside text-[#7d7d7d]">
              <li>
                The Buyer agrees to provide the Farmer with support as outlined
                under "Provision of Inputs."
              </li>
              <li>
                The Buyer agrees to inspect the wheat upon delivery and process
                payments promptly.
              </li>
              <li>
                The Buyer may conduct regular farm visits to monitor crop
                progress.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">
              10. DISPUTE RESOLUTION
            </h2>
            <p className="text-base text-[#7d7d7d]">
              In the event of a dispute arising out of this Agreement, both
              parties agree to attempt resolution through negotiation. If the
              dispute cannot be resolved, the matter will be referred to
              [Mediation/Arbitration].
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">11. TERMINATION</h2>
            <p className="text-base text-[#7d7d7d]">
              Either party may terminate this Agreement if the other party
              breaches any material obligation under this Agreement, provided
              that written notice is given, and the breach is not cured within
              [X] days.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">12. MISCELLANEOUS</h2>
            <ul className="list-disc list-inside text-[#7d7d7d]">
              <li>
                <b className="text-[#3a3839]">Governing Law:</b> This Agreement
                shall be governed by the laws of [Jurisdiction].
              </li>
              <li>
                <b className="text-[#3a3839]">Entire Agreement:</b> This
                Agreement constitutes the entire understanding between the
                parties and supersedes all prior agreements or understandings.
              </li>
              <li>
                <b className="text-[#3a3839]">Amendments:</b> Any changes to
                this Agreement must be made in writing and signed by both
                parties.
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="flex justify-evenly">
        <button>APPLY</button>
        <button>CHAT</button>
        <button></button>
      </div>
    </div>
  );
};

export default Listing;
