import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical laptop repair take at Aforeserve?",
    answer:
      "The repair time depends on the complexity of the issue. Most repairs are completed within 1–3 business days."
  },
  {
    question: "Do I need an appointment to get my laptop repaired at Aforeserve?",
    answer:
      "While walk-ins are welcome, we recommend booking an appointment online or over the phone for faster service and to ensure technician availability. Scheduled customers are given priority in our service queue."
  },
  {
    question: "Can Aforeserve repair all laptop brands and models?",
    answer:
      "Yes, our technicians are trained to handle repairs for all major laptop brands and models."
  },
  {
    question: "What types of laptop issues does Aforeserve handle?",
    answer:
      "We handle hardware issues, software problems, data recovery, screen replacement, battery replacement, and more."
  },
  {
    question: "Is my data safe during the repair process?",
    answer:
      "Yes, we follow strict data protection protocols to ensure your personal data remains safe and secure."
  },
  {
    question: "Does Aforeserve offer any warranty on repairs?",
    answer:
      "Yes, we offer a warranty on most repairs. The warranty period depends on the type of repair performed."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-white to-cyan-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-medium">
          Frequently Asked Questions
        </span>
        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Got Questions? We've Got{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Answers
          </span>
        </h2>
        <p className="mt-4 text-gray-600">
          Find answers to common questions about Shiv Sumitra Group Foundation and how it can transform your Business
        </p>
      </div>

      <div className="mt-10 max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className='border rounded-lg overflow-hidden transition-all bg-white duration-300' 
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-900"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-sm text-yellow-700">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
