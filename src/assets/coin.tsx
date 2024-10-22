import React from 'react';

const Coin = ({
  width = 20,
  height = 20,
  fill = '#000000',
  style = {},
  ...props
}) => (
  <svg
    height={height}
    width={width}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill={fill}
    style={style}
    {...props}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <circle style={{ fill: '#FF9839' }} cx="256" cy="256" r="245.801" />
      <circle style={{ fill: '#FFD890' }} cx="256" cy="256" r="196.845" />
      <g>
        <path
          style={{ fill: '#4C1D1D' }}
          d="M256,512c-68.38,0-132.667-26.628-181.02-74.98S0,324.38,0,256S26.628,123.333,74.98,74.98 S187.62,0,256,0s132.667,26.628,181.02,74.98S512,187.62,512,256s-26.628,132.667-74.98,181.02S324.38,512,256,512z M256,20.398 C126.089,20.398,20.398,126.089,20.398,256S126.089,491.602,256,491.602S491.602,385.911,491.602,256S385.911,20.398,256,20.398z"
        />
        <path
          style={{ fill: '#4C1D1D' }}
          d="M256,463.044c-114.165,0-207.044-92.879-207.044-207.044S141.835,48.956,256,48.956 S463.044,141.835,463.044,256S370.165,463.044,256,463.044z M256,69.355C153.083,69.355,69.355,153.083,69.355,256 S153.083,442.645,256,442.645S442.645,358.917,442.645,256S358.917,69.355,256,69.355z"
        />
        <path
          style={{ fill: '#4C1D1D' }}
          d="M249.817,363.203c-38.143-0.302-60.546-21.797-60.546-32.695c0-4.844,4.541-11.201,9.081-11.201 c7.266,0,13.926,23.915,51.463,24.823v-88.094c-26.64-9.384-55.096-18.467-55.096-57.215c0-38.143,28.759-50.253,55.096-52.069 v-9.384c0-3.027,3.027-5.752,6.963-5.752c3.33,0,6.963,2.724,6.963,5.752v8.778c21.797,0.909,46.015,8.477,46.015,18.466 c0,3.936-3.33,11.201-8.778,11.201s-14.531-9.99-37.235-11.201v75.076c25.127,9.082,51.463,21.797,51.463,63.27 c0,36.63-21.191,55.399-51.463,59.335V374.1c0,3.027-3.633,5.751-6.963,5.751c-3.935,0-6.963-2.724-6.963-5.751L249.817,363.203 L249.817,363.203z"
        />
        <path
          style={{ fill: '#4C1D1D' }}
          d="M378.694,375.331c-2.412,0-4.833-0.851-6.777-2.58c-4.207-3.745-4.583-10.192-0.837-14.399 c15.84-17.797,27.472-39.294,33.636-62.168c1.467-5.439,7.065-8.662,12.502-7.194c5.439,1.466,8.66,7.063,7.194,12.501 c-6.984,25.918-20.158,50.27-38.095,70.421C384.302,374.176,381.504,375.331,378.694,375.331z"
        />
        <path
          style={{ fill: '#4C1D1D' }}
          d="M420.136,271.299c-0.106,0-0.211-0.001-0.318-0.005c-5.631-0.171-10.054-4.876-9.882-10.506 c0.048-1.582,0.072-3.192,0.072-4.788c0-5.633,4.566-10.199,10.199-10.199s10.199,4.566,10.199,10.199 c0,1.802-0.028,3.623-0.083,5.412C430.154,266.936,425.624,271.299,420.136,271.299z"
        />
      </g>
    </g>
  </svg>
);

export default Coin;