import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useAccount, useNetwork } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Avatar } from '@nextui-org/react';
import { useRouter } from 'next/router';
import getBMAC from '../utils/contracts';

const styles = {
  simpleInput:
    'shadow appearance-none border border-amber-500 focus:border-amber-600 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline',
  memoInput:
    'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-amber-500 rounded m-0 resize-none focus:text-gray-700 focus:bg-white focus:border-amber-600 focus:outline-none',
  submitButton:
    'flex mt-5 w-full rounded justify-center items-center shadow-lg bg-orange-500 shadow-orange-500/50 text-white font-bold p-2 hover:scale-110 transition-all duration-100',
};

function Form() {
  const [nameInput, setNameInput] = useState<string>('Anonymous');
  const [memoInput, setMemoInput] = useState<string>(
    'Here have a nice hot sip of Brewed Coffee.'
  );
  const [ethAmountInput, setEthAmountInput] = useState<number>(0.001);

  const { data } = useAccount();
  const { activeChain } = useNetwork();
  //   const data = {
  //     address: 'test',
  //   };

  console.log(activeChain);

  const buyACoffee = async () => {
    try {
      const bmac = await getBMAC();

      await bmac?.buyMeACoffee(nameInput, memoInput, {
        value: ethers.utils.parseEther(ethAmountInput.toString()),
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className='mt-10 text-lg w-full  md:w-full'>
      <label className='block text-gray-700 font-bold mb-5' htmlFor='name'>
        <h1>Name</h1>
        <input
          className={styles.simpleInput}
          type='text'
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
      </label>
      <label className='block text-gray-700 font-bold mb-5' htmlFor='memo'>
        <h1>Leave a nice message</h1>
        <textarea
          className={styles.memoInput}
          rows={3}
          placeholder={memoInput}
          value={memoInput}
          onChange={(e) => setMemoInput(e.target.value)}
        />
      </label>
      <label className='block text-gray-700 font-bold mb-2' htmlFor='eth'>
        <h1>Ξ Eth Amount</h1>
        <input
          className={styles.simpleInput}
          type='number'
          value={ethAmountInput}
          onChange={(e) => setEthAmountInput(+e.target.value)}
        />
      </label>
      {data ? (
        <button
          type='button'
          className={styles.submitButton}
          onClick={() => {
            if (activeChain?.id !== 1) return;
            buyACoffee();
          }}
        >
          SUBMIT
        </button>
      ) : (
        <button type='button' className={styles.submitButton}>
          Please connect your wallet
        </button>
      )}
    </form>
  );
}

interface MemoInterface {
  from: string;
  timestamp: any;
  name: string;
  message: string;
}

function BuyMeACoffee() {
  const router = useRouter();

  const [memos, setMemos] = useState<Array<MemoInterface>>([]);

  const getMemoList = async () => {
    try {
      const bmac = await getBMAC();
      const res: Array<MemoInterface> = await bmac?.getMemos();

      const tempArr: Array<MemoInterface> = [];

      for (let i = 0; i < res.length; i += 1) {
        const newMemo = res[i];
        tempArr.push({
          from: newMemo.from,
          timestamp: new Date(newMemo.timestamp * 1000),
          name: newMemo.name,
          message: newMemo.message,
        });
      }

      setMemos(tempArr);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMemoList();
  }, []);

  return (
    <>
      <Head>
        <title>Buy Anton a coffee☕</title>
        <meta
          name='Anton Guinto - Buy Anton a coffee☕'
          content='Buy anton a coffee in blockchain style'
        />
        <meta name='title' content='Anton Guinto - Buy Anton a coffee☕' />
        <meta name='author' content='Anton Guinto' />
      </Head>
      <main className='flex flex-col justify-around items-center relative'>
        <nav className='sticky top-0 py-3 right-5 flex w-full items-end justify-between px-8 shadow bg-white z-10'>
          <button type='button' onClick={() => router.push('/')}>
            <div className='cursor-pointer'>
              <Avatar
                src='/images/me-pixel.png'
                size='lg'
                className='pointer-events-none'
              />
            </div>
          </button>
          <ConnectButton />
        </nav>
        <div className='flex flex-1 flex-col mx-auto mt-20 items-center justify-center w-[80%] md:w-1/2 lg:w-1/3'>
          <div className='text-3xl xl:text-5xl font-black font-sans text-center'>
            <span className='drop-shadow-md'>Buy Me A Coffee </span>
            <span>☕</span>
          </div>
          <Form />
          <div className='flex flex-col py-10 mt-14 mx-0 w-full'>
            <div className='text-3xl xl:text-5xl font-black font-sans text-center'>
              Messages 💌
            </div>
            <div className='flex flex-col mt-5 h-[50vh] bg-orange-50 overflow-auto border'>
              {memos.length ? (
                memos.map(({ timestamp, name, message }: any, idx) => (
                  <div
                    // eslint-disable-next-line react/no-array-index-key
                    key={idx}
                    className='p-3 w-full bg-gray-100 mt-1'
                  >
                    <div className='flex justify-between'>
                      <h3 className='text-sm text-gray-600'>@{name}</h3>
                      <h3 className='text-sm text-gray-600'>
                        {timestamp.toDateString()}
                      </h3>
                    </div>
                    <div className='font-bold mt-1 text-green-500'>
                      +0.001 Ξ
                    </div>
                    <div className='flex-wrap'>{message}</div>
                  </div>
                ))
              ) : (
                <>No coffees yet.</>
              )}
            </div>
          </div>
          <footer className='py-5'>&copy; Anton 2022</footer>
        </div>
      </main>
    </>
  );
}

export default BuyMeACoffee;
