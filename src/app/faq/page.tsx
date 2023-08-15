const faqs = [
    {
      id: 1,
      question: "When is basava jayanti 2023?",
      answer: "23 April 2023",
    },
    {
        id: 2,
        question: "Basava jayanti how many years?",
        answer: "It falls on the third day of Shukla Paksha (18th day) in the month of Vaisakha of the Samvatsara (Anandanama). As per the English calendar, the Basava Jayanti 2023 will be celebrated on 23 April, Sunday. In 2023 it will be the 890th birth anniversary of the revered social reformer.",
      },
      {
        id: 3,
        question: "When is basava jayanti 2024?",
        answer: "10 May 2024",
      },
      {
        id: 4,
        question: "Basava jayanti was celebrated on which date?",
        answer: "Basava Jayanti is celebrated on the third day of Vaisakha, the second month of the Hindu calendar, which usually falls in April or May.",
      },
      {
        id: 5,
        question: "What is basava jayanti?",
        answer: "Basava Jayanthi is a holiday traditionally observed by the Lingayats of the Indian state of Karnataka. It marks the birthday of Basavanna, a 12th-century poet-philosopher and the founding saint of the Lingayat tradition.",
      },
      {
        id: 6,
        question: "Who is basavanna?",
        answer: "Basava, also called Basaveshwara and Basavanna, was a 12th-century CE Indian statesman, philosopher, poet, Lingayat social reformer in the Shiva-focussed bhakti movement, and a Hindu Shaivite social reformer during the reign of the Kalyani Chalukya/Kalachuri dynasty.",
      },
      {
        id: 7,
        question: "When was basavanna born?",
        answer: "1134 AD",
      },
      {
        id: 8,
        question: "Where did basavanna born?",
        answer: "Basava was born in 1131 CE in the town of Basavana Bagewadi in the northern part of Karnataka, to Maadarasa and Madalambike, a Kannada Orthodox Brahmin family devoted to Hindu deity Shiva.",
      },
  ]

  export default function FAQ() {
    return (
      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-white">Frequently asked questions</h2>
          <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-base font-semibold leading-7 text-white">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-300">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  