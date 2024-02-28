import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectedServiceContext } from '../../context/SelectedServiceContext';
import iconAdvanced from '../../assets/images/icon-advanced.svg';
import iconArcade from '../../assets/images/icon-arcade.svg';
import iconPro from '../../assets/images/icon-pro.svg';

const SelectPlan = () => {
  const { selectedPlan, setSelectedPlan, selectedCard, setSelectedCard,selectedPrice, setSelectedPrice } = useContext(SelectedServiceContext);
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(true);

  // Toggle durumu değiştiğinde çalışacak işlev
  const handleToggle = () => {
    setIsChecked(!isChecked); // Toggle durumunu tersine çevir
    setSelectedPlan(selectedPlan === 'monthly' ? 'yearly' : 'monthly');
  };

  const handleCardClick = (card, price) => {
    if (selectedCard === card) {
      setSelectedCard(null);
      setSelectedPrice({});
    } else {
      setSelectedCard(card);
      setSelectedPrice(price);
    }
  };
  

  console.log(selectedPlan);
  console.log(selectedCard);
  console.log(selectedPrice);
  const handleGoBack = () => {
    navigate('/personel-info');
  };

  const handleNextStep = () => {
    navigate('/add-ons');
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
            <div className='step-number flex justify-center items-center bg-light-blue w-10 h-10 rounded-full'>
              <p className='text-black font-extrabold'>2</p>
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
          <div className='plan-cards flex gap-x-4 w-full'>
            <div
              className={`card w-1/3 rounded-lg p-5 cursor-pointer ${selectedCard === 'Arcade' ? 'border border-violet-900' : 'border border-light-gray'}`}
              onClick={() => handleCardClick('Arcade', { yearly: '$90/yr', monthly: '$9/mo' })}
              >
              <img className='mb-10' src={iconArcade} alt='' />
              <h5 className='text-marine-blue font-extrabold'>Arcade</h5>
              <h5 className='text-cool-gray'>{selectedPlan === 'yearly' ? '$90/yr' : '$9/mo'}</h5>
              {selectedPlan === 'yearly' && <p className='text-xs text-marine-blue'>2 months free</p>}
            </div>
            <div
              className={`card w-1/3 rounded-lg p-5 cursor-pointer ${selectedCard === 'Advanced' ? 'border border-violet-900' : 'border border-light-gray'}`}
              onClick={() => handleCardClick('Advanced', { yearly: '$120/yr', monthly: '$12/mo' })}
              >
              <img className='mb-10' src={iconAdvanced} alt='' />
              <h5 className='text-marine-blue font-extrabold'>Advanced</h5>
              <h5 className='text-cool-gray'>{selectedPlan === 'yearly' ? '$120/yr' : '$12/mo'}</h5>
              {selectedPlan === 'yearly' && <p className='text-xs text-marine-blue'>2 months free</p>}
            </div>
            <div
              className={`card w-1/3 rounded-lg p-5 cursor-pointer ${selectedCard === 'Pro' ? 'border border-violet-900' : 'border border-light-gray'}`}
              onClick={() => handleCardClick('Pro', { yearly: '$150/yr', monthly: '$15/mo' })}
              >
              <img className='mb-10' src={iconPro} alt='' />
              <h5 className='text-marine-blue font-extrabold'>Pro</h5>
              <h5 className='text-cool-gray'>{selectedPlan === 'yearly' ? '$150/yr' : '$15/mo'}</h5>
              {selectedPlan === 'yearly' && <p className='text-xs text-marine-blue'>2 months free</p>}
            </div>
          </div>
          <div className='toggle flex justify-center ites-center bg-alabaster w-full p-3'>
            <div>
              <span className={`mr-3 text-sm  ${!isChecked ? 'text-marine-blue font-extrabold' : 'text-cool-gray dark:text-cool-gray font-extrabold'}`}>Monthly</span>
            </div>
            <label className='relative inline-flex items-center cursor-pointer'>
              <input type='checkbox' value='' className='sr-only peer' checked={isChecked} onChange={handleToggle} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <div>
              <span className={`ml-3 text-sm ${!isChecked ? 'text-cool-gray dark:text-cool-gray font-extrabold' : 'text-marine-blue font-extrabold'}`}>Yearly</span>
            </div>
          </div>
          <div className='btn w-full flex justify-between'>
            <button className='btn text-cool-gray font-extrabold py-3 px-6 rounded-lg w-max self-end  mt-16 hover:text-marine-blue' onClick={handleGoBack}>
              Go Back
            </button>
            <button className='btn bg-marine-blue text-white py-3 px-6 rounded-lg w-max self-end  mt-16 hover:bg-button-hover-blue' onClick={handleNextStep}>
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;