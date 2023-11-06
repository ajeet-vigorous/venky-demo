import React, { useState } from 'react';
import { BsDot } from 'react-icons/bs';

export default function RulesNotification(props) {
    const { handleClose, DomainName } = props
    const [visible, setVisible] = useState(false);
    console.log("DomainNameDomainName", DomainName);
    return (
        <div className='h-full md:h-screen absolute top-0 left-0 z-50 w-full bg-black/30 pt-0 p-3'>
            <div className="bg-white md:w-[675px] w-full mx-auto">
                <div className="flex justify-center items-center bg-[#204E57] text-center px-3 py-2 cursor-pointer w-full">
                    <span className="text-[22px] font-semibold text-[#FCCE34]">VANKY12.COM RULES</span>
                </div>
                <div className='overflow-y-auto h-[505px]'>
                    <div className="flex justify-start items-center space-x-3 py-2 px-2 w-full border-b border-gray-400">
                        <span onClick={() => setVisible(false)} className="bg-[#5CB85C] text-white px-2 py-2 border-1 border-black rounded cursor-pointer">Hindi</span>
                        <span onClick={() => setVisible(true)} className="bg-[#5CB85C] text-white px-2 py-2 border-1 border-black rounded cursor-pointer">English</span>
                    </div>
                    <div className='pl-6 py-3 w-full'>
                        {visible ? (
                            <div className='pl-2'>
                                <div className=' text-center text-[18px] font-bold py-2'>
                                    Please take a few minutes here to understand the rules of
                                    VANKY12, and understand accordingly.
                                </div>
                                <ol className='list-decimal text-[14px] px-2 pl-4 space-y-0'>
                                    <li>Change your password after you log in.</li>
                                    <li>0.0 /- coins will be charged for each game.</li>
                                    <li>
                                        0.0 /- coin charge will be there per day in test match.
                                    </li>
                                    <li>
                                        No commission will be given on extra fancy, commission will
                                        not be available in fancy in which No Comm is written.
                                    </li>
                                    <li>
                                        If you do not make a single deal of match or session, then
                                        you will be charged 0.0/- coins.
                                    </li>
                                    <li>All advance deals will be taken after the toss.</li>
                                    <li>
                                        In case the game is canceled or tied, all transactions will
                                        be canceled and the transaction will be done on the session
                                        and fancy that has been completed. During the match, the
                                        company will decide the settlement of fancy on the condition
                                        of the session, the decision of the company will be final.
                                    </li>
                                    <li>
                                        Partnership and player run in test match bad weather and
                                        match is canceled (draw) then result will be declared
                                        according to the score at that time.
                                    </li>
                                    <li>
                                        Deal amount for the match: Market TypeMinimum Bet
                                        AmountMaximum Bet AmountWho Wins the Match500|500000Cricket
                                        Sessions500|55000Cricket Aki Becky100|100000 Points Ended
                                        Match Bet100|100000
                                    </li>
                                    <li>Aki Becky has a price of 95.</li>
                                    <li>The lottery draw has a value of 9.5.</li>
                                    <li>
                                        Live draw is dependent on TV score. The rate never changes.
                                        This is a good opportunity for the user.
                                    </li>
                                    <li>
                                        Deal only after seeing and understanding the price during
                                        the match. Any transaction entered into will not be deleted
                                        or replaced. You are responsible for all transactions. All
                                        deals here will be validated by ledger.
                                    </li>
                                    <li>
                                        Deals of cheating or wrong price will be removed even after
                                        the match is over.
                                    </li>
                                    <li>
                                        If the match or session price is incorrect, then whatever
                                        match or session has been traded will be automatically
                                        removed. In such a case, any dispute will not be valid.
                                    </li>
                                    <li>
                                        All transactions for sessions, partnerships and players who
                                        are in running or retired players will be canceled when the
                                        match is terminated. And the coins will be more or less
                                        according to the session which is complete. And when the
                                        result comes, the players who are where they are will be
                                        considered.
                                    </li>
                                    <li>
                                        The decision of the company will be final, no claim will be
                                        accepted on it.
                                    </li>
                                    <li>
                                        If you do not accept this agreement then do not do any deal.
                                    </li>
                                    <li>
                                        You will be responsible for internet connection problem.
                                    </li>
                                </ol>
                                <div className='flex justify-start items-start pt-3'>
                                    <BsDot size={40} className='pb-3' />
                                    <span className='text-[14px] font-bold'>
                                        Note: Transactions made will be valid only in case of server
                                        or website failure or shutdown. In such a case, any kind of
                                        debate will not be valid.
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <div className='pl-2' >
                                <div className=' text-center text-[18px] font-bold py-2'>
                                    कृपया admin.vanky12.com के नियमों को समझने के लिए यहां कुछ
                                    मिनट दें, और अपने अनुसार समझ लें |
                                </div>
                                <ol className='list-decimal text-[16px] px-2 pl-4 space-y-2 '>
                                    <li>लॉग इन करने के बाद अपना पासवर्ड बदलें।</li>
                                    <li>प्रत्येक गेम के लिए 0.0/- कॉइन्स चार्ज रहेगा |</li>
                                    <li>टेस्ट मैच में प्रतिदिन 0.0/ कॉइन चार्ज रहेगा |</li>
                                    <li>
                                        एक्स्ट्रा फैंसी पर कमिशन नहीं मिलेगा , जिन फैंसी में No Comm
                                        लिखा है उनमे कमिशन नहीं मिलेगा|
                                    </li>
                                    <li>
                                        यदि आप मैच या सेशन का एक भी सौदा नहीं करते हो, ऐसे में आपसे
                                        0.0/- कॉइन्स का चार्ज लिया जायेगा |
                                    </li>
                                    <li>सभी एडवांस सौदे टॉस के बाद लिए जाएंगे |</li>
                                    <li>
                                        खेल रद्द या टाई होने पर सभी सौदे रद्द कर दिए जाएंगे और
                                        लेनदेन सेशन और फैंसी जो पूरा हो गया है उस पर किया जाएगा |
                                        मैच के दौरान सेशन की कंडीशन पर फैंसी का सेटलमेंट कंपनी तय
                                        करेगी कंपनी का डिसीजन ही फाइनल होगा|
                                    </li>
                                    <li>
                                        टेस्ट मैच में पार्टनरशिप और प्लेयर रन खराब मौसम और मैच रद्द
                                        ( ड्रॉ) होता है तो रिजल्ट उस टाइम जो स्कोर होगा उस हिसाब से
                                        डिक्लियर होगा |
                                    </li>
                                    <li>
                                        मैच के लिए सौदे की रकम: मार्केट का प्रकारकम से कम शर्त
                                        राशिअधिकतम शर्त राशिमैच कौन जीतेगा500|500000 क्रिकेट
                                        सेशन500|55000क्रिकेट एकी बेकी100|100000अंक समाप्त मैच का
                                        दांव100|100000
                                    </li>
                                    <li>एकी बेकी में 95 का भाव है |</li>
                                    <li>लॉटरी ड्रॉ में 9.5 का भाव है |</li>
                                    <li>
                                        लाइव ड्रा टीवी स्कोर पर निर्भर है | दर कभी नहीं बदली जाती है
                                        | यह यूजर के लिए अच्छा मौका है |
                                    </li>
                                    <li>
                                        मैच के दौरान भाव को देख और समझ कर ही सौदा करें | किये गए
                                        किसी भी सौदे को हटाया या बदला नहीं जायेगा | सभी सौदे के लिए
                                        आप स्वयं जिम्मेवार हैं |
                                    </li>
                                    <li>यहाँ सभी सौदे लेजर से मान्य किये जायेंगे |</li>
                                    <li>
                                        चीटिंग या गलत भाव के सौदे हटा दिए जायेंगे मैच खत्म होने बाद
                                        भी।
                                    </li>
                                    <li>
                                        मैच या सेशन भाव गलत चलने पर जो भी मैच या सेशन के सौदे हुए हे
                                        वह स्वतः हट जायेंगे। ऐसी स्थिति में किसी भी तरह का वाद-विवाद
                                        मान्य नहीं होगा।
                                    </li>
                                    <li>
                                        मैच अबॉण्डेड होने पर जो सेशन, पार्टनरशिप और खिलाडी रनिंग में
                                        हे या खिलाडी रिटायर हुआ हो सभी सौदे केंसल हो जायेंगे। और जो
                                        सेशन कम्पलीट हे उनके हिसाब से कोइन्स कम या ज्यादा होंगे। और
                                        रिजल्ट आने पे जो खिलाडी जहा हे वो ही माने जायेंगे।
                                    </li>
                                    <li>
                                        कंपनी का डिसीज़न ही फाइनल होगा, उस पर कोई क्लेम मान्य नहीं
                                        होगा।
                                    </li>
                                    <li>
                                        अगर आप इस एग्रीमेंट को ऐक्सेप्ट नहीं करते हे तो कोई सौदा
                                        नहीं कीजिये।
                                    </li>
                                    <li>इंटरनेट कनेक्शन प्रॉब्लम की जिम्मेवारी आपकी रहेगी |</li>
                                </ol>
                                <div className='flex justify-start items-start pt-3'>
                                    <BsDot size={40} className='pb-3' />
                                    <span className='text-[14px] font-bold'>नोट: सर्वर या वेबसाइट में किसी तरह की खराबी आने या बंद हो
                                        जाने पर केवल किए गए सौदे ही मान्य होंगे | ऐसी स्तिथि में किसी
                                        तरह का वाद-विवाद मान्य नहीं होगा |
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="bg-[#204E57] py-2.5 px-3 w-full border-t border-gray-300">
                    <span onClick={handleClose} className="flex justify-center items-center text-[#fcce34] px-3 text-[20px] font-bold rounded cursor-pointer">CLOSE</span>
                </div>
            </div>
        </div>
    );
}

