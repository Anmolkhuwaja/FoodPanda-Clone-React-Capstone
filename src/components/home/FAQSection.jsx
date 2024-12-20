import { Box, Divider, Typography } from '@mui/material';
import React from 'react'

const FAQSection = () => {

    // FAQ Data Array
const faqData = [
    {
      question: "How can I get foodpanda delivery?",
      answer:
        "To get foodpanda delivery, simply locate the restaurants and shops near you by typing in your address, browse through a variety of restaurants and cuisines, check menus and prices, choose your dishes and add them to the basket. Now you only need to checkout and make the payment. Soon your delicious food will arrive at your doorstep!",
    },
    {
      question: "Which takeout restaurants open now near me?",
      answer:
        "You can check which takeout restaurants are open now near you by simply typing your address in the location bar on foodpanda and pressing search. You will see all the available restaurants and shops that deliver to your area.",
    },
    {
      question: "Does foodpanda deliver 24 hours?",
      answer:
        "Yes, foodpanda in Pakistan delivers 24 hours. However, many restaurants may be unavailable for a late-night delivery. Please check which places in Pakistan deliver to you within 24 hours by using your address. You can also order groceries 24 hours a day via pandamart.",
    },
    {
      question: "Can you pay cash for foodpanda?",
      answer: "Yes, you can pay cash on delivery for foodpanda in Pakistan.",
    },
    {
      question: "How can I pay foodpanda online?",
      answer:
        "You can pay online while ordering at foodpanda Pakistan by using a credit or debit card or PayPal.",
    },
    {
      question: "Can I order foodpanda for someone else?",
      answer:
        "Yes, foodpanda Pakistan allows you to place an order for someone else. During checkout, just update the name and delivery address of the person you're ordering for. Please keep in mind that if the delivery details are not correct and the order cannot be delivered, we won't be able to process a refund.",
    },
    {
      question: "How much does foodpanda charge for delivery?",
      answer:
        "Delivery fee charged by foodpanda in Pakistan depends on many operational factors, most of all - location and the restaurant you are ordering from. You can always check the delivery fee while forming your order. Besides, you can filter the restaurants by clicking on the 'Free Delivery' icon at the top of your restaurant listing.",
    },
    {
      question: "What restaurants let you order online?",
      answer:
        "There are hundreds of restaurants on foodpanda Pakistan that let you order online. For example, KFC, McDonald's, Pizza Hut, OPTP, Hardee's, Domino's, Kababjees and many-many more! In order to check all the restaurants near you that deliver, just type in your address and discover all the available places.",
    },
    {
      question: "Does foodpanda have minimum order?",
      answer:
        "Yes, many restaurants have a minimum order. The minimum order value depends on the restaurant you order from and is indicated during your ordering process.",
    },
    {
      question: "What is the difference between delivery and Pick-Up?",
      answer:
        "If you choose delivery, a foodpanda rider will collect your order from the restaurant and take it to your chosen delivery address. If you choose Pick-Up, you can takeaway your food directly from the restaurant for extra savings – and to jump to the front of the queue. Pick-Up orders are available for restaurants only.",
    },
  ];

  return (
    <div className='lg:mt-[25%] md:mt-[45%] mt-[55%] lg:px-28 px-4'>
      {/* Header Section */}
      <Typography variant="" className=" text-[#333333] !text-[30px] !font-bold">
        Order food and groceries online from the best restaurants and shops on foodpanda
      </Typography>
      
      <Typography className="text-[#828482] !font-light !mt-4">
        Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your 
        office or looking to avoid the weekly shop? Then foodpanda Pakistan is the right destination for you! 
        foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your every day easier.
      </Typography>

      {/* What's New Section */}
      <Typography variant="h5" className=" text-[#333333] !text-[30px] !font-bold !mt-8">
        What's new?
      </Typography>

      <Box className="!pr-0 md:!pr-0 md:!w-full !w-[100%] overflow-hidden">
  <pre className="text-gray-500 text-base mt-4 pr-5 sm:pr-0 md:!w-full !w-[100%] sm:w-auto lg:mr-30 md:mr-30 break-words sm:break-normal">
    <span className="text-[#ef3391] !font-bold">✓</span> Wide variety of restaurants and shops, an abundance of cuisines & products. <br />
    <span className="text-[#ef3391] !font-bold">✓</span> High quality delivery service. <br />
    <span className="text-[#ef3391] !font-bold">✓</span> Live chat feature to give App users instant help when they need it. <br />
    <span className="text-[#ef3391] !font-bold">✓</span> NEW: foodpanda grocery delivery! Discover the best shops, <br /> pharmacies, bakeries and more near you.
  </pre>
</Box>





      <Divider className='!mt-4 w-11/13 border-t-gray-200'/>

      {/* FAQ Section */}
      <Typography variant="h6" className=" text-[#333333] !text-[22px] !font-bold !mt-3">
        Frequently Asked Questions
      </Typography>

      {/* FAQ Items */}
      {faqData.map((faq, index) => (
        <div key={index} className="mt-3">
          <Typography variant="subtitle1" className="text-[#333333] !text-[18px] !font-bold !mt-3">
            {faq.question}
          </Typography>
          <Typography className=" text-[#333333] !text-[16px] !font-light !mt-5">
            {faq.answer}
          </Typography>
        </div>
      ))}

      {/* Footer Message */}
      <Typography variant="subtitle1" className=" text-[#333333] text-sm !font-bold !mt-4">
        Order food and groceries online with foodpanda now and enjoy a great dining experience!
      </Typography>
    </div>
  )
}

export default FAQSection;