import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const ListingDesktop = () => {
  const [groupDateTimePickerValue, setGroupDateTimePickerValue] =
    useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="relative bg-primary-contrast w-full h-[236.25rem] overflow-hidden text-center text-[1.38rem] text-black font-sf-pro-display">
        <img
          className="absolute top-[13.13rem] left-[18.31rem] w-[53.38rem] h-[33.31rem] object-cover"
          alt=""
          src="/image-2@2x.png"
        />
        <div className="absolute top-[131.94rem] left-[26.44rem] leading-[120%] font-medium inline-block w-[16.38rem]">
          Connecting artificial intelligence with digital product design
        </div>
        <div className="absolute top-[131.94rem] left-[47.19rem] leading-[120%] font-medium inline-block w-[16.38rem]">
          It’s all about finding the perfect balance
        </div>
        <img
          className="absolute top-[119.69rem] left-[25.13rem] w-[19rem] h-[11rem] object-cover"
          alt=""
          src="/rectangle-14@2x.png"
        />
        <img
          className="absolute top-[119.69rem] left-[45.88rem] w-[19rem] h-[11rem] object-cover"
          alt=""
          src="/rectangle-15@2x.png"
        />
        <div className="absolute top-[193.69rem] left-[26.44rem] leading-[120%] font-medium inline-block w-[16.38rem]">
          Connecting artificial intelligence with digital product design
        </div>
        <div className="absolute top-[193.69rem] left-[47.19rem] leading-[120%] font-medium inline-block w-[16.38rem]">
          How modern remote working tools get along with Old School Cowboy's
          methods
        </div>
        <img
          className="absolute top-[181.44rem] left-[25.13rem] w-[19rem] h-[11rem] object-cover"
          alt=""
          src="/rectangle-16@2x.png"
        />
        <img
          className="absolute top-[181.44rem] left-[45.88rem] w-[19rem] h-[11rem] object-cover"
          alt=""
          src="/rectangle-18@2x.png"
        />
        <div className="absolute top-[110.81rem] left-[26.44rem] leading-[120%] font-medium inline-block w-[16.38rem]">
          Hello world, or, in other words, why this blog exists
        </div>
        <div className="absolute top-[110.81rem] left-[47.19rem] leading-[120%] font-medium inline-block w-[16.38rem]">{`Here are some things you should know regarding how we work `}</div>
        <img
          className="absolute top-[98.56rem] left-[45.88rem] w-[19rem] h-[11rem] object-cover"
          alt=""
          src="/rectangle-12@2x.png"
        />
        <img
          className="absolute top-[98.56rem] left-[25.13rem] w-[19rem] h-[11rem] object-cover"
          alt=""
          src="/rectangle-13@2x.png"
        />
        <div className="absolute top-[172.56rem] left-[26.44rem] leading-[120%] font-medium inline-block w-[16.38rem]">
          Clients are part of the team
        </div>
        <div className="absolute top-[172.56rem] left-[47.19rem] leading-[120%] font-medium inline-block w-[16.38rem]">{`Here are some things you should know regarding how we work `}</div>
        <img
          className="absolute top-[160.31rem] left-[45.88rem] w-[19rem] h-[11rem] object-cover"
          alt=""
          src="/rectangle-17@2x.png"
        />
        <img
          className="absolute top-[160.31rem] left-[25.13rem] w-[19rem] h-[11rem] object-cover"
          alt=""
          src="/rectangle-19@2x.png"
        />
        <div className="absolute top-[89.69rem] left-[26.44rem] leading-[120%] font-medium inline-block w-[16.38rem]">{`Here are some things you should know regarding how we work `}</div>
        <div className="absolute top-[89.69rem] left-[47.19rem] leading-[120%] font-medium inline-block w-[16.38rem]">
          Granny gives everyone the finger, and other tips from OFFF Barcelona
        </div>
        <img
          className="absolute top-[77.44rem] left-[25.13rem] w-[19rem] h-[11rem] object-cover"
          alt=""
          src="/rectangle-121@2x.png"
        />
        <img
          className="absolute top-[77.44rem] left-[45.88rem] w-[19rem] h-[11rem] object-cover"
          alt=""
          src="/rectangle-131@2x.png"
        />
        <div className="absolute top-[153.06rem] left-[26.44rem] leading-[120%] font-medium inline-block w-[16.38rem]">
          I believe learning is the most important skill
        </div>
        <div className="absolute top-[153.06rem] left-[47.19rem] leading-[120%] font-medium inline-block w-[16.38rem]">
          Clients are part of the team
        </div>
        <img
          className="absolute top-[140.81rem] left-[25.13rem] w-[19rem] h-[11rem] object-cover"
          alt=""
          src="/rectangle-122@2x.png"
        />
        <img
          className="absolute top-[140.81rem] left-[45.88rem] w-[19rem] h-[11rem] object-cover"
          alt=""
          src="/rectangle-132@2x.png"
        />
        <h1
          className="m-0 absolute top-[49.19rem] left-[18.31rem] text-[3.38rem] leading-[100%] font-bold font-new-york-extra-large inline-block w-[53.63rem]"
          id="hero title"
        >
          A few words about this blog platform, Ghost, and how this site was
          made
        </h1>
        <h4
          className="m-0 absolute top-[61.31rem] left-[26.5rem] text-[1.25rem] leading-[170%] font-normal font-sf-mono inline-block w-[37rem]"
          id="herocontent"
        >{`Why Ghost (& Figma) instead of Medium, WordPress or other options?`}</h4>
        <div className="absolute top-[67.63rem] left-[24.94rem] box-border w-[40.13rem] h-[0.13rem] border-t-[2px] border-solid border-black" />
        <h3
          className="m-0 absolute top-[71.69rem] left-[38rem] text-[2.75rem] font-bold font-new-york-extra-large"
          id="all article"
        >
          All articles
        </h3>
        <a className="[text-decoration:none] absolute top-[0rem] left-[0rem] w-[90rem] h-[8.38rem] text-[1.25rem] text-[inherit] font-new-york-small">
          <div className="absolute top-[0rem] left-[0rem] bg-primary-contrast shadow-[0px_1px_0px_rgba(0,_0,_0,_0.16)] w-[90rem] h-[8.31rem]" />
          <div className="absolute top-[3.28rem] left-[3.97rem] w-[82.21rem] h-[2.53rem]">
            <img
              className="absolute top-[0rem] left-[0rem] w-[24.74rem] h-[2.35rem]"
              alt=""
              src="/nordic-rose.svg"
            />
            <div className="absolute top-[0.4rem] left-[54.53rem] tracking-[0.12em] leading-[170%] uppercase font-medium">
              Blog
            </div>
            <div className="absolute top-[0.4rem] left-[60.59rem] tracking-[0.12em] leading-[170%] uppercase font-medium">
              About
            </div>
            <div className="absolute top-[0.4rem] left-[67.96rem] tracking-[0.12em] leading-[170%] uppercase font-medium">
              Links
            </div>
            <div className="absolute top-[0.4rem] left-[74.65rem] tracking-[0.12em] leading-[170%] uppercase font-medium">
              Projects
            </div>
          </div>
          <div className="absolute top-[8.31rem] left-[58.44rem] box-border w-[4.25rem] h-[0.13rem] border-t-[2px] border-solid border-black" />
        </a>
        <footer
          className="absolute top-[207.25rem] left-[-0.37rem] w-[90.69rem] h-[29rem] text-center text-[0.75rem] text-primary-contrast font-sf-pro-text"
          id="footer"
        >
          <div className="absolute top-[0rem] left-[0.19rem] bg-black w-[90rem] h-[29rem]" />
          <img
            className="absolute top-[9.45rem] left-[36.1rem] w-[18.18rem] h-[1.71rem]"
            alt=""
            src="/nordic-rose1.svg"
          />
          <div className="absolute top-[24.88rem] left-[39.56rem] leading-[140%] font-medium">
            <p className="m-0">{`© 2012–2020 Nordic Rose Co. `}</p>
            <p className="m-0">{`All rights reserved. `}</p>
          </div>
          <div className="absolute top-[19.19rem] left-[38.69rem]">
            <DatePicker
              label="Twitter"
              value={groupDateTimePickerValue}
              onChange={(newValue) => {
                setGroupDateTimePickerValue(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  color="primary"
                  variant="standard"
                  size="medium"
                  renderInput={{ placeholder: "LinkedIn" }}
                  helperText="RSS"
                />
              )}
            />
          </div>
          <div className="absolute top-[1.13rem] left-[0rem] w-[90.69rem] h-[1.75rem] text-left text-[1.25rem]">
            <div className="absolute top-[0rem] left-[0rem] tracking-[0.1em] leading-[1.75rem] uppercase font-extrabold">
              Digital product design
            </div>
            <div className="absolute top-[0rem] left-[41.5rem] tracking-[0.1em] leading-[1.75rem] uppercase">
              Distributed teams
            </div>
            <div className="absolute top-[0rem] left-[20.56rem] tracking-[0.1em] leading-[1.75rem] uppercase">
              Remote work
            </div>
            <div className="absolute top-[0rem] left-[32.25rem] tracking-[0.1em] leading-[1.75rem] uppercase font-extrabold">
              UX design
            </div>
            <div className="absolute top-[0rem] left-[57.13rem] tracking-[0.1em] leading-[1.75rem] uppercase font-extrabold">
              Creativity
            </div>
            <div className="absolute top-[0rem] left-[75.44rem] tracking-[0.1em] leading-[1.75rem] uppercase font-extrabold">
              Suspense
            </div>
            <div className="absolute top-[0rem] left-[67rem] tracking-[0.1em] leading-[1.75rem] uppercase">
              Strategy
            </div>
            <div className="absolute top-[0rem] left-[84.44rem] tracking-[0.1em] leading-[1.75rem] uppercase">
              Growth
            </div>
          </div>
          <div className="absolute top-[12.75rem] left-[29.94rem] text-[1rem] leading-[140%] font-new-york-small inline-block w-[30.5rem] h-[4.44rem]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. `}</div>
        </footer>
      </div>
    </LocalizationProvider>
  );
};

export default ListingDesktop;
