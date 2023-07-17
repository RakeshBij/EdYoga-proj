import React from "react";
import BookLogo from "../assets/BookLogo";
import ClockLogo from "../assets/ClockLogo";
import TVLogo from "../assets/TVLogo";
import ScholarLogo from "../assets/ScholarLogo";
import NoAdsLogo from "../assets/NoAdsLogo";
import Form from "./Form";

export const MainSection = () => {
  return (
    <>
      <div className="main">
        {/* The right side of the main */}
        <div className="main-lookup">
          {/* Heading */}
          <div className="header">
            {/* Heading part one */}
            <h4>Access curated courses worth</h4>
            {/* Heading part two */}
            <h4 className="headerSecond">
              {/* Crossed price */}
              <span className="cut">₹ 18,500</span>
              <span>at just</span>
              <span className="blue">₹ 99</span>
              <span>per year!</span>
            </h4>
          </div>
          {/* The remaining list of main 1 */}
          <div className="pointer  mt-3">
            {/* Book icon and content */}
            <div className="pointerIcon">
              <BookLogo className="point-icon-in" />
            </div>
            <div className="pointerContent">
              <span className="blue font-w-600">100+</span> Job relavent courses
            </div>
          </div>
          <div className="pointer">
            {/* Clock icon and content */}
            <div className="pointerIcon">
              <ClockLogo className="point-icon-in" />
            </div>
            <div className="pointerContent">
              <span className="blue font-w-600">20,000+</span> Hours of content
            </div>
          </div>
          <div className="pointer">
            {/* TV icon and content */}
            <div className="pointerIcon">
              <div>
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3_2)">
                    <path
                      d="M18.5518 1.43163C18.0491 0.945471 17.3754 0.676717 16.6763 0.682968C15.9772 0.689218 15.308 0.969574 14.8138 1.46377C14.3192 1.95841 14.0388 2.6272 14.033 3.32628C14.0268 4.02539 14.2955 4.69908 14.7812 5.20217L23.5625 13.9834H8.6665C6.54513 13.9834 4.51028 14.8263 3.00982 16.3267C1.50936 17.8267 0.666504 19.8616 0.666504 21.9834V51.3171C0.666504 53.439 1.50936 55.4734 3.00982 56.9738C4.51028 58.4738 6.54513 59.3171 8.6665 59.3171H51.3339C53.4553 59.3171 55.4902 58.4738 56.9906 56.9738C58.4906 55.4734 59.3339 53.439 59.3339 51.3171V21.9834C59.3339 19.8616 58.4906 17.8267 56.9906 16.3267C55.4902 14.8263 53.4553 13.9834 51.3339 13.9834H36.4379L45.2192 5.20217C45.7049 4.69905 45.9737 4.02537 45.9679 3.32628C45.9616 2.62717 45.6808 1.9584 45.1866 1.46377C44.692 0.969574 44.0232 0.689219 43.3241 0.682968C42.625 0.676718 41.9513 0.945471 41.4487 1.43163L30.0007 12.8796L18.5518 1.43163ZM5.99977 21.9836C5.99977 21.2765 6.28057 20.5979 6.78102 20.0979C7.28102 19.5979 7.95919 19.3171 8.66628 19.3171H51.3337C52.0408 19.3171 52.719 19.5979 53.219 20.0979C53.719 20.5979 54.0002 21.2764 54.0002 21.9836V51.3173C54.0002 52.0245 53.719 52.7026 53.219 53.2026C52.719 53.703 52.0408 53.9838 51.3337 53.9838H8.66628C7.95913 53.9838 7.28102 53.703 6.78102 53.2026C6.28057 52.7026 5.99977 52.0244 5.99977 51.3173V21.9836Z"
                      fill="white"
                    />
                    <g clip-path="url(#clip1_3_2)">
                      <path
                        d="M16.2081 44.2108C14.9028 44.2108 13.9274 43.8514 13.2821 43.1327C12.6368 42.3994 12.3141 41.3141 12.3141 39.8767V29.9548C12.3141 29.3974 12.4534 28.9794 12.7321 28.7008C13.0254 28.4074 13.4434 28.2608 13.9861 28.2608C14.5141 28.2608 14.9174 28.4074 15.1961 28.7008C15.4894 28.9794 15.6361 29.3974 15.6361 29.9548V39.7447C15.6361 40.3461 15.7608 40.7934 16.0101 41.0867C16.2741 41.3654 16.6188 41.5047 17.0441 41.5047C17.1614 41.5047 17.2714 41.4974 17.3741 41.4827C17.4768 41.4681 17.5868 41.4607 17.7041 41.4607C17.9388 41.4314 18.1001 41.5047 18.1881 41.6807C18.2908 41.8421 18.3421 42.1721 18.3421 42.6707C18.3421 43.1107 18.2541 43.4481 18.0781 43.6827C17.9021 43.9027 17.6308 44.0494 17.2641 44.1228C17.1174 44.1374 16.9488 44.1521 16.7581 44.1668C16.5674 44.1961 16.3841 44.2108 16.2081 44.2108ZM21.9723 44.1448C21.4296 44.1448 21.0116 43.9908 20.7183 43.6827C20.4396 43.3601 20.3003 42.9127 20.3003 42.3407V34.8168C20.3003 34.2301 20.4396 33.7828 20.7183 33.4748C21.0116 33.1521 21.4296 32.9908 21.9723 32.9908C22.5003 32.9908 22.9036 33.1521 23.1823 33.4748C23.4756 33.7828 23.6223 34.2301 23.6223 34.8168V42.3407C23.6223 42.9127 23.4829 43.3601 23.2043 43.6827C22.9256 43.9908 22.5149 44.1448 21.9723 44.1448ZM21.9723 31.1868C21.3563 31.1868 20.8796 31.0474 20.5423 30.7688C20.2196 30.4754 20.0583 30.0648 20.0583 29.5368C20.0583 28.9941 20.2196 28.5834 20.5423 28.3048C20.8796 28.0114 21.3563 27.8647 21.9723 27.8647C22.5883 27.8647 23.0576 28.0114 23.3803 28.3048C23.7029 28.5834 23.8643 28.9941 23.8643 29.5368C23.8643 30.0648 23.7029 30.4754 23.3803 30.7688C23.0576 31.0474 22.5883 31.1868 21.9723 31.1868ZM31.423 44.1668C30.9976 44.1668 30.6236 44.0568 30.301 43.8367C29.9783 43.6021 29.7216 43.2574 29.531 42.8027L26.209 35.1468C26.0476 34.7654 25.989 34.4134 26.033 34.0908C26.077 33.7534 26.231 33.4894 26.495 33.2988C26.7736 33.0934 27.155 32.9908 27.639 32.9908C28.035 32.9908 28.3576 33.0861 28.607 33.2768C28.8563 33.4528 29.0763 33.7974 29.267 34.3108L31.863 40.9107H31.159L33.865 34.2888C34.0703 33.7901 34.2976 33.4528 34.547 33.2768C34.7963 33.0861 35.141 32.9908 35.581 32.9908C35.9623 32.9908 36.263 33.0934 36.483 33.2988C36.7176 33.4894 36.857 33.7461 36.901 34.0688C36.9596 34.3914 36.901 34.7434 36.725 35.1248L33.337 42.8027C33.1463 43.2721 32.8896 43.6167 32.567 43.8367C32.259 44.0568 31.8776 44.1668 31.423 44.1668ZM44.6111 44.2108C43.3351 44.2108 42.2351 43.9834 41.3111 43.5287C40.4018 43.0594 39.6978 42.4067 39.1991 41.5707C38.7151 40.7201 38.4731 39.7227 38.4731 38.5787C38.4731 37.4641 38.7078 36.4888 39.1771 35.6528C39.6465 34.8021 40.2991 34.1421 41.1351 33.6728C41.9858 33.1888 42.9465 32.9468 44.0171 32.9468C44.7945 32.9468 45.4985 33.0788 46.1291 33.3428C46.7598 33.5921 47.3025 33.9588 47.7571 34.4428C48.2118 34.9121 48.5565 35.4914 48.7911 36.1808C49.0258 36.8554 49.1431 37.6107 49.1431 38.4467C49.1431 38.7254 49.0551 38.9381 48.8791 39.0847C48.7031 39.2167 48.4465 39.2827 48.1091 39.2827H41.2011V37.5667H46.7451L46.3931 37.8747C46.3931 37.2734 46.3051 36.7748 46.1291 36.3788C45.9531 35.9681 45.6965 35.6601 45.3591 35.4548C45.0365 35.2494 44.6331 35.1468 44.1491 35.1468C43.6065 35.1468 43.1445 35.2714 42.7631 35.5208C42.3818 35.7701 42.0885 36.1294 41.8831 36.5988C41.6778 37.0681 41.5751 37.6327 41.5751 38.2927V38.4688C41.5751 39.5834 41.8318 40.4047 42.3451 40.9327C42.8731 41.4607 43.6505 41.7247 44.6771 41.7247C45.0291 41.7247 45.4325 41.6807 45.8871 41.5927C46.3418 41.5047 46.7671 41.3654 47.1631 41.1747C47.5005 41.0134 47.8011 40.9621 48.0651 41.0207C48.3291 41.0647 48.5345 41.1821 48.6811 41.3727C48.8278 41.5634 48.9085 41.7834 48.9231 42.0327C48.9525 42.2821 48.9011 42.5314 48.7691 42.7807C48.6371 43.0154 48.4171 43.2134 48.1091 43.3747C47.6105 43.6534 47.0458 43.8587 46.4151 43.9908C45.7991 44.1374 45.1978 44.2108 44.6111 44.2108Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_3_2">
                      <rect width="60" height="60" fill="white" />
                    </clipPath>
                    <clipPath id="clip1_3_2">
                      <rect
                        width="38"
                        height="18"
                        fill="white"
                        transform="translate(12 27)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                {/* <div className="logo-text">
                  <svg
                    width="38"
                    height="18"
                    viewBox="0 0 38 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.20809 17.2108C2.90275 17.2108 1.92742 16.8514 1.28209 16.1327C0.636753 15.3994 0.314086 14.3141 0.314086 12.8767V2.95475C0.314086 2.39742 0.453419 1.97942 0.732086 1.70075C1.02542 1.40742 1.44342 1.26075 1.98609 1.26075C2.51409 1.26075 2.91742 1.40742 3.19609 1.70075C3.48942 1.97942 3.63609 2.39742 3.63609 2.95475V12.7447C3.63609 13.3461 3.76075 13.7934 4.01009 14.0867C4.27409 14.3654 4.61875 14.5047 5.04409 14.5047C5.16142 14.5047 5.27142 14.4974 5.37409 14.4827C5.47675 14.4681 5.58675 14.4607 5.70409 14.4607C5.93875 14.4314 6.10009 14.5047 6.18809 14.6807C6.29075 14.8421 6.34209 15.1721 6.34209 15.6707C6.34209 16.1107 6.25409 16.4481 6.07809 16.6827C5.90209 16.9027 5.63075 17.0494 5.26409 17.1228C5.11742 17.1374 4.94875 17.1521 4.75809 17.1668C4.56742 17.1961 4.38409 17.2108 4.20809 17.2108ZM9.97226 17.1448C9.42959 17.1448 9.01159 16.9908 8.71826 16.6827C8.43959 16.3601 8.30026 15.9127 8.30026 15.3407V7.81675C8.30026 7.23008 8.43959 6.78275 8.71826 6.47475C9.01159 6.15208 9.42959 5.99075 9.97226 5.99075C10.5003 5.99075 10.9036 6.15208 11.1823 6.47475C11.4756 6.78275 11.6223 7.23008 11.6223 7.81675V15.3407C11.6223 15.9127 11.4829 16.3601 11.2043 16.6827C10.9256 16.9908 10.5149 17.1448 9.97226 17.1448ZM9.97226 4.18675C9.35626 4.18675 8.87959 4.04742 8.54226 3.76875C8.21959 3.47542 8.05826 3.06475 8.05826 2.53675C8.05826 1.99408 8.21959 1.58342 8.54226 1.30475C8.87959 1.01142 9.35626 0.864749 9.97226 0.864749C10.5883 0.864749 11.0576 1.01142 11.3803 1.30475C11.7029 1.58342 11.8643 1.99408 11.8643 2.53675C11.8643 3.06475 11.7029 3.47542 11.3803 3.76875C11.0576 4.04742 10.5883 4.18675 9.97226 4.18675ZM19.423 17.1668C18.9976 17.1668 18.6236 17.0568 18.301 16.8367C17.9783 16.6021 17.7216 16.2574 17.531 15.8027L14.209 8.14675C14.0476 7.76542 13.989 7.41342 14.033 7.09075C14.077 6.75342 14.231 6.48942 14.495 6.29875C14.7736 6.09342 15.155 5.99075 15.639 5.99075C16.035 5.99075 16.3576 6.08608 16.607 6.27675C16.8563 6.45275 17.0763 6.79742 17.267 7.31075L19.863 13.9107H19.159L21.865 7.28875C22.0703 6.79008 22.2976 6.45275 22.547 6.27675C22.7963 6.08608 23.141 5.99075 23.581 5.99075C23.9623 5.99075 24.263 6.09342 24.483 6.29875C24.7176 6.48942 24.857 6.74608 24.901 7.06875C24.9596 7.39142 24.901 7.74342 24.725 8.12475L21.337 15.8027C21.1463 16.2721 20.8896 16.6167 20.567 16.8367C20.259 17.0568 19.8776 17.1668 19.423 17.1668ZM32.6111 17.2108C31.3351 17.2108 30.2351 16.9834 29.3111 16.5287C28.4018 16.0594 27.6978 15.4067 27.1991 14.5707C26.7151 13.7201 26.4731 12.7227 26.4731 11.5787C26.4731 10.4641 26.7078 9.48875 27.1771 8.65275C27.6465 7.80208 28.2991 7.14208 29.1351 6.67275C29.9858 6.18875 30.9465 5.94675 32.0171 5.94675C32.7945 5.94675 33.4985 6.07875 34.1291 6.34275C34.7598 6.59208 35.3025 6.95875 35.7571 7.44275C36.2118 7.91208 36.5565 8.49142 36.7911 9.18075C37.0258 9.85542 37.1431 10.6107 37.1431 11.4467C37.1431 11.7254 37.0551 11.9381 36.8791 12.0847C36.7031 12.2167 36.4465 12.2827 36.1091 12.2827H29.2011V10.5667H34.7451L34.3931 10.8747C34.3931 10.2734 34.3051 9.77475 34.1291 9.37875C33.9531 8.96808 33.6965 8.66008 33.3591 8.45475C33.0365 8.24942 32.6331 8.14675 32.1491 8.14675C31.6065 8.14675 31.1445 8.27142 30.7631 8.52075C30.3818 8.77008 30.0885 9.12942 29.8831 9.59875C29.6778 10.0681 29.5751 10.6327 29.5751 11.2927V11.4688C29.5751 12.5834 29.8318 13.4047 30.3451 13.9327C30.8731 14.4607 31.6505 14.7247 32.6771 14.7247C33.0291 14.7247 33.4325 14.6807 33.8871 14.5927C34.3418 14.5047 34.7671 14.3654 35.1631 14.1747C35.5005 14.0134 35.8011 13.9621 36.0651 14.0207C36.3291 14.0647 36.5345 14.1821 36.6811 14.3727C36.8278 14.5634 36.9085 14.7834 36.9231 15.0327C36.9525 15.2821 36.9011 15.5314 36.7691 15.7807C36.6371 16.0154 36.4171 16.2134 36.1091 16.3747C35.6105 16.6534 35.0458 16.8587 34.4151 16.9908C33.7991 17.1374 33.1978 17.2108 32.6111 17.2108Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="live-logp">
                  <TVLogo className="point-icon-in " />
                </div> */}
              </div>
            </div>
            <div className="pointerContent">
              <span className="blue font-w-600">Exclusive</span> webinar access
            </div>
          </div>
          <div className="pointer">
            {/* Scholar icon and content */}
            <div className="pointerIcon">
              <ScholarLogo className="point-icon-in" />
            </div>
            <div className="pointerContent">
              Scholarship worth <span className="blue font-w-600">₹94,500</span>
            </div>
          </div>
          <div className="pointer">
            {/* Ads icon and content */}
            <div className="pointerIcon">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_3_17)">
                  <path
                    d="M29.0002 0.186279C13.1122 0.186279 0.186523 13.112 0.186523 29C0.186523 44.888 13.1122 57.8137 29.0002 57.8137C44.8882 57.8137 57.814 44.888 57.814 29C57.814 13.112 44.8882 0.186279 29.0002 0.186279ZM29.0002 52.0537C16.2894 52.0537 5.94652 41.7118 5.94652 29C5.94652 16.2882 16.2889 5.94628 29.0002 5.94628C41.7116 5.94628 52.054 16.2887 52.054 29C52.054 41.7113 41.7116 52.0537 29.0002 52.0537Z"
                    fill="white"
                  />
                  <g clip-path="url(#clip1_3_17)">
                    <path
                      d="M48.9704 12.2004C49.7515 11.4194 49.7515 10.153 48.9704 9.37198C48.1894 8.59093 46.923 8.59093 46.142 9.37198L9.37243 46.1415C8.59138 46.9226 8.59138 48.1889 9.37243 48.97C10.1535 49.751 11.4198 49.751 12.2009 48.97L48.9704 12.2004Z"
                      fill="white"
                    />
                    <g clip-path="url(#clip2_3_17)">
                      <path
                        d="M9.70401 35.1198C9.33201 35.1198 9.02001 35.0358 8.76801 34.8678C8.51601 34.6878 8.36001 34.4478 8.30001 34.1478C8.24001 33.8358 8.29401 33.4878 8.46201 33.1038L12.944 23.4558C13.16 22.9878 13.424 22.6458 13.736 22.4298C14.06 22.2138 14.426 22.1058 14.834 22.1058C15.242 22.1058 15.596 22.2138 15.896 22.4298C16.208 22.6458 16.478 22.9878 16.706 23.4558L21.188 33.1038C21.38 33.4878 21.446 33.8358 21.386 34.1478C21.338 34.4598 21.188 34.6998 20.936 34.8678C20.696 35.0358 20.396 35.1198 20.036 35.1198C19.556 35.1198 19.184 35.0118 18.92 34.7958C18.668 34.5798 18.44 34.2318 18.236 33.7518L17.264 31.4658L18.524 32.3838H11.108L12.386 31.4658L11.414 33.7518C11.198 34.2318 10.976 34.5798 10.748 34.7958C10.52 35.0118 10.172 35.1198 9.70401 35.1198ZM14.798 25.7238L12.71 30.7098L12.206 29.8458H17.444L16.94 30.7098L14.834 25.7238H14.798ZM25.1065 34.9578C24.5425 34.9578 24.1105 34.8138 23.8105 34.5258C23.5225 34.2258 23.3785 33.7998 23.3785 33.2478V23.9778C23.3785 23.4258 23.5225 23.0058 23.8105 22.7178C24.1105 22.4178 24.5425 22.2678 25.1065 22.2678H28.6345C30.8425 22.2678 32.5465 22.8198 33.7465 23.9238C34.9585 25.0278 35.5645 26.5878 35.5645 28.6038C35.5645 29.6118 35.4085 30.5118 35.0965 31.3038C34.7845 32.0838 34.3345 32.7498 33.7465 33.3018C33.1585 33.8418 32.4325 34.2558 31.5685 34.5438C30.7165 34.8198 29.7385 34.9578 28.6345 34.9578H25.1065ZM26.6905 32.2758H28.4185C29.0545 32.2758 29.6005 32.1978 30.0565 32.0418C30.5245 31.8858 30.9085 31.6578 31.2085 31.3578C31.5205 31.0578 31.7485 30.6798 31.8925 30.2238C32.0485 29.7678 32.1265 29.2278 32.1265 28.6038C32.1265 27.3558 31.8205 26.4378 31.2085 25.8498C30.5965 25.2498 29.6665 24.9498 28.4185 24.9498H26.6905V32.2758ZM42.7849 35.1558C42.3049 35.1558 41.8009 35.1198 41.2729 35.0478C40.7569 34.9878 40.2649 34.8918 39.7969 34.7598C39.3289 34.6278 38.9089 34.4718 38.5369 34.2918C38.2129 34.1358 37.9849 33.9318 37.8529 33.6798C37.7209 33.4158 37.6729 33.1398 37.7089 32.8518C37.7449 32.5638 37.8469 32.3118 38.0149 32.0958C38.1829 31.8678 38.4049 31.7178 38.6809 31.6458C38.9569 31.5618 39.2689 31.5978 39.6169 31.7538C40.0729 31.9698 40.5889 32.1378 41.1649 32.2578C41.7409 32.3778 42.2809 32.4378 42.7849 32.4378C43.5769 32.4378 44.1289 32.3358 44.4409 32.1318C44.7649 31.9158 44.9269 31.6518 44.9269 31.3398C44.9269 31.0638 44.8129 30.8418 44.5849 30.6738C44.3689 30.5058 43.9789 30.3618 43.4149 30.2418L41.3089 29.7918C40.1569 29.5518 39.2989 29.1318 38.7349 28.5318C38.1709 27.9318 37.8889 27.1578 37.8889 26.2098C37.8889 25.5858 38.0149 25.0218 38.2669 24.5178C38.5309 24.0018 38.8969 23.5638 39.3649 23.2038C39.8449 22.8438 40.4089 22.5678 41.0569 22.3758C41.7169 22.1718 42.4489 22.0698 43.2529 22.0698C43.8769 22.0698 44.5069 22.1418 45.1429 22.2858C45.7909 22.4178 46.3489 22.6218 46.8169 22.8978C47.0929 23.0418 47.2909 23.2398 47.4109 23.4918C47.5309 23.7438 47.5789 24.0078 47.5549 24.2838C47.5309 24.5478 47.4349 24.7818 47.2669 24.9858C47.1109 25.1898 46.8949 25.3278 46.6189 25.3998C46.3549 25.4598 46.0369 25.4118 45.6649 25.2558C45.3169 25.0998 44.9209 24.9858 44.4769 24.9138C44.0449 24.8298 43.6249 24.7878 43.2169 24.7878C42.7729 24.7878 42.3949 24.8418 42.0829 24.9498C41.7709 25.0458 41.5309 25.1898 41.3629 25.3818C41.2069 25.5738 41.1289 25.7958 41.1289 26.0478C41.1289 26.2998 41.2309 26.5158 41.4349 26.6958C41.6509 26.8638 42.0409 27.0078 42.6049 27.1278L44.6929 27.5778C45.8569 27.8298 46.7269 28.2438 47.3029 28.8198C47.8789 29.3958 48.1669 30.1458 48.1669 31.0698C48.1669 31.6938 48.0409 32.2578 47.7889 32.7618C47.5369 33.2658 47.1769 33.6978 46.7089 34.0578C46.2409 34.4058 45.6769 34.6758 45.0169 34.8678C44.3569 35.0598 43.6129 35.1558 42.7849 35.1558Z"
                        fill="white"
                      />
                    </g>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_3_17">
                    <rect width="58" height="58" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_3_17">
                    <rect
                      width="42"
                      height="42"
                      fill="white"
                      transform="translate(8 8)"
                    />
                  </clipPath>
                  <clipPath id="clip2_3_17">
                    <rect
                      width="41"
                      height="14"
                      fill="white"
                      transform="translate(8 22)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="pointerContent">
              <span className="blue font-w-600">Ad Free</span> learning
              experience
            </div>
          </div>
        </div>
        {/* The left side of the main (FORM)*/}
        <Form />
      </div>
    </>
  );
};