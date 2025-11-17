import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1); // Second item open by default

  const faqs = [
    {
      id: 0,
      question: "Suspendisse ultrices pharetra libero sed interdum.",
      answer: "",
    },
    {
      id: 1,
      question: "Fusce molestie condimentum facilisis.",
      answer:
        "Nulla malesuada iaculis nisl, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.",
      points: [
        "Vivamus sed est non arcu porta aliquet et vitae nulla.",
        "Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.",
        "Proin blandit nunc risus, at semper turpis sagittis nec.",
        "Quisque ut dolor erat.",
      ],
    },
    {
      id: 2,
      question: "Quisque quis nunc quis urna tempor lobortis vel non orci.",
      answer: "",
    },
    {
      id: 3,
      question:
        "Donec rutrum ultrices ante nec malesuada. In accumsan eget nisi a rhoncus.",
      answer: "",
    },
    {
      id: 4,
      question: "Nulla sed sapien maximus, faucibus massa vitae.",
      answer: "",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`border border-gray-200 rounded-lg overflow-hidden transition-all ${
                openIndex === faq.id ? "bg-black text-white" : "bg-white"
              }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-opacity-90 transition-colors"
              >
                <span className="font-medium text-sm sm:text-base lg:text-lg pr-4">
                  {faq.question}
                </span>
                {openIndex === faq.id ? (
                  <Minus size={20} className="shrink-0 sm:w-6 sm:h-6" />
                ) : (
                  <Plus size={20} className="shrink-0 sm:w-6 sm:h-6" />
                )}
              </button>

              {/* Answer */}
              {openIndex === faq.id && faq.answer && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-white leading-relaxed mb-4">
                    {faq.answer}
                  </p>

                  {faq.points && (
                    <ul className="space-y-2">
                      {faq.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-white mt-1">•</span>
                          <span className="text-white">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
