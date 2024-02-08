import React, { useState } from 'react';

const SelectPlan = () => {
  const [isChecked, setIsChecked] = useState(true);

  // Toggle durumu değiştiğinde çalışacak işlev
  const handleToggle = () => {
    setIsChecked(!isChecked); // Mevcut durumu tersine çevir
  };

  return (
    <div className='body bg-light-gray h-screen flex justify-center items-center font-ubuntu'>
      <div className='form-container bg-white flex h-[65vh] w-1/2 p-4 rounded-lg'>
        <div className='form-sidebar h-full w-[45%] bg-desktop-sidebar bg-center bg-no-repeat bg-cover rounded-xl flex flex-col p-8 gap-y-8'>
          <div className='step flex items-center gap-x-4 '>
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>1</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5'>STEP 1</h5>
              <h4 className='text-white font-bold'>YOUR INFO</h4>
            </div>
          </div>
          <div className='step flex items-center gap-x-4'>
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>2</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5'>STEP 2</h5>
              <h4 className='text-white font-bold'>SELECT PLAN</h4>
            </div>
          </div>
          <div className='step flex items-center gap-x-4'>
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>3</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5'>STEP 3</h5>
              <h4 className='text-white font-bold'>ADD-ONS</h4>
            </div>
          </div>
          <div className='step flex items-center gap-x-4'>
            <div className='step-number flex justify-center items-center border border-white w-10 h-10 rounded-full'>
              <p className='text-white'>4</p>
            </div>
            <div className='step-text'>
              <h5 className='text-cool-gray font-thin text-h5'>STEP 4</h5>
              <h4 className='text-white font-bold'>SUMMARY</h4>
            </div>
          </div>
        </div>
        <div className='plan-section flex items-center flex-col gap-y-8 w-full px-24 pt-10'>
          <div className='plan-header w-full flex flex-col gap-y-1'>
            <h1 className='text-h1 text-marine-blue font-black'>Select your plan</h1>
            <p className='text-cool-gray '>You have the option of monthly or yearly billing.</p>
          </div>
          <div className='plan-cards flex gap-x-4 w-full h-1/3 '>
            <div className='card border border-light-gray w-1/3 rounded-lg'>
              <img src='file:///C:/Users/seker/Desktop/multi-step-form/multi-step-form/src/assets/images/icon-advanced.svg' alt='' />
              <h5>Arcade</h5>
              <h5>$9/mo</h5>
            </div>
            <div className='card border border-light-gray w-1/3 rounded-lg'>
              <img src='file:///C:/Users/seker/Desktop/multi-step-form/multi-step-form/src/assets/images/icon-advanced.svg' alt='' />
              <h5>Advanced</h5>
              <h5>$12/mo</h5>
            </div>
            <div className='card border border-light-gray w-1/3 rounded-lg'>
              <img src='file:///C:/Users/seker/Desktop/multi-step-form/multi-step-form/src/assets/images/icon-advanced.svg' alt='' />
              <h5>Pro</h5>
              <h5>$15/mo</h5>
            </div>
          </div>
          <div className='toggle flex justify-center ites-center bg-alabaster w-full p-3'>
            <div>
              <span className={`mr-3 text-sm font-medium ${!isChecked ? 'text-marine-blue font-extrabold' : 'text-cool-gray font-extrabold dark:text-cool-gray font-extrabold'}`}>
                Monthly
              </span>
            </div>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input type='checkbox' value='' className='sr-only peer' checked={isChecked} onChange={handleToggle} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <div>
              <span className={`ml-3 text-sm font-medium ${!isChecked ? 'text-cool-gray dark:text-cool-gray font-extrabold' : 'text-marine-blue font-extrabold'}`}>Yearly</span>
            </div>
          </div>
          <div className='btn w-full flex justify-between'>
          <button className='btn text-cool-gray font-extrabold py-3 px-6 rounded-lg w-max self-end  mt-16 hover:text-marine-blue'>Go Back</button>
          <button className='btn bg-marine-blue text-white py-3 px-6 rounded-lg w-max self-end  mt-16 hover:bg-button-hover-blue'>Next Step</button>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;