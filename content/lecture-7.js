// Original bilingual learning explanations and practice based on Lecture 7.
export const lectures7 = [
  {
    "id": "l7",
    "number": 7,
    "title": "利息、所得税与股东收益",
    "en": "Interest, Income Tax and Shareholder Earnings",
    "description": "从应计利息和递延税，连接净利润、留存收益、EPS与其他综合收益。",
    "descriptionEn": "Connect accrued interest and deferred tax to net income, retained earnings, EPS and comprehensive income.",
    "source": "Lecture 7.pdf",
    "pages": 77,
    "nodes": [
      {
        "id": "l7-interest-accrual",
        "title": "借款本金与应计利息",
        "en": "Loan Principal and Accrued Interest",
        "pages": [
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10
        ],
        "summary": "借款增加负债；利息随占用资金的时间发生，不等到还款日才确认。",
        "explanation": [
          "借到本金时，企业获得现金，同时欠银行同额本金。它不是收入，因为企业仍有偿还义务。本金和使用本金的费用要分别理解。",
          "利息费用（Interest expense）是占用资金的成本。即使合同约定到期一次付息，已过去期间的利息也要按权责发生制确认，并形成应付利息（Interest payable）。",
          "期末先确认已经发生但尚未支付的利息；到期支付时，清偿本金和已记录的利息负债。本例采用简单利息和整月计息，年利率需要换算为相应月份。"
        ],
        "rules": [
          "Interest = Principal × Annual rate × Months / 12。",
          "借款时：Dr Cash / Cr Loan payable。",
          "计息时：Dr Interest expense / Cr Interest payable。"
        ],
        "example": {
          "scenario": "12月1日借入$1,000，年利率6%，3个月后一次偿还本息。",
          "steps": [
            "12月31日确认一个月利息：1,000 × 6% × 1/12 = $5。",
            "1月再计提$5；2月再计提$5。",
            "到期偿还本金$1,000和累计利息$15；已计提部分不重复确认为费用。"
          ],
          "conclusion": "12月费用$5、应付利息$5，12月没有为利息支付现金。"
        },
        "pitfalls": [
          "借款本金不是收入，归还本金也不是费用。",
          "6%是年利率，不能直接当月利率。"
        ],
        "questions": [
          {
            "id": "l7-interest-accrual-q1",
            "prompt": "A $1,000 loan bears 6% annual simple interest. What is one month’s interest expense?",
            "zh": "借款$1,000，简单年利率6%，一个月利息费用是多少？",
            "options": [
              "$1,000",
              "$60",
              "$5",
              "$15"
            ],
            "answer": 2,
            "explanations": [
              "这是本金。",
              "这是全年利息。",
              "正确：1,000×6%÷12=$5。",
              "这是三个月利息。"
            ],
            "hint": "把年利率换算为一个月。",
            "errorType": "计算"
          },
          {
            "id": "l7-interest-accrual-q2",
            "prompt": "Interest has accrued but is unpaid at year-end. Which entry is appropriate?",
            "zh": "年末利息已发生但未付，正确分录是哪一个？",
            "options": [
              "No entry until cash is paid",
              "Dr Cash; Cr Revenue",
              "Dr Loan payable; Cr Cash",
              "Dr Interest expense; Cr Interest payable"
            ],
            "answer": 3,
            "explanations": [
              "权责发生制不等付款才确认。",
              "借款不是收入。",
              "这是归还本金。",
              "正确：确认费用与应计负债。"
            ],
            "hint": "时间已经过去，费用是否已发生？",
            "errorType": "账户与借贷"
          }
        ],
        "prerequisites": [
          "l6-accruals"
        ],
        "related": [],
        "lab": "interest",
        "english": {
          "summary": "Borrowing creates a liability; interest expense builds as time passes, before payment.",
          "explanation": [
            "Receiving loan principal increases both cash and a loan liability. It is not revenue because the company must repay it. Separate the amount borrowed from the cost of using it.",
            "Interest expense is the cost of using borrowed funds. Even if the contract requires payment only at maturity, interest for elapsed periods is accrued as an expense and interest payable.",
            "At period-end record unpaid interest already incurred. At maturity settle the principal and accrued interest. This example uses simple interest and whole months, so convert the annual rate to the relevant fraction of a year."
          ],
          "rules": [
            "Interest = Principal × annual rate × months / 12.",
            "On borrowing: Dr Cash / Cr Loan payable.",
            "On accrual: Dr Interest expense / Cr Interest payable."
          ],
          "example": {
            "scenario": "A company borrows $1,000 on December 1 at 6% annually, repayable with interest after three months.",
            "steps": [
              "Accrue one month on December 31: 1,000 × 6% × 1/12 = $5.",
              "Accrue another $5 in January and $5 in February.",
              "At maturity pay $1,000 principal and $15 total interest. Previously accrued amounts are not expensed again."
            ],
            "conclusion": "December has $5 interest expense and $5 interest payable, with no interest cash payment."
          },
          "pitfalls": [
            "Loan principal is not revenue, and repaying principal is not an expense.",
            "An annual rate of 6% is not a monthly rate."
          ],
          "questions": [
            {
              "id": "l7-interest-accrual-q1",
              "explanations": [
                "This is the principal.",
                "This is a full year’s interest.",
                "Correct: 1,000 × 6% / 12 = $5.",
                "This is three months’ interest."
              ],
              "hint": "Convert the annual rate to one month."
            },
            {
              "id": "l7-interest-accrual-q2",
              "explanations": [
                "Accrual accounting does not wait for cash payment.",
                "Borrowing is not revenue.",
                "This records repayment of principal.",
                "Correct: recognise the expense and accrued liability."
              ],
              "hint": "Has the cost been incurred as time passes?"
            }
          ]
        }
      },
      {
        "id": "l7-interest-presentation",
        "title": "利息在报表中的位置",
        "en": "Interest and Financial Statement Presentation",
        "pages": [
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19
        ],
        "summary": "经济性质与报表列示是两层判断；同一个利息项目可能在不同格式下被汇总。",
        "explanation": [
          "应付利息可能包含在应计负债等汇总项目中；没有单列一行，不代表企业没有这项债务。借款本金是计息负债，应付未付利息通常是已产生的待付费用，不能把两个余额混在一起。",
          "利润表上的利息费用也不一定都以同一个名字出现。课件对比了财务费用汇总与单列利息的展示方式，阅读时应结合附注，而不是仅凭报表标题猜金额。",
          "课件还介绍利润表向经营、投资、筹资、所得税和终止经营分类的变化。这里的利润表分类与现金流量表的现金分类属于不同报表；具体归类取决于适用准则和企业主营业务。"
        ],
        "rules": [
          "先判断业务性质，再检查主表与附注如何列示。",
          "利润表不是现金流量表；同名分类不意味着金额相同。",
          "格式变化参考课件第18–19页；实际执行时间与主体范围以适用准则为准。"
        ],
        "example": {
          "scenario": "企业主表只显示Accrued liabilities $300，其中包含应付利息$20。",
          "steps": [
            "$20仍是负债，只是包含在汇总金额内。",
            "利润表可以同时反映本期利息费用，即使余额表没有单列Interest payable。"
          ],
          "conclusion": "列示的详细程度不会消除经济业务本身。"
        },
        "pitfalls": [
          "财务费用不一定仅包含利息费用。",
          "不要把利润表的筹资类费用直接等同于本期筹资现金流出。"
        ],
        "questions": [
          {
            "id": "l7-interest-presentation-q1",
            "prompt": "No separate interest-payable line appears on the balance sheet. What is the best conclusion?",
            "zh": "资产负债表未单列应付利息，最合理的判断是什么？",
            "options": [
              "No interest is owed",
              "Interest may be included in accrued liabilities",
              "Interest expense must be zero",
              "All interest has become equity"
            ],
            "answer": 1,
            "explanations": [
              "未单列不能证明不存在。",
              "正确：可能汇总列报，需看附注。",
              "费用发生额与期末负债并非同一个量。",
              "欠息不是股东投入。"
            ],
            "hint": "主表会汇总哪些账户？",
            "errorType": "概念混淆"
          },
          {
            "id": "l7-interest-presentation-q2",
            "prompt": "Which statement about presentation is most appropriate?",
            "zh": "关于列报，哪项最恰当？",
            "options": [
              "Notes can explain items aggregated in the primary statements",
              "Finance costs always mean principal repayment",
              "A label alone reveals every underlying account",
              "Income-statement categories equal cash receipts and payments"
            ],
            "answer": 0,
            "explanations": [
              "正确：附注帮助拆解汇总金额。",
              "偿还本金不是当期利息费用。",
              "一个标签可能包含多个账户。",
              "利润与现金依据不同。"
            ],
            "hint": "为什么要读附注？",
            "errorType": "概念混淆"
          }
        ],
        "prerequisites": [
          "l7-interest-accrual"
        ],
        "related": [],
        "lab": null,
        "english": {
          "summary": "Economic substance and presentation are separate: the same interest item can be grouped differently.",
          "explanation": [
            "Interest payable may be included in a broader accrued-liability line. Absence of a separate line does not mean the obligation is absent. Distinguish interest-bearing principal from interest expense already incurred but unpaid.",
            "Interest expense may also be grouped within broader finance costs. The lecture compares different presentation formats. Read the notes instead of inferring an amount from a line label alone.",
            "The lecture introduces profit-or-loss categories for operating, investing, financing, income taxes and discontinued operations. These income-statement categories are different from cash-flow classifications; detailed treatment depends on the applicable standard and main business activities."
          ],
          "rules": [
            "Identify the economic event first, then inspect the statement and notes.",
            "An income statement is not a cash flow statement; similar category names do not imply equal amounts.",
            "See lecture pages 18–19 for format changes; applicability and effective dates depend on the governing standard."
          ],
          "example": {
            "scenario": "The balance sheet shows only accrued liabilities of $300, including $20 interest payable.",
            "steps": [
              "The $20 remains a liability within an aggregated balance.",
              "The income statement may report current interest expense even without a separate interest-payable balance-sheet line."
            ],
            "conclusion": "Aggregation changes visibility, not the underlying obligation."
          },
          "pitfalls": [
            "Finance costs need not consist solely of interest.",
            "Financing expenses in profit or loss are not automatically financing cash payments."
          ],
          "questions": [
            {
              "id": "l7-interest-presentation-q1",
              "explanations": [
                "Aggregation does not prove absence.",
                "Correct: inspect accrued liabilities and notes.",
                "An expense for a period is not the same as a liability at a date.",
                "Unpaid interest is not contributed equity."
              ],
              "hint": "Which accounts may be aggregated?"
            },
            {
              "id": "l7-interest-presentation-q2",
              "explanations": [
                "Correct: notes help unpack aggregated amounts.",
                "Principal repayment is not current interest expense.",
                "A line can aggregate multiple accounts.",
                "Profit and cash use different bases."
              ],
              "hint": "Why read the notes?"
            }
          ]
        }
      },
      {
        "id": "l7-tax-payable",
        "title": "所得税费用、应交税与付款",
        "en": "Tax Expense, Tax Payable and Tax Paid",
        "pages": [
          20,
          21,
          22,
          23,
          24,
          25,
          26
        ],
        "summary": "费用是期间金额，税负债是时点余额，缴税是现金流；先分清三者。",
        "explanation": [
          "先使用课件的简化假设：没有递延税，没有其他调整，本期所得税费用等于本期计提的当期所得税。计提费用时增加所得税负债，缴税时再减少负债和现金。",
          "因此，当期所得税$1,000并不意味着年末仍欠$1,000。年末欠多少还取决于期初余额和本期已缴金额。",
          "实际中，所得税费用还可能含递延所得税；后面的节点会解释为什么会计利润与应税所得不同。不要把本节简化关系推广到所有报表。"
        ],
        "rules": [
          "Ending tax payable = Beginning tax payable + Current tax accrued − Tax paid（简化）。",
          "计提：Dr Income tax expense / Cr Income taxes payable。",
          "缴税：Dr Income taxes payable / Cr Cash。"
        ],
        "example": {
          "scenario": "期初应交所得税为0，本年计提$1,000，已缴$980。",
          "steps": [
            "费用确认$1,000。",
            "支付$980冲减负债。",
            "期末未付为0+1,000−980=$20。"
          ],
          "conclusion": "本期费用$1,000、现金支付$980、期末负债$20，各自回答不同问题。"
        },
        "pitfalls": [
          "不能把利润表费用直接当期末欠税余额。"
        ],
        "questions": [
          {
            "id": "l7-tax-payable-q1",
            "prompt": "Opening tax payable is $0; current tax accrued is $1,000 and tax paid is $980. Ending tax payable is?",
            "zh": "期初应交税0，计提1,000，缴纳980，期末余额为？",
            "options": [
              "$20",
              "$1,980",
              "$980",
              "$1,000"
            ],
            "answer": 0,
            "explanations": [
              "正确：1,000−980=20。",
              "不能把缴税加进负债。",
              "这是支付额。",
              "忽略了已缴税额。"
            ],
            "hint": "用期初加计提减付款。",
            "errorType": "计算"
          },
          {
            "id": "l7-tax-payable-q2",
            "prompt": "Paying a tax liability already recognised normally requires what entry?",
            "zh": "缴纳已经确认的应交税款，应记什么分录？",
            "options": [
              "Dr Tax expense; Cr Tax payable again",
              "Dr Tax payable; Cr Cash",
              "Dr Tax expense; Cr Revenue",
              "Dr Cash; Cr Tax payable"
            ],
            "answer": 1,
            "explanations": [
              "会重复确认已经计提的费用。",
              "正确：清偿已有负债。",
              "收入不参与这笔缴税。",
              "方向相反。"
            ],
            "hint": "区分计提与支付。",
            "errorType": "账户与借贷"
          }
        ],
        "prerequisites": [
          "l6-expense-payable"
        ],
        "related": [],
        "lab": null,
        "english": {
          "summary": "Expense is a period amount, payable is a balance, and tax paid is a cash flow.",
          "explanation": [
            "Begin with the lecture’s simplified case: no deferred tax or other adjustments, so income tax expense equals the current tax accrued. Accruing tax increases a liability; paying it reduces the liability and cash.",
            "A current tax charge of $1,000 does not mean $1,000 is still owed at year-end. The ending balance also depends on the opening balance and payments made.",
            "In practice total tax expense may include deferred tax. The following nodes explain why accounting profit and taxable income differ. Do not generalise this simplified equality to every report."
          ],
          "rules": [
            "Ending tax payable = beginning tax payable + current tax accrued − tax paid, in this simplified case.",
            "Accrual: Dr Income tax expense / Cr Income taxes payable.",
            "Payment: Dr Income taxes payable / Cr Cash."
          ],
          "example": {
            "scenario": "Opening tax payable is zero, $1,000 is accrued and $980 is paid.",
            "steps": [
              "Recognise $1,000 expense.",
              "Use the $980 payment to reduce the payable.",
              "Ending unpaid balance is 0 + 1,000 − 980 = $20."
            ],
            "conclusion": "Expense of $1,000, payment of $980 and liability of $20 answer different questions."
          },
          "pitfalls": [
            "Do not treat a period’s tax expense as the ending tax-payable balance."
          ],
          "questions": [
            {
              "id": "l7-tax-payable-q1",
              "explanations": [
                "Correct: 1,000 − 980 = 20.",
                "Payment does not add to the liability.",
                "This is the cash paid.",
                "This ignores the payment."
              ],
              "hint": "Use opening plus accrual less payment."
            },
            {
              "id": "l7-tax-payable-q2",
              "explanations": [
                "This would repeat an expense already accrued.",
                "Correct: settle an existing liability.",
                "Revenue is not involved in the payment.",
                "This reverses the direction."
              ],
              "hint": "Separate accrual from payment."
            }
          ]
        }
      },
      {
        "id": "l7-tax-differences",
        "title": "暂时性差异与永久性差异",
        "en": "Temporary and Permanent Differences",
        "pages": [
          26,
          27,
          28,
          30,
          31,
          32
        ],
        "summary": "先问差异未来会不会转回，再判断是否产生递延所得税。",
        "explanation": [
          "财务会计按会计准则计算利润，税务按适用税法计算应税所得（Taxable income）。同一项目可能在两套计算中采用不同时间或不同认可范围。",
          "暂时性差异（Temporary difference）在课件例子中是确认或扣除时点不同，未来会转回。例如会计现在确认存货跌价，税务假设要售出才允许扣除。",
          "永久性差异（Permanent difference）不会在未来获得相反方向的对应处理。例如本例假设政府罚款永远不可税前扣除。只有暂时性差异才可能带来递延税；具体项目的税务处理必须以题设或适用规则为准。"
        ],
        "rules": [
          "暂时性：WHEN不同，未来转回。",
          "永久性：WHETHER不同，不会转回。",
          "永久性差异本身不产生DTA或DTL。"
        ],
        "example": {
          "scenario": "两笔费用各$20：存货跌价将来准予扣除；罚款永远不准扣除。",
          "steps": [
            "本期都可能需要调增应税所得$20。",
            "跌价以后可扣，属于暂时性差异。",
            "罚款以后也不可扣，属于永久性差异。"
          ],
          "conclusion": "本期同样调增，并不能证明两种差异性质相同。"
        },
        "pitfalls": [
          "暂时性不等于不重要；永久性不等于永远挂在资产负债表。"
        ],
        "questions": [
          {
            "id": "l7-tax-differences-q1",
            "prompt": "An expense is recognised now for accounting and deductible next year for tax. This is usually a:",
            "zh": "会计现在确认，税务明年准予扣除，属于？",
            "options": [
              "Share issue",
              "Permanent difference",
              "Temporary difference",
              "Cash receipt"
            ],
            "answer": 2,
            "explanations": [
              "与发行股份无关。",
              "未来会扣除，说明会转回。",
              "正确：差在时间。",
              "这不是收现分类。"
            ],
            "hint": "未来会发生相反方向的税务调整吗？",
            "errorType": "概念混淆"
          },
          {
            "id": "l7-tax-differences-q2",
            "prompt": "A fine is never deductible under the stated tax rule. This difference by itself creates:",
            "zh": "题设罚款永远不得扣除，这项差异本身产生什么？",
            "options": [
              "A prepaid expense",
              "A deferred tax asset",
              "A deferred tax liability",
              "Neither DTA nor DTL"
            ],
            "answer": 3,
            "explanations": [
              "罚款已发生，不是未来服务权。",
              "没有未来可用的税收利益。",
              "也没有这项差异导致的未来补税转回。",
              "正确：永久性差异不产生递延税。"
            ],
            "hint": "差异是否会转回？",
            "errorType": "概念混淆"
          }
        ],
        "prerequisites": [
          "l7-tax-payable"
        ],
        "related": [],
        "lab": null,
        "english": {
          "summary": "Ask whether a difference reverses before deciding whether deferred tax arises.",
          "explanation": [
            "Financial accounting calculates profit under accounting standards; tax accounting calculates taxable income under the applicable tax rules. A transaction can be recognised at different times or accepted differently.",
            "In the lecture examples a temporary difference arises when recognition or deduction occurs in different periods and later reverses. For example, an inventory write-down is expensed now but, under the stated tax assumption, deducted only when sold.",
            "A permanent difference has no later reversing counterpart. The example assumes government fines are never deductible. Temporary differences can give rise to deferred tax; apply the question’s assumptions rather than treating every item identically in all jurisdictions."
          ],
          "rules": [
            "Temporary: different WHEN, with later reversal.",
            "Permanent: different WHETHER, with no reversal.",
            "A permanent difference itself creates neither a DTA nor a DTL."
          ],
          "example": {
            "scenario": "Two $20 expenses: an inventory write-down is deductible later, while a fine is never deductible.",
            "steps": [
              "Both may increase current taxable income by $20.",
              "The later deduction makes the write-down difference temporary.",
              "The absence of a future deduction makes the fine difference permanent."
            ],
            "conclusion": "Equal current adjustments do not imply the same type of difference."
          },
          "pitfalls": [
            "Temporary does not mean unimportant; permanent does not mean a balance remains on the balance sheet forever."
          ],
          "questions": [
            {
              "id": "l7-tax-differences-q1",
              "explanations": [
                "It is unrelated to issuing shares.",
                "It reverses when the future deduction occurs.",
                "Correct: the difference is timing.",
                "This is not a cash-receipt category."
              ],
              "hint": "Will a reversing tax adjustment arise later?"
            },
            {
              "id": "l7-tax-differences-q2",
              "explanations": [
                "The fine is not a right to future services.",
                "There is no future tax benefit from the fine.",
                "There is no future taxable reversal from this difference.",
                "Correct: a permanent difference does not create deferred tax."
              ],
              "hint": "Does the difference reverse?"
            }
          ]
        }
      },
      {
        "id": "l7-dta",
        "title": "递延所得税资产：本期多缴，未来抵回",
        "en": "Deferred Tax Assets and Later Deductions",
        "pages": [
          28,
          29,
          34,
          35,
          36,
          37,
          38,
          39
        ],
        "summary": "符合确认条件的未来可抵扣利益，可以形成递延所得税资产。",
        "explanation": [
          "课件假设存货成本$100，先跌价到$80；会计本年确认费用$20，但税务等售出时才允许扣除。会计税前利润为$200时，应税所得要加回$20，成为$220。",
          "在税率25%、可抵扣利益符合确认条件的简化情形下，当期税为$55，而本期税费为$50；差额$5形成递延所得税资产（Deferred tax asset, DTA）。它表示未来可利用的税收利益，不是一笔已经退回的现金。",
          "次年允许扣除时，假设会计税前利润仍为$200，应税所得减$20至$180，当期税$45，递延税资产转回$5，因此总税费仍为$50。两年合计税费和当期税均为$100。"
        ],
        "rules": [
          "本例DTA增加 = 可抵扣暂时性差异20 × 25% = 5。",
          "首年：Dr Tax expense 50；Dr DTA 5；Cr Tax payable 55。",
          "次年：Dr Tax expense 50；Cr DTA 5；Cr Tax payable 45。"
        ],
        "example": {
          "scenario": "采用课件两年跌价案例，税率保持25%，忽略其他差异。",
          "steps": [
            "第一年：55−5=50，总税费低于当期税。",
            "第二年：45+5=50，DTA转回形成递延税费用。"
          ],
          "conclusion": "确认与转回说明时间差；并不意味着税款不用缴。"
        },
        "pitfalls": [
          "不是所有可抵扣项目都必然确认DTA，还要满足未来可利用等确认条件。"
        ],
        "questions": [
          {
            "id": "l7-dta-q1",
            "prompt": "Book profit before tax is $200; a $20 write-down is deductible later. At 25%, current tax is $55 and total tax expense is $50. The difference creates:",
            "zh": "税前利润200，跌价20以后可扣；25%税率，当期税55、税费50，差额产生？",
            "options": [
              "DTL of $5",
              "Revenue of $5",
              "A permanent difference of $55",
              "DTA of $5"
            ],
            "answer": 3,
            "explanations": [
              "本例是资产而非未来补税负债。",
              "递延税不是营业收入。",
              "差异会转回。",
              "正确：未来可扣除的税收利益为5。"
            ],
            "hint": "多出的5是否对应未来扣除？",
            "errorType": "计算"
          },
          {
            "id": "l7-dta-q2",
            "prompt": "Next year, the $5 DTA fully reverses and current tax is $45. With no other differences, tax expense is:",
            "zh": "次年DTA5全部转回，当期税45，无其他差异，总税费是多少？",
            "options": [
              "$40",
              "$45",
              "$50",
              "$55"
            ],
            "answer": 2,
            "explanations": [
              "转回资产增加税费，不是再减。",
              "漏掉了递延税费用。",
              "正确：45+5=50。",
              "把第一年当期税混入了。"
            ],
            "hint": "DTA减少时，总税费如何变化？",
            "errorType": "计算"
          }
        ],
        "prerequisites": [
          "l7-tax-differences"
        ],
        "related": [],
        "lab": null,
        "english": {
          "summary": "A qualifying future deduction can give rise to a deferred tax asset.",
          "explanation": [
            "The lecture assumes inventory costing $100 is written down to $80. Accounting recognises the $20 loss now, but tax permits deduction only on sale. With accounting profit before tax of $200, taxable income is $220 after adding back $20.",
            "At 25%, assuming recognition criteria for the future tax benefit are met, current tax is $55 while total tax expense is $50. The $5 difference is a deferred tax asset, or DTA. It represents a future tax benefit, not cash already refunded.",
            "When the deduction becomes available next year, assume accounting profit before tax is again $200. Taxable income is $180 and current tax is $45. Reversing the $5 DTA brings total tax expense to $50. Across both years current tax and tax expense each total $100."
          ],
          "rules": [
            "DTA increase in this example = deductible temporary difference 20 × 25% = 5.",
            "Year 1: Dr Tax expense 50; Dr DTA 5; Cr Tax payable 55.",
            "Year 2: Dr Tax expense 50; Cr DTA 5; Cr Tax payable 45."
          ],
          "example": {
            "scenario": "Use the two-year write-down example at a constant 25%, ignoring other differences.",
            "steps": [
              "Year 1: 55 − 5 = 50, so tax expense is below current tax.",
              "Year 2: 45 + 5 = 50; reversing the DTA creates deferred tax expense."
            ],
            "conclusion": "Recognition and reversal reflect timing; they do not eliminate payment obligations."
          },
          "pitfalls": [
            "Not every potential deduction qualifies for a recognised DTA; future utilisation and other recognition criteria matter."
          ],
          "questions": [
            {
              "id": "l7-dta-q1",
              "explanations": [
                "This is an asset, not a future taxable liability.",
                "Deferred tax is not sales revenue.",
                "The difference reverses.",
                "Correct: the future deduction yields a $5 tax benefit."
              ],
              "hint": "Does the extra $5 correspond to a future deduction?"
            },
            {
              "id": "l7-dta-q2",
              "explanations": [
                "Reversing the asset increases, rather than further reduces, expense.",
                "This omits deferred tax expense.",
                "Correct: 45 + 5 = 50.",
                "This confuses the first year’s current tax."
              ],
              "hint": "How does a DTA decrease affect total tax expense?"
            }
          ]
        }
      },
      {
        "id": "l7-dtl-formula",
        "title": "递延所得税负债与税费勾稽",
        "en": "Deferred Tax Liabilities and the Tax Reconciliation",
        "pages": [
          28,
          29,
          32
        ],
        "summary": "区分递延税余额与本期变动，税费公式使用的是本期影响。",
        "explanation": [
          "如果税务现在允许比会计更多的扣除，本期应税所得可能较低，而未来扣除变少时会补回来。在满足相应条件的例子中，这会形成递延所得税负债（Deferred tax liability, DTL）。",
          "例如会计税前利润$1,000，税务比会计多计折旧$200，应税所得为$800。税率25%时，当期税$200，而会计对应总税费$250，差额$50增加DTL。",
          "课件的“当期税+DTL−DTA”是便于入门的简写。做跨年题时应使用相关本期变动：Tax expense = Current tax + Increase in DTL − Increase in DTA；减少视作负增加，并留意有些税务影响计入OCI或权益。"
        ],
        "rules": [
          "本期税费通常由当期税与递延税影响共同构成。",
          "本例：Dr Tax expense 250 / Cr Tax payable 200 / Cr DTL 50。",
          "不可把历年累计DTL或DTA余额直接全部加减进本年税费。"
        ],
        "example": {
          "scenario": "本年当期税$200，与损益相关的DTL净增加$50，DTA无变动。",
          "steps": [
            "税费为200+50=$250。",
            "如果期初DTL已有$30，期末余额为$80，但本期影响仍是$50。"
          ],
          "conclusion": "期末余额80与本期变动50不能互换。"
        },
        "pitfalls": [
          "DTL不是永远不用付的税，而是未来税务影响的负债。",
          "税前利润用EBT更清楚；EBIT通常指息税前利润，不能忽略利息直接替代。"
        ],
        "questions": [
          {
            "id": "l7-dtl-formula-q1",
            "prompt": "Current tax is $200 and the DTL increases by $50 through profit or loss, with no DTA change. Tax expense is:",
            "zh": "当期税200，损益相关DTL增加50，DTA无变化，税费为？",
            "options": [
              "$50",
              "$150",
              "$200",
              "$250"
            ],
            "answer": 3,
            "explanations": [
              "这是递延部分，不是总税费。",
              "DTL增加应加，不是减。",
              "漏掉递延税费用。",
              "正确：200+50=250。"
            ],
            "hint": "使用本期变动。",
            "errorType": "计算"
          },
          {
            "id": "l7-dtl-formula-q2",
            "prompt": "Which amount normally enters the simplified tax-expense reconciliation?",
            "zh": "简化税费勾稽使用哪个金额？",
            "options": [
              "Total dividends",
              "The entire historical DTL balance",
              "The current-period relevant change in deferred tax",
              "All cash in the bank"
            ],
            "answer": 2,
            "explanations": [
              "股利不是所得税费用。",
              "累计余额不是本期费用。",
              "正确：应看本期相关变动。",
              "银行存款不是税费勾稽项。"
            ],
            "hint": "余额与发生额分别回答什么？",
            "errorType": "概念混淆"
          }
        ],
        "prerequisites": [
          "l7-dta"
        ],
        "related": [],
        "lab": null,
        "english": {
          "summary": "Distinguish deferred-tax balances from changes: expense reconciliation uses period effects.",
          "explanation": [
            "If tax allows more deduction now than accounting does, current taxable income can be lower and the effect may reverse through higher taxable income later. In the relevant case this creates a deferred tax liability, or DTL.",
            "For example, accounting profit before tax is $1,000 while tax depreciation exceeds book depreciation by $200. Taxable income is $800. At 25%, current tax is $200, total tax expense is $250, and the $50 difference increases the DTL.",
            "The lecture’s current tax + DTL − DTA is an introductory shorthand. Across periods use the relevant changes: tax expense = current tax + increase in DTL − increase in DTA. A decrease is a negative increase; some tax effects belong in OCI or equity rather than profit or loss."
          ],
          "rules": [
            "Total tax expense generally combines current and deferred tax effects.",
            "Example entry: Dr Tax expense 250 / Cr Tax payable 200 / Cr DTL 50.",
            "Do not add or subtract the entire accumulated DTL or DTA balance as this year’s expense."
          ],
          "example": {
            "scenario": "Current tax is $200, the profit-or-loss-related DTL increases $50, and DTA is unchanged.",
            "steps": [
              "Tax expense is 200 + 50 = $250.",
              "If opening DTL was $30, closing DTL is $80, but the period effect remains $50."
            ],
            "conclusion": "The closing balance of $80 is not interchangeable with the $50 movement."
          },
          "pitfalls": [
            "A DTL is not tax permanently avoided; it is a liability for future tax effects.",
            "EBT is profit before tax; EBIT normally means profit before interest and tax. Do not substitute EBIT without considering interest."
          ],
          "questions": [
            {
              "id": "l7-dtl-formula-q1",
              "explanations": [
                "This is only the deferred component.",
                "An increase in DTL is added, not subtracted.",
                "This omits deferred tax expense.",
                "Correct: 200 + 50 = 250."
              ],
              "hint": "Use the movement for the period."
            },
            {
              "id": "l7-dtl-formula-q2",
              "explanations": [
                "Dividends are not income tax expense.",
                "An accumulated balance is not a period expense.",
                "Correct: use relevant period movements.",
                "Cash balances are not the deferred-tax reconciliation item."
              ],
              "hint": "What do balances and movements measure?"
            }
          ]
        }
      },
      {
        "id": "l7-permanent-tax",
        "title": "永久性差异如何改变有效税率",
        "en": "Permanent Differences and Effective Tax Rates",
        "pages": [
          30,
          31,
          40,
          41,
          42
        ],
        "summary": "不可扣除的罚款会影响当期税与总税费，但不会留下可转回的递延税。",
        "explanation": [
          "假设会计税前利润$200，已扣除罚款$20，但题设税法永不允许扣除这笔罚款。计算应税所得时要加回$20，得到$220。",
          "税率25%，当期税是$55；因为这项差异永不转回，总所得税费用也为$55，而不是$50另加DTA。",
          "有效税率（本节补充指标）为所得税费用除以会计税前利润，本例55/200=27.5%。它可能不同于法定税率，不应因此直接认定报表错误。课件第40–41页标题沿用了存货字样，但正文的永久性例子讲的是罚款。"
        ],
        "rules": [
          "本例Taxable income = Accounting profit before tax + Non-deductible fine。",
          "永久性差异不产生递延税资产或负债。",
          "Effective tax rate = Income tax expense / Accounting profit before tax（分母非零）。"
        ],
        "example": {
          "scenario": "会计税前利润$200，罚款加回$20，税率25%。",
          "steps": [
            "应税所得220，当期税55。",
            "总税费55，税后净利润145。",
            "有效税率55/200=27.5%。"
          ],
          "conclusion": "没有未来抵扣，不能为罚款确认DTA。"
        },
        "pitfalls": [
          "不要看到会计利润与应税所得不同，就一律建立DTA。"
        ],
        "questions": [
          {
            "id": "l7-permanent-tax-q1",
            "prompt": "Profit before tax is $200 after a non-deductible $20 fine. At 25%, tax expense is:",
            "zh": "税前利润200已扣罚款20，罚款不得扣除，25%税率的税费为？",
            "options": [
              "$55",
              "$5",
              "$45",
              "$50"
            ],
            "answer": 0,
            "explanations": [
              "正确：(200+20)×25%=55。",
              "只有调整部分，不是总额。",
              "错误地再扣了罚款。",
              "忽略永久性差异。"
            ],
            "hint": "罚款是否应加回？",
            "errorType": "计算"
          },
          {
            "id": "l7-permanent-tax-q2",
            "prompt": "A permanent difference is expected to reverse next year. This statement is:",
            "zh": "永久性差异预计明年转回，这句话是？",
            "options": [
              "True if cash is paid",
              "False; non-reversal defines a permanent difference",
              "True if the tax rate is 25%",
              "True for every fine"
            ],
            "answer": 1,
            "explanations": [
              "付款不改变其扣除资格。",
              "正确：不会转回是关键。",
              "税率不决定差异是否永久。",
              "题设永不扣除的罚款不转回。"
            ],
            "hint": "WHEN还是WHETHER？",
            "errorType": "概念混淆"
          }
        ],
        "prerequisites": [
          "l7-tax-differences"
        ],
        "related": [],
        "lab": null,
        "english": {
          "summary": "A permanently non-deductible fine affects current and total tax without a reversing deferred balance.",
          "explanation": [
            "Assume accounting profit before tax is $200 after a $20 fine, and the stated tax rule never permits deduction of the fine. Add back $20 to reach taxable income of $220.",
            "At 25%, current tax is $55. Because the difference never reverses, total tax expense is also $55, rather than $50 plus a DTA.",
            "An additional useful metric is the effective tax rate: tax expense divided by accounting profit before tax. Here 55 / 200 = 27.5%. A rate different from the statutory rate is not automatically an error. Pages 40–41 retain an inventory heading, but their permanent-difference facts concern a fine."
          ],
          "rules": [
            "Here taxable income = accounting profit before tax + non-deductible fine.",
            "A permanent difference creates neither a deferred tax asset nor a liability.",
            "Effective tax rate = income tax expense / accounting profit before tax, with a non-zero denominator."
          ],
          "example": {
            "scenario": "Accounting profit before tax is $200, the fine add-back is $20, and the tax rate is 25%.",
            "steps": [
              "Taxable income is 220 and current tax is 55.",
              "Total tax expense is 55 and profit after tax is 145.",
              "The effective tax rate is 55 / 200 = 27.5%."
            ],
            "conclusion": "There is no future deduction, so no DTA is recognised for the fine."
          },
          "pitfalls": [
            "Do not create a DTA merely because accounting profit differs from taxable income."
          ],
          "questions": [
            {
              "id": "l7-permanent-tax-q1",
              "explanations": [
                "Correct: (200 + 20) × 25% = 55.",
                "This is only the adjustment’s tax effect.",
                "This wrongly deducts the fine again.",
                "This ignores the permanent difference."
              ],
              "hint": "Should the fine be added back?"
            },
            {
              "id": "l7-permanent-tax-q2",
              "explanations": [
                "Payment does not change deductibility.",
                "Correct: non-reversal is the defining point.",
                "The rate does not determine whether a difference is permanent.",
                "A permanently non-deductible fine does not reverse."
              ],
              "hint": "Different WHEN, or different WHETHER?"
            }
          ]
        }
      },
      {
        "id": "l7-retained-earnings",
        "title": "净利润、宣告股利与留存收益",
        "en": "Net Income, Declared Dividends and Retained Earnings",
        "pages": [
          44,
          45,
          46,
          47,
          48,
          49,
          50,
          51
        ],
        "summary": "利润增加留存收益，宣告股利减少留存收益；股利不是经营费用。",
        "explanation": [
          "留存收益（Retained earnings）累计企业赚得但未分配的利润，可能也包含累计亏损。它是权益账户，不是装着对应现金的一只保险箱。",
          "本期净利润加到期初留存收益；宣告股利从中扣除。宣告但尚未支付时，可能先形成应付股利，支付时再冲减负债和现金；课件为了简化，假设当期宣告当期支付。",
          "只有“投入资本+留存收益”两部分权益时，可从恒等式倒算留存收益。引入其他综合收益等权益项目后，还要扣除这些其他项目，不能继续无条件使用简化公式。"
        ],
        "rules": [
          "Ending RE = Beginning RE + Net income − Dividends declared（无其他变动）。",
          "股利分配不是计算净利润的费用。",
          "RE不是现金余额；企业可能把赚得的利润投入存货或设备。"
        ],
        "example": {
          "scenario": "期初RE$1,362，净利润$813，宣告股利$250，忽略其他变动。",
          "steps": [
            "期末RE=1,362+813−250=$1,925。",
            "课件的汇总报表可能因取整出现$1,924，不能据此把公式改掉。"
          ],
          "conclusion": "分清舍入误差、会计逻辑与现金余额。"
        },
        "pitfalls": [
          "宣告与支付并不总是同一天。",
          "公司有留存收益不代表同额现金可分配。"
        ],
        "questions": [
          {
            "id": "l7-retained-earnings-q1",
            "prompt": "Opening RE is $100, net income $40 and dividends declared $15. Closing RE is:",
            "zh": "期初RE100，净利润40，宣告股利15，期末RE为？",
            "options": [
              "$25",
              "$155",
              "$125",
              "$60"
            ],
            "answer": 2,
            "explanations": [
              "这是净增加额，不是期末余额。",
              "股利应减去。",
              "正确：100+40−15=125。",
              "忽略了正确的余额关系。"
            ],
            "hint": "期初加利润减分配。",
            "errorType": "计算"
          },
          {
            "id": "l7-retained-earnings-q2",
            "prompt": "Declaring a dividend normally reduces which item without reducing net income?",
            "zh": "宣告股利通常减少哪个项目，但不减少净利润？",
            "options": [
              "Accounts receivable",
              "Revenue",
              "Operating expense",
              "Retained earnings"
            ],
            "answer": 3,
            "explanations": [
              "与客户应收无直接关系。",
              "不是冲减营业收入。",
              "股利不是经营费用。",
              "正确：减少权益中的RE。"
            ],
            "hint": "分配利润与赚取利润不同。",
            "errorType": "概念混淆"
          }
        ],
        "prerequisites": [
          "l2-retained-earnings"
        ],
        "related": [],
        "lab": null,
        "english": {
          "summary": "Profit increases retained earnings; declared dividends reduce them and are not operating expenses.",
          "explanation": [
            "Retained earnings accumulate profits not distributed, and may include accumulated losses. They are an equity account, not a separate box of matching cash.",
            "Add current net income to opening retained earnings and subtract declared dividends. A declaration before payment may create dividends payable; later payment reduces the liability and cash. The lecture simplifies by assuming declared dividends are paid in the same year.",
            "With equity consisting only of contributed capital and retained earnings, use the accounting equation to derive retained earnings. Once other equity components such as AOCI exist, include them rather than applying the simplified formula unconditionally."
          ],
          "rules": [
            "Ending RE = beginning RE + net income − declared dividends, with no other changes.",
            "Dividends are distributions, not expenses in calculating net income.",
            "RE is not cash: retained profits may finance inventory or equipment."
          ],
          "example": {
            "scenario": "Opening RE is $1,362, net income $813 and declared dividends $250, with no other changes.",
            "steps": [
              "Closing RE = 1,362 + 813 − 250 = $1,925.",
              "The lecture’s rounded summary may show $1,924; rounding does not change the formula."
            ],
            "conclusion": "Separate rounding, accounting logic and cash balances."
          },
          "pitfalls": [
            "Declaration and payment are not always on the same day.",
            "Retained earnings do not imply an equal amount of distributable cash."
          ],
          "questions": [
            {
              "id": "l7-retained-earnings-q1",
              "explanations": [
                "This is the increase, not the closing balance.",
                "Dividends are subtracted.",
                "Correct: 100 + 40 − 15 = 125.",
                "This does not follow the roll-forward."
              ],
              "hint": "Opening balance plus profit less distributions."
            },
            {
              "id": "l7-retained-earnings-q2",
              "explanations": [
                "It is not directly a customer receivable transaction.",
                "It does not reduce sales revenue.",
                "A dividend is not an operating expense.",
                "Correct: it reduces RE within equity."
              ],
              "hint": "Distributing profit differs from earning it."
            }
          ]
        }
      },
      {
        "id": "l7-basic-eps",
        "title": "基本每股收益与加权平均股数",
        "en": "Basic EPS and Weighted-Average Shares",
        "pages": [
          52,
          53,
          54,
          55,
          56,
          57,
          58
        ],
        "summary": "每股收益是利润除以相应平均股数，不是每股发到手的现金。",
        "explanation": [
          "每股收益（Earnings per share, EPS）把利润放到每一份股份上理解。课件简化为净利润除以年内平均普通股数；严谨应用时要使用归属于普通股股东的相应利润口径。",
          "股数若年中变化，分母不能机械用年末股数。例如年初1,000股，7月1日新增1,000股，全年加权平均为1,500股。这里只演示按月份加权，不涉及拆股等追溯调整。",
          "EPS是会计利润指标。公司可能一分钱股利也没付，因此EPS为$0.72并不意味着每股已经收到$0.72，亦不等同于股票投资的实际总回报。"
        ],
        "rules": [
          "Basic EPS = Earnings attributable to ordinary shareholders / Weighted-average ordinary shares。",
          "全年平均股数须与全年利润的期间匹配。",
          "金额和股数的单位必须一致。"
        ],
        "example": {
          "scenario": "净利润$813,000，全年平均普通股1,125,000股，无优先股等调整。",
          "steps": [
            "EPS=813,000/1,125,000≈$0.72。",
            "若报表利润单位为千元，应先恢复与股数一致的单位。"
          ],
          "conclusion": "EPS描述每股会计收益，不是股利承诺。"
        },
        "pitfalls": [
          "不要把期末股数直接当成加权平均股数。",
          "EPS不等于DPS（Dividend per share）。"
        ],
        "questions": [
          {
            "id": "l7-basic-eps-q1",
            "prompt": "Earnings available to ordinary shareholders are $900 and weighted-average shares are 300. Basic EPS is:",
            "zh": "普通股可享利润900，加权平均股数300，基本EPS为？",
            "options": [
              "$0.33",
              "$3",
              "$600",
              "$1,200"
            ],
            "answer": 1,
            "explanations": [
              "把分子分母倒置了。",
              "正确：900/300=3。",
              "不应做减法。",
              "不应做加法。"
            ],
            "hint": "每一股分到多少会计利润？",
            "errorType": "计算"
          },
          {
            "id": "l7-basic-eps-q2",
            "prompt": "A company reports positive EPS and pays no dividends. This is:",
            "zh": "EPS为正但不发股利，这种情况是？",
            "options": [
              "Possible, because earnings and distributions differ",
              "Proof of an accounting error",
              "Proof that cash equals EPS",
              "Impossible"
            ],
            "answer": 0,
            "explanations": [
              "正确：赚取利润和分配现金不同。",
              "本身不能证明错误。",
              "EPS不是现金余额。",
              "利润不强制全部分配。"
            ],
            "hint": "EPS与DPS是否相同？",
            "errorType": "概念混淆"
          }
        ],
        "prerequisites": [
          "l7-retained-earnings"
        ],
        "related": [],
        "lab": null,
        "english": {
          "summary": "EPS divides relevant earnings by weighted-average shares; it is not cash paid per share.",
          "explanation": [
            "Earnings per share, or EPS, expresses relevant profit per ownership unit. The lecture simplifies it to net income divided by average ordinary shares; precise applications use the appropriate earnings attributable to ordinary shareholders.",
            "If shares change during the year, do not simply use closing shares. With 1,000 shares initially and another 1,000 issued on July 1, the weighted average is 1,500. This introductory example uses monthly weighting and excludes retrospective split adjustments.",
            "EPS is an accounting earnings measure. A company can pay no dividend, so EPS of $0.72 does not mean shareholders received $0.72 cash per share or earned that exact total investment return."
          ],
          "rules": [
            "Basic EPS = earnings attributable to ordinary shareholders / weighted-average ordinary shares.",
            "The share denominator must match the earnings period.",
            "Use consistent units for earnings and shares."
          ],
          "example": {
            "scenario": "Net income is $813,000 and weighted-average ordinary shares are 1,125,000, with no preference-share adjustments.",
            "steps": [
              "EPS = 813,000 / 1,125,000 ≈ $0.72.",
              "If reported profit is in thousands, align its units with the share count."
            ],
            "conclusion": "EPS describes accounting earnings per share, not a dividend promise."
          },
          "pitfalls": [
            "Do not automatically replace weighted-average shares with closing shares.",
            "EPS differs from DPS, or dividends per share."
          ],
          "questions": [
            {
              "id": "l7-basic-eps-q1",
              "explanations": [
                "This reverses numerator and denominator.",
                "Correct: 900 / 300 = 3.",
                "Subtraction is not the calculation.",
                "Addition is not the calculation."
              ],
              "hint": "How much accounting earnings relate to each share?"
            },
            {
              "id": "l7-basic-eps-q2",
              "explanations": [
                "Correct: earnings and cash distributions differ.",
                "This alone does not prove an error.",
                "EPS is not a cash balance.",
                "Profit need not be fully distributed."
              ],
              "hint": "Are EPS and DPS the same?"
            }
          ]
        }
      },
      {
        "id": "l7-diluted-eps",
        "title": "潜在普通股与稀释每股收益",
        "en": "Potential Shares and Diluted EPS",
        "pages": [
          56,
          57,
          58
        ],
        "summary": "稀释EPS考虑具有稀释作用的潜在普通股，也可能需要调整分子。",
        "explanation": [
          "期权、可转换债券或可转换优先股，可能让未来普通股数增加。稀释每股收益（Diluted EPS）试着说明这些具有稀释作用的潜在股份转换后，每股收益会怎样。",
          "不能把所有潜在股份机械加进去。补充边界：具有反稀释效果的项目通常不计入稀释EPS；可转债假设转换还可能需要把相关税后利息加回分子。",
          "入门先掌握：基本EPS使用实际普通股的加权平均数；稀释EPS按适用计算方法考虑稀释性潜在股份。具体转换条件、期间和分子调整在真实报表中还要看附注。"
        ],
        "rules": [
          "Basic：实际发行在外普通股的加权平均数。",
          "Diluted：考虑具有稀释作用的潜在普通股。",
          "不能无条件保持净利润不变并加入所有潜在股份。"
        ],
        "example": {
          "scenario": "简化假设：可享利润$100、实际平均100股、另有20股具有稀释效果，且无分子调整。",
          "steps": [
            "基本EPS=100/100=$1。",
            "简化稀释EPS=100/120≈$0.83。"
          ],
          "conclusion": "这个例子仅演示股数增加的影响，真实可转债等还需专门计算。"
        },
        "pitfalls": [
          "反稀释项目不应为了凑总数全部加入。"
        ],
        "questions": [
          {
            "id": "l7-diluted-eps-q1",
            "prompt": "Which instrument can create potential ordinary shares?",
            "zh": "哪种工具可能产生潜在普通股？",
            "options": [
              "A convertible bond",
              "Inventory",
              "A trade payable",
              "A prepaid insurance policy"
            ],
            "answer": 0,
            "explanations": [
              "正确：可转债可能转为普通股。",
              "存货不是潜在股权工具。",
              "普通应付账款不当然转换为股份。",
              "保险权利不是股份。"
            ],
            "hint": "名称中的convertible意味着什么？",
            "errorType": "英文理解"
          },
          {
            "id": "l7-diluted-eps-q2",
            "prompt": "In a simplified example, earnings are $100, shares are 100 and 20 dilutive shares are added with no earnings adjustment. Diluted EPS is approximately:",
            "zh": "简化题：利润100，实际100股，再加20稀释股且不调利润，稀释EPS约为？",
            "options": [
              "$1.00",
              "$0.83",
              "$0.20",
              "$1.20"
            ],
            "answer": 1,
            "explanations": [
              "这是基本EPS。",
              "正确：100/120≈0.83。",
              "只算了增量比例。",
              "分母增大，EPS应降低。"
            ],
            "hint": "用调整后的总股数。",
            "errorType": "计算"
          }
        ],
        "prerequisites": [
          "l7-basic-eps"
        ],
        "related": [],
        "lab": null,
        "english": {
          "summary": "Diluted EPS considers dilutive potential ordinary shares and may require numerator adjustments.",
          "explanation": [
            "Options, convertible bonds and convertible preference shares may increase ordinary shares. Diluted EPS examines earnings per share after allowing for potential shares that are dilutive.",
            "Do not mechanically add every potential share. As a supplementary boundary, anti-dilutive instruments are generally excluded, and assumed conversion of bonds may require adding related after-tax interest to the numerator.",
            "At this level distinguish actual weighted-average shares in basic EPS from the dilutive potential shares included under the relevant diluted-EPS method. Real calculations also require terms, timing and numerator adjustments explained in the notes."
          ],
          "rules": [
            "Basic: weighted-average actual ordinary shares outstanding.",
            "Diluted: include dilutive potential ordinary shares.",
            "Do not unconditionally keep the numerator unchanged and add all potential shares."
          ],
          "example": {
            "scenario": "Simplified assumptions: earnings $100, 100 actual average shares, 20 dilutive potential shares and no numerator adjustment.",
            "steps": [
              "Basic EPS = 100 / 100 = $1.",
              "Simplified diluted EPS = 100 / 120 ≈ $0.83."
            ],
            "conclusion": "This illustrates the denominator effect; actual convertibles need instrument-specific calculations."
          },
          "pitfalls": [
            "Do not include anti-dilutive instruments simply to total all potential shares."
          ],
          "questions": [
            {
              "id": "l7-diluted-eps-q1",
              "explanations": [
                "Correct: a convertible bond may convert into ordinary shares.",
                "Inventory is not a potential equity instrument.",
                "A trade payable does not automatically convert into shares.",
                "Insurance rights are not shares."
              ],
              "hint": "What does convertible imply?"
            },
            {
              "id": "l7-diluted-eps-q2",
              "explanations": [
                "This is basic EPS.",
                "Correct: 100 / 120 ≈ 0.83.",
                "This is only an incremental ratio.",
                "A larger denominator reduces EPS."
              ],
              "hint": "Use the adjusted total share count."
            }
          ]
        }
      },
      {
        "id": "l7-pe",
        "title": "市盈率如何连接价格与收益",
        "en": "Price-to-Earnings Ratio and Expectations",
        "pages": [
          59,
          60,
          61,
          62,
          63,
          64,
          65
        ],
        "summary": "P/E把股价与每股收益联系起来，但高低本身不能直接决定便宜或昂贵。",
        "explanation": [
          "市盈率（Price-to-earnings ratio, P/E）为每股市场价格除以所选EPS。比较前要说明EPS口径，是历史还是预测、基本还是稀释，以及期间是否一致。",
          "较高P/E可能反映市场期待未来增长，也可能包含过高定价；较低P/E可能反映风险或较弱增长。课件用历史股价案例说明，增长预期修正会改变估值倍数。",
          "这些是理解市场数字的框架，不是买卖建议。EPS接近零时P/E会很敏感；EPS为负时，常规正市盈率比较失去直观意义。"
        ],
        "rules": [
          "P/E = Market price per share / EPS。",
          "价格与EPS必须使用兼容的每股单位。",
          "P/E变化可能来自股价、收益或两者同时变化。"
        ],
        "example": {
          "scenario": "股价$14.40，所选全年EPS$0.72。",
          "steps": [
            "P/E=14.40/0.72=20倍。",
            "如果EPS不变、股价减半，则P/E为10倍；不能仅凭倍数下降判断未来回报。"
          ],
          "conclusion": "倍数是问题的起点，应继续问增长、风险与利润质量。"
        },
        "pitfalls": [
          "高P/E不自动等于高质量，低P/E不自动等于便宜。"
        ],
        "questions": [
          {
            "id": "l7-pe-q1",
            "prompt": "Price per share is $14.40 and EPS is $0.72. P/E is:",
            "zh": "股价14.40，EPS0.72，P/E为？",
            "options": [
              "10 times",
              "20 times",
              "72 times",
              "2 times"
            ],
            "answer": 1,
            "explanations": [
              "这是股价减半后的倍数。",
              "正确：14.40/0.72=20。",
              "不能直接使用EPS的小数位。",
              "计算不符。"
            ],
            "hint": "价格除以每股收益。",
            "errorType": "计算"
          },
          {
            "id": "l7-pe-q2",
            "prompt": "A high P/E by itself proves that a share is a good investment. This claim is:",
            "zh": "仅凭高P/E就证明是好投资，这句话如何判断？",
            "options": [
              "Not justified; growth, risk and pricing also matter",
              "True if dividends are zero",
              "True for every public firm",
              "Always true"
            ],
            "answer": 0,
            "explanations": [
              "正确：还需要解释预期与风险。",
              "不分红不证明定价合理。",
              "上市身份也不构成证明。",
              "倍数不能独立证明质量。"
            ],
            "hint": "数字的经济含义是什么？",
            "errorType": "概念混淆"
          }
        ],
        "prerequisites": [
          "l7-basic-eps",
          "l1-equity-valuation"
        ],
        "related": [],
        "lab": null,
        "english": {
          "summary": "P/E relates price to EPS, but a high or low ratio alone does not settle valuation.",
          "explanation": [
            "Price-to-earnings ratio, or P/E, is market price per share divided by the chosen EPS. Specify whether earnings are historical or forecast, basic or diluted, and use consistent periods when comparing.",
            "A high P/E may reflect growth expectations or excessive pricing. A low P/E may reflect risk or weak growth. The lecture’s historical price example illustrates how revised growth expectations can change multiples.",
            "This is a framework for interpreting reported numbers, not a trading recommendation. P/E is sensitive when EPS is near zero; ordinary positive-multiple comparisons become difficult when EPS is negative."
          ],
          "rules": [
            "P/E = market price per share / EPS.",
            "Price and EPS must use compatible per-share units.",
            "A P/E change can result from price, earnings or both."
          ],
          "example": {
            "scenario": "Price is $14.40 and the selected annual EPS is $0.72.",
            "steps": [
              "P/E = 14.40 / 0.72 = 20 times.",
              "With unchanged EPS and half the price, P/E becomes 10; the decline alone does not establish future returns."
            ],
            "conclusion": "The multiple starts an investigation into growth, risk and earnings quality."
          },
          "pitfalls": [
            "High P/E does not automatically mean quality; low P/E does not automatically mean cheap."
          ],
          "questions": [
            {
              "id": "l7-pe-q1",
              "explanations": [
                "This would apply after halving price.",
                "Correct: 14.40 / 0.72 = 20.",
                "Do not use the digits of EPS as the multiple.",
                "The arithmetic does not match."
              ],
              "hint": "Divide price by earnings per share."
            },
            {
              "id": "l7-pe-q2",
              "explanations": [
                "Correct: expectations, risk and pricing need analysis.",
                "No dividend does not establish fair pricing.",
                "Listing status is not proof either.",
                "A multiple alone does not establish quality."
              ],
              "hint": "What economic assumptions lie behind the number?"
            }
          ]
        }
      },
      {
        "id": "l7-oci",
        "title": "净利润之外的其他综合收益",
        "en": "Other Comprehensive Income",
        "pages": [
          66,
          67,
          68,
          69,
          70,
          71,
          72,
          73,
          74
        ],
        "summary": "有些准则指定的利得损失进入OCI，而不是当期净利润。",
        "explanation": [
          "净利润不是所有权益变化的总和。其他综合收益（Other comprehensive income, OCI）记录按相应准则要求未计入本期损益的特定利得与损失。它不是可以任意放置不想进利润表项目的“杂物箱”。",
          "课件以境外经营报表折算说明：一块以欧元计价的土地，本地账面金额不变，但集团以美元呈报时，汇率变化使折算金额变化；本例折算差额进入OCI。这里讨论境外经营的报表折算，并非所有外币交易损益都走OCI。",
          "综合收益（Comprehensive income）为净利润加OCI。即使某项损失没有降低净利润，也可能通过OCI降低综合收益与权益；存货跌价等普通损益不能随意移到OCI。"
        ],
        "rules": [
          "Comprehensive income = Net income + OCI。",
          "按题设与适用准则判断哪些项目进入OCI。",
          "外币交易损益与境外经营报表折算需要区分。"
        ],
        "example": {
          "scenario": "境外经营土地€1,000,000，本地金额不变；折算率由每欧元$1.22变为$1.09。",
          "steps": [
            "美元折算金额从$1,220,000降为$1,090,000。",
            "按本例折算规则，差额−$130,000计入OCI。",
            "若净利润为$200,000，且无其他OCI，则综合收益为$70,000。"
          ],
          "conclusion": "净利润未受本项折算影响，但综合收益与权益减少。"
        },
        "pitfalls": [
          "不能把所有未实现损益都一概认定为OCI。"
        ],
        "questions": [
          {
            "id": "l7-oci-q1",
            "prompt": "Net income is $200 and OCI is a loss of $30. Comprehensive income is:",
            "zh": "净利润200，OCI损失30，综合收益为？",
            "options": [
              "$200",
              "$170",
              "$30",
              "$230"
            ],
            "answer": 1,
            "explanations": [
              "忽略OCI。",
              "正确：200−30=170。",
              "只有OCI金额。",
              "损失应减。"
            ],
            "hint": "把损失作为负数相加。",
            "errorType": "计算"
          },
          {
            "id": "l7-oci-q2",
            "prompt": "Which statement about OCI is correct?",
            "zh": "关于OCI哪项正确？",
            "options": [
              "Only specified items qualify under relevant accounting rules",
              "OCI is always paid in cash",
              "Managers may put any expense there",
              "All foreign-currency losses always enter OCI"
            ],
            "answer": 0,
            "explanations": [
              "正确：需符合规定。",
              "OCI不是现金支付分类。",
              "不能任意分类。",
              "外币交易与折算不一样。"
            ],
            "hint": "OCI的边界由什么决定？",
            "errorType": "概念混淆"
          }
        ],
        "prerequisites": [
          "l3-profit-ladder"
        ],
        "related": [],
        "lab": null,
        "english": {
          "summary": "Some specified gains and losses are recognised in OCI rather than current net income.",
          "explanation": [
            "Net income does not explain every equity movement. Other comprehensive income, or OCI, contains specified gains and losses that the relevant standards require outside current profit or loss. It is not a discretionary holding area for unwanted expenses.",
            "The lecture illustrates foreign-operation translation: land retains its euro carrying amount, while its translated dollar amount changes as exchange rates move. In that example the translation difference enters OCI. This is foreign-operation translation, not a rule that all foreign-currency gains and losses enter OCI.",
            "Comprehensive income equals net income plus OCI. A loss can leave net income unchanged yet reduce comprehensive income and equity through OCI. Ordinary losses such as inventory write-downs cannot simply be moved into OCI."
          ],
          "rules": [
            "Comprehensive income = net income + OCI.",
            "Apply the stated facts and relevant rules to identify OCI items.",
            "Distinguish foreign-currency transaction results from foreign-operation translation."
          ],
          "example": {
            "scenario": "Foreign-operation land is €1,000,000 locally; the dollar-per-euro rate changes from $1.22 to $1.09.",
            "steps": [
              "The translated amount falls from $1,220,000 to $1,090,000.",
              "Under this example’s translation rule, the −$130,000 difference enters OCI.",
              "If net income is $200,000 and there is no other OCI, comprehensive income is $70,000."
            ],
            "conclusion": "This translation does not change net income but reduces comprehensive income and equity."
          },
          "pitfalls": [
            "Do not classify every unrealised gain or loss as OCI."
          ],
          "questions": [
            {
              "id": "l7-oci-q1",
              "explanations": [
                "This ignores OCI.",
                "Correct: 200 − 30 = 170.",
                "This is only the OCI amount.",
                "Subtract the loss."
              ],
              "hint": "Add the loss as a negative amount."
            },
            {
              "id": "l7-oci-q2",
              "explanations": [
                "Correct: applicable rules specify qualifying items.",
                "OCI is not a cash-payment classification.",
                "Classification is not discretionary.",
                "Transactions and translation differ."
              ],
              "hint": "What determines the boundary of OCI?"
            }
          ]
        }
      },
      {
        "id": "l7-aoci",
        "title": "AOCI与完整权益结构",
        "en": "AOCI and the Expanded Equity Structure",
        "pages": [
          66,
          69,
          71,
          75,
          76
        ],
        "summary": "OCI是本期流量，AOCI是累计权益余额；两者通过权益变动联系。",
        "explanation": [
          "累计其他综合收益（Accumulated other comprehensive income, AOCI）是资产负债表权益中的累计项目。OCI描述本期变化，AOCI描述累积到报表日的余额，关系类似净利润与留存收益，但两条累积线并不相同。",
          "无重分类或其他调整时，期末AOCI等于期初AOCI加本期OCI。若本期发生OCI损失，AOCI可能减少甚至成为负数，但不必同额减少留存收益。",
          "将AOCI引入后，权益结构不再只有投入资本和留存收益。学习恒等式时，应逐步从简化模型扩展为包含AOCI及其他实际权益项目的完整结构。"
        ],
        "rules": [
          "Ending AOCI = Beginning AOCI + OCI（无其他调整）。",
          "简化扩展：Assets = Liabilities + Contributed capital + Retained earnings + AOCI。",
          "不能把本期OCI与累计AOCI重复相加。"
        ],
        "example": {
          "scenario": "期初AOCI$10，本期OCI−$30，无其他调整；期末RE$100、投入资本$200。",
          "steps": [
            "期末AOCI=10−30=−$20。",
            "总权益=200+100−20=$280。"
          ],
          "conclusion": "OCI损失通过AOCI减少权益，RE在本例不因该项OCI变动。"
        },
        "pitfalls": [
          "OCI是本期发生额，AOCI是累计余额。",
          "AOCI不是负债。"
        ],
        "questions": [
          {
            "id": "l7-aoci-q1",
            "prompt": "AOCI is reported as a component of:",
            "zh": "AOCI列在哪一类项目中？",
            "options": [
              "Equity",
              "Cash flows",
              "Revenue",
              "Liabilities"
            ],
            "answer": 0,
            "explanations": [
              "正确：是权益组成部分。",
              "不是现金流分类。",
              "不是营业收入。",
              "不是待偿还义务。"
            ],
            "hint": "它是累计哪类收益的余额？",
            "errorType": "概念混淆"
          },
          {
            "id": "l7-aoci-q2",
            "prompt": "Opening AOCI is $10 and current OCI is −$30, with no other adjustments. Ending AOCI is:",
            "zh": "期初AOCI10，本期OCI−30，无其他调整，期末为？",
            "options": [
              "$20",
              "−$20",
              "−$30",
              "$40"
            ],
            "answer": 1,
            "explanations": [
              "不能忽略符号。",
              "正确：10−30=−20。",
              "漏掉了期初余额。",
              "损失应减。"
            ],
            "hint": "累计余额等于期初加本期。",
            "errorType": "计算"
          }
        ],
        "prerequisites": [
          "l7-oci",
          "l7-retained-earnings"
        ],
        "related": [],
        "lab": null,
        "english": {
          "summary": "OCI is a period flow; AOCI is an accumulated equity balance.",
          "explanation": [
            "Accumulated other comprehensive income, or AOCI, is an accumulated equity component on the balance sheet. OCI measures the current-period flow; AOCI measures the accumulated balance. This resembles, but is separate from, the link between net income and retained earnings.",
            "With no reclassifications or other adjustments, closing AOCI equals opening AOCI plus current OCI. An OCI loss may reduce AOCI below zero without an equal reduction in retained earnings.",
            "Once AOCI is included, equity is not limited to contributed capital and retained earnings. Expand the introductory accounting model to include AOCI and other actual equity components."
          ],
          "rules": [
            "Ending AOCI = beginning AOCI + OCI, with no other adjustments.",
            "Expanded simplified model: assets = liabilities + contributed capital + retained earnings + AOCI.",
            "Do not double-count current OCI and accumulated AOCI."
          ],
          "example": {
            "scenario": "Opening AOCI is $10 and current OCI is −$30, with no other adjustments. Closing RE is $100 and contributed capital $200.",
            "steps": [
              "Closing AOCI = 10 − 30 = −$20.",
              "Total equity = 200 + 100 − 20 = $280."
            ],
            "conclusion": "The OCI loss reduces equity through AOCI; RE does not change from this OCI item."
          },
          "pitfalls": [
            "OCI is a period amount; AOCI is an accumulated balance.",
            "AOCI is not a liability."
          ],
          "questions": [
            {
              "id": "l7-aoci-q1",
              "explanations": [
                "Correct: it is an equity component.",
                "It is not a cash-flow category.",
                "It is not sales revenue.",
                "It is not a repayment obligation."
              ],
              "hint": "Which kind of accumulated income balance is it?"
            },
            {
              "id": "l7-aoci-q2",
              "explanations": [
                "Preserve the sign.",
                "Correct: 10 − 30 = −20.",
                "This omits the opening balance.",
                "Subtract the loss."
              ],
              "hint": "Accumulate opening plus current-period change."
            }
          ]
        }
      }
    ]
  }
];
