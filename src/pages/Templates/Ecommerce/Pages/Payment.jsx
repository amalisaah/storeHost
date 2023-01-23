import Navbar from "../Components/Navbar";
import {
  Input,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import Pay from "../Components/buttons/Pay";
const Payment = () => {
  const data = [
    {
      label: (
        <div className="flex text-green">
          <img src="/images/Visa.png" className="pr-3" />
          Visa
        </div>
      ),
      value: "html",
      desc: (
        <div className="m-5 p-5">
          <form className="">
            <div className="flex w-full items-end gap-4 m-5">
              <Input size="md" label="Bank" />
              <Input size="md" label="Account Number" />
            </div>
            <div className="flex w-full items-end gap-4 m-5">
              <Input size="md" label="Branch" />
              <Input size="md" label="Card Number" />
            </div>
            <div className="flex w-full items-end gap-4 m-5">
              <Input size="md" label="CVC" />
              <Input size="md" label="Expiry Date" />
            </div>
          </form>
        </div>
      ),
    },
    {
      label: (
        <div className="flex  text-green">
          <img src="/images/Momo.png" className="pr-3" />
          Mobile Money
        </div>
      ),
      value: "react",
      desc: (
        <div className="m-5 p-5">
          <form className="">
            <div className="flex w-full items-end gap-4 m-5">
              <Input size="md" label="Name" />
              <Input size="md" label="Mobile Service" />
            </div>
            <div className="flex w-full items-end gap-4 m-5">
              <Input size="md" label="Phone Number" />
            </div>
          </form>
        </div>
      ),
    },
  ];
  return (
    <>
      <section className="bg-grey h-max">
        <Navbar />

        <div className="flex flex-row justify-around">
          {/* Payment Method */}

          <div className="m-5">
            {/* Visa Form Div*/}
            <Tabs value="html">
              <TabsHeader>
                {data.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>

          {/* Summary */}

          <div className="flex p-5 bg-white m-9">
            <form class="w-full max-w-sm text-black">
              <p className="font-bold text-black">Summary</p>
              <div class="flex items-center border-b border-teal-500 py-2">
                <input
                  class=" bg-white appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Name"
                  aria-label="Full name"
                />

                <p class="flex-shrink-0  text-teal-500 hover:text-teal-800 text-sm py-1 px-2 ">
                  1
                </p>
              </div>

              <div class="flex items-center border-b border-teal-500 py-2">
                <input
                  class=" bg-white appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Payment Method"
                  aria-label="Full name"
                />

                <p class="flex-shrink-0  text-teal-500 hover:text-teal-800 text-sm py-1 px-2 ">
                  Visa
                </p>
              </div>

              <div class="flex items-center border-b border-teal-500 py-2">
                <input
                  class=" bg-white appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  type="text"
                  placeholder="Amount"
                  aria-label="Full name"
                />

                <p class="flex-shrink-0  text-teal-500 hover:text-teal-800 text-sm py-1 px-2 ">
                  25000
                </p>
              </div>
            </form>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="text-center m-5 p-5">
          <Pay />
        </div>
      </section>
    </>
  );
};

export default Payment;
