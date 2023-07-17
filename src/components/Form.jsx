import React from "react";

const Form = () => {
  return (
    <>
      <div className="form">
        {/* First part of the form signup, and subscribe */}
        <div className="form-1">
          <div>
            <div className="form-1-num">1</div>
            <div className="form-1-cont">Sign Up</div>
          </div>
          <div>
            <div className="form-1-num">2</div>
            <div className="form-1-cont">Subscribe</div>
          </div>
        </div>
        {/* Second part of the form */}
        <div className="form-2">Select your subcription plan</div>
        {/* Input part of the form */}
        <div className="input-container">
          {/* Disabled  */}
          <div className="text-field disabled">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                d="M4.63541 21.3037L4.63559 21.3041C5.28716 22.815 6.16685 24.1194 7.27378 25.2263C8.3807 26.3332 9.68505 27.2129 11.196 27.8645L11.1964 27.8647C12.688 28.5087 14.2858 28.8334 16 28.8334C17.7142 28.8334 19.312 28.5087 20.8036 27.8647L20.804 27.8645C22.315 27.2129 23.6193 26.3332 24.7262 25.2263C25.8332 24.1194 26.7128 22.815 27.3644 21.3041L27.3646 21.3037C28.0086 19.8121 28.3333 18.2143 28.3333 16.5001C28.3333 14.7859 28.0086 13.1881 27.3646 11.6965L27.3644 11.6961C26.7128 10.1851 25.8332 8.88078 24.7262 7.77386C23.6193 6.66694 22.315 5.78679 20.804 5.13434L4.63541 21.3037ZM4.63541 21.3037C3.99138 19.8121 3.66667 18.2143 3.66667 16.5001C3.66667 14.7859 3.99138 13.1881 4.63541 11.6965L4.63559 11.6961M4.63541 21.3037L4.63559 11.6961M4.63559 11.6961C5.28716 10.1851 6.16685 8.88078 7.27378 7.77386M4.63559 11.6961L7.27378 7.77386M7.27378 7.77386C8.3808 6.66684 9.68529 5.78663 11.1964 5.13416M7.27378 7.77386L11.1964 5.13416M11.1964 5.13416C12.688 4.49102 14.2858 4.16675 16 4.16675M11.1964 5.13416L16 4.16675M16 4.16675C17.7142 4.16675 19.312 4.49102 20.8036 5.13416L16 4.16675Z"
                stroke="#BEBEBE"
                stroke-width="2"
              />
            </svg> */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3_25)">
                <path
                  d="M14.0001 0.0899353C6.33002 0.0899353 0.0900421 6.32994 0.0900421 14C0.0900421 21.6701 6.33002 27.9101 14.0001 27.9101C21.6702 27.9101 27.9102 21.6701 27.9102 14C27.9102 6.32994 21.6702 0.0899353 14.0001 0.0899353ZM14.0001 25.1294C7.86384 25.1294 2.87073 20.1367 2.87073 14C2.87073 7.86328 7.8636 2.87063 14.0001 2.87063C20.1366 2.87063 25.1295 7.86352 25.1295 14C25.1295 20.1365 20.1366 25.1294 14.0001 25.1294Z"
                  fill="#BEBEBE"
                />
                <path
                  d="M14 23C12.755 23 11.585 22.7636 10.49 22.2908C9.39504 21.8186 8.4425 21.1775 7.6325 20.3675C6.8225 19.5575 6.1814 18.605 5.7092 17.51C5.2364 16.415 5 15.245 5 14C5 12.755 5.2364 11.585 5.7092 10.49C6.1814 9.39504 6.8225 8.4425 7.6325 7.6325C8.4425 6.8225 9.39504 6.1811 10.49 5.7083C11.585 5.2361 12.755 5 14 5C15.245 5 16.415 5.2361 17.51 5.7083C18.605 6.1811 19.5575 6.8225 20.3675 7.6325C21.1775 8.4425 21.8186 9.39504 22.2908 10.49C22.7636 11.585 23 12.755 23 14C23 15.245 22.7636 16.415 22.2908 17.51C21.8186 18.605 21.1775 19.5575 20.3675 20.3675C19.5575 21.1775 18.605 21.8186 17.51 22.2908C16.415 22.7636 15.245 23 14 23Z"
                  fill="#BEBEBE"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_25">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="text-cont-3">
              <div className="text-cont-3-1">12 Months Subscription </div>
              <div className="text-cont-3-2">
                <div className="top-text">
                  <div>Total</div>
                  <div>₹99</div>
                </div>
                <div className="bottom-text">
                  <div>₹8</div>
                  <div>/mo</div>
                </div>
              </div>
            </div>
          </div>
          {/* Recommended  */}
          <div className="text-field recommended">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                d="M14.1333 22.6334L23.5333 13.2334L21.6667 11.3667L14.1333 18.9001L10.3333 15.1001L8.46667 16.9667L14.1333 22.6334ZM16 29.8334C14.1556 29.8334 12.4222 29.4832 10.8 28.7827C9.17778 28.0832 7.76667 27.1334 6.56667 25.9334C5.36667 24.7334 4.41689 23.3223 3.71733 21.7001C3.01689 20.0779 2.66667 18.3445 2.66667 16.5001C2.66667 14.6556 3.01689 12.9223 3.71733 11.3001C4.41689 9.67786 5.36667 8.26675 6.56667 7.06675C7.76667 5.86675 9.17778 4.91653 10.8 4.21608C12.4222 3.51653 14.1556 3.16675 16 3.16675C17.8444 3.16675 19.5778 3.51653 21.2 4.21608C22.8222 4.91653 24.2333 5.86675 25.4333 7.06675C26.6333 8.26675 27.5831 9.67786 28.2827 11.3001C28.9831 12.9223 29.3333 14.6556 29.3333 16.5001C29.3333 18.3445 28.9831 20.0779 28.2827 21.7001C27.5831 23.3223 26.6333 24.7334 25.4333 25.9334C24.2333 27.1334 22.8222 28.0832 21.2 28.7827C19.5778 29.4832 17.8444 29.8334 16 29.8334Z"
                fill="#47BA68"
              />
            </svg>
            <div className="text-cont-3">
              <div className="text-cont-3-1">12 Months Subscription </div>
              <div className="text-cont-3-2">
                <div className="top-text">
                  <div>Total</div>
                  <div>₹179</div>
                </div>
                <div className="bottom-text">
                  <div>₹15</div>
                  <div>/mo</div>
                </div>
              </div>
            </div>
          </div>
          {/* 6 MOnths  */}
          <div className="text-field">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 512 512"
            >
              <path
                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                stroke="#BEBEBE"
                stroke-width="2"
              />
            </svg> */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.0002 0.186279C13.1122 0.186279 0.186523 13.112 0.186523 29C0.186523 44.888 13.1122 57.8137 29.0002 57.8137C44.8882 57.8137 57.814 44.888 57.814 29C57.814 13.112 44.8882 0.186279 29.0002 0.186279ZM29.0002 52.0537C16.2894 52.0537 5.94652 41.7118 5.94652 29C5.94652 16.2882 16.2889 5.94628 29.0002 5.94628C41.7116 5.94628 52.054 16.2887 52.054 29C52.054 41.7113 41.7116 52.0537 29.0002 52.0537Z"
                fill="#BEBEBE"
              />
            </svg>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                d="M4.63541 21.3037L4.63559 21.3041C5.28716 22.815 6.16685 24.1194 7.27378 25.2263C8.3807 26.3332 9.68505 27.2129 11.196 27.8645L11.1964 27.8647C12.688 28.5087 14.2858 28.8334 16 28.8334C17.7142 28.8334 19.312 28.5087 20.8036 27.8647L20.804 27.8645C22.315 27.2129 23.6193 26.3332 24.7262 25.2263C25.8332 24.1194 26.7128 22.815 27.3644 21.3041L27.3646 21.3037C28.0086 19.8121 28.3333 18.2143 28.3333 16.5001C28.3333 14.7859 28.0086 13.1881 27.3646 11.6965L27.3644 11.6961C26.7128 10.1851 25.8332 8.88078 24.7262 7.77386C23.6193 6.66694 22.315 5.78679 20.804 5.13434L4.63541 21.3037ZM4.63541 21.3037C3.99138 19.8121 3.66667 18.2143 3.66667 16.5001C3.66667 14.7859 3.99138 13.1881 4.63541 11.6965L4.63559 11.6961M4.63541 21.3037L4.63559 11.6961M4.63559 11.6961C5.28716 10.1851 6.16685 8.88078 7.27378 7.77386M4.63559 11.6961L7.27378 7.77386M7.27378 7.77386C8.3808 6.66684 9.68529 5.78663 11.1964 5.13416M7.27378 7.77386L11.1964 5.13416M11.1964 5.13416C12.688 4.49102 14.2858 4.16675 16 4.16675M11.1964 5.13416L16 4.16675M16 4.16675C17.7142 4.16675 19.312 4.49102 20.8036 5.13416L16 4.16675Z"
                stroke="#BEBEBE"
                stroke-width="2"
              />
            </svg> */}
            <div className="text-cont-3">
              <div className="text-cont-3-1">6 Months Subscription </div>
              <div className="text-cont-3-2">
                <div className="top-text">
                  <div>Total</div>
                  <div>₹149</div>
                </div>
                <div className="bottom-text">
                  <div>₹25</div>
                  <div>/mo</div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 months */}
          <div className="text-field">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
            >
              <path
                d="M4.63541 21.3037L4.63559 21.3041C5.28716 22.815 6.16685 24.1194 7.27378 25.2263C8.3807 26.3332 9.68505 27.2129 11.196 27.8645L11.1964 27.8647C12.688 28.5087 14.2858 28.8334 16 28.8334C17.7142 28.8334 19.312 28.5087 20.8036 27.8647L20.804 27.8645C22.315 27.2129 23.6193 26.3332 24.7262 25.2263C25.8332 24.1194 26.7128 22.815 27.3644 21.3041L27.3646 21.3037C28.0086 19.8121 28.3333 18.2143 28.3333 16.5001C28.3333 14.7859 28.0086 13.1881 27.3646 11.6965L27.3644 11.6961C26.7128 10.1851 25.8332 8.88078 24.7262 7.77386C23.6193 6.66694 22.315 5.78679 20.804 5.13434L4.63541 21.3037ZM4.63541 21.3037C3.99138 19.8121 3.66667 18.2143 3.66667 16.5001C3.66667 14.7859 3.99138 13.1881 4.63541 11.6965L4.63559 11.6961M4.63541 21.3037L4.63559 11.6961M4.63559 11.6961C5.28716 10.1851 6.16685 8.88078 7.27378 7.77386M4.63559 11.6961L7.27378 7.77386M7.27378 7.77386C8.3808 6.66684 9.68529 5.78663 11.1964 5.13416M7.27378 7.77386L11.1964 5.13416M11.1964 5.13416C12.688 4.49102 14.2858 4.16675 16 4.16675M11.1964 5.13416L16 4.16675M16 4.16675C17.7142 4.16675 19.312 4.49102 20.8036 5.13416L16 4.16675Z"
                stroke="#BEBEBE"
                stroke-width="2"
              />
            </svg> */}

            <svg
              width="28"
              height="28"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.0002 0.186279C13.1122 0.186279 0.186523 13.112 0.186523 29C0.186523 44.888 13.1122 57.8137 29.0002 57.8137C44.8882 57.8137 57.814 44.888 57.814 29C57.814 13.112 44.8882 0.186279 29.0002 0.186279ZM29.0002 52.0537C16.2894 52.0537 5.94652 41.7118 5.94652 29C5.94652 16.2882 16.2889 5.94628 29.0002 5.94628C41.7116 5.94628 52.054 16.2887 52.054 29C52.054 41.7113 41.7116 52.0537 29.0002 52.0537Z"
                fill="#BEBEBE"
              />
            </svg>
            <div className="text-cont-3">
              <div className="text-cont-3-1">3 Months Subscription </div>
              <div className="text-cont-3-2">
                <div className="top-text">
                  <div>Total</div>
                  <div>₹99</div>
                </div>
                <div className="bottom-text">
                  <div>₹33</div>
                  <div>/mo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* the total sectiond */}
        <div className="summary-cont">
          <div className="text-cont">
            <div>Subscription Fee</div>
            <div className="sub-fees">₹18,500</div>
          </div>
          <div className="alert-cont">
            <div className="alert-header">
              <div>Limited time offer</div>
              <div className="alert-offer-price">- ₹18,401</div>
            </div>
            <div className="alert-body">
              <div className="alert-body-clock-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11 7V13L16.2 16.1L17 14.9L12.5 12.2V7H11ZM20 12V18H22V12H20ZM20 20V22H22V20H20ZM18 20C16.3 21.3 14.3 22 12 22C6.49998 22 1.99998 17.5 1.99998 12C1.99998 6.5 6.49998 2 12 2C16.8 2 20.9 5.4 21.8 10H19.7C18.8 6.6 15.7 4 12 4C7.59998 4 3.99998 7.6 3.99998 12C3.99998 16.4 7.59998 20 12 20C14.4 20 16.5 18.9 18 17.3V20Z"
                    fill="#DE4313"
                  />
                </svg>
              </div>
              <div className="alert-body-text">
                Offer valid till 25th March 2023{" "}
              </div>
            </div>
          </div>
          <div className="text-cont">
            <div className="pre-total-text">
              Total <span style={{ fontWeight: 400 }}>(Incl. of 18% GST)</span>
            </div>
            <div className="grand-total">₹149</div>
          </div>
        </div>
        {/* The buttons */}
        <div className="form-btn-cont">
          <button className="secondary-btn">Cancel</button>
          <button className="primary-btn">proceed to pay</button>
        </div>
        {/* razor pay logo */}
        <div className="razor"></div>
      </div>
    </>
  );
};

export default Form;
