export const lectures12 = [
  {
    "id": "l1",
    "number": 1,
    "title": "商业与财务报告",
    "en": "Business and Financial Reporting",
    "description": "从企业活动、资本市场与时间价值建立报告框架，认识准则、报表及其使用者。",
    "source": "Lecture 1 Introduction.pdf",
    "pages": 80,
    "nodes": [
      {
        "id": "l1-business-events",
        "title": "企业做什么，会计记录什么",
        "en": "Business events and activities",
        "pages": [
          18,
          19,
          20,
          58,
          59,
          60,
          61
        ],
        "prerequisites": [],
        "summary": "先理解真实业务，再理解会计数字。",
        "explanation": [
          "把企业想成一家刚开业的维修店：先确定服务谁，再筹钱、买设备、提供服务，最后向资金提供者说明经营情况。会计是把这些经济活动转成可理解信息的语言，而不是先有分录再去寻找业务。",
          "融资 Financing 解决钱从哪里来；投资 Investing 决定购入哪些长期资源；经营 Operating 是日常创造与交付产品或服务；报告 Reporting 把结果传递给外部。战略 Strategy 则决定企业走什么方向，影响上述各类活动。",
          "业务事件 Business events 不仅包括主动交易，也包括带来经济后果的结果。例如自然灾害损毁存货，虽然没有买卖，也可能影响报表。分析要同时看企业决策、行业、宏观环境和政府要求，不能把所有变化都归因于管理层。"
        ],
        "rules": [
          "判断活动先看目的，不先看现金是否增加。",
          "经济事件→识别与计量→财务报告→使用者决策。"
        ],
        "example": {
          "scenario": "自编例：维修店借款20,000元，买设备15,000元，随后提供维修服务。",
          "steps": [
            "借款为经营筹集资源，属于融资。",
            "购入使用多年的设备属于投资；日常维修收入属于经营。",
            "向银行提交报表属于报告。"
          ],
          "conclusion": "同样涉及钱，业务目的不同，分类就不同。"
        },
        "pitfalls": [
          "投资活动在这里指企业获取长期经营资源，不能只理解为买股票。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Which activity is primarily a financing activity?",
            "zh": "哪一项主要属于融资活动？",
            "options": [
              "Borrowing from a bank",
              "Repairing a customer’s car",
              "Buying equipment for long-term use",
              "Preparing an annual report"
            ],
            "answer": 0,
            "explanations": [
              "借款获取资金，是融资。",
              "提供维修是日常经营。",
              "获取长期设备是投资。",
              "编年报是报告活动。"
            ],
            "hint": "先问这笔活动是否在筹集资本。",
            "errorType": "概念混淆",
            "id": "l1-business-events-q1"
          },
          {
            "prompt": "Which event may have economic consequences without a voluntary purchase or sale?",
            "zh": "哪种事件没有自愿买卖，也可能产生经济后果？",
            "options": [
              "A customer visits the website without buying",
              "A flood destroys inventory",
              "A manager reads a newspaper",
              "An employee considers a holiday"
            ],
            "answer": 1,
            "explanations": [
              "单次浏览本身不等于发生可记录交易。",
              "洪灾使存货受损，会影响经济资源。",
              "单纯阅读没有这里所述的可辨认资源变化。",
              "个人考虑尚未形成企业经济后果。"
            ],
            "hint": "经济事件不只限于主动买卖。",
            "errorType": "概念混淆",
            "id": "l1-business-events-q2"
          }
        ],
        "english": {
          "summary": "Understand the real business before interpreting its accounting numbers.",
          "explanation": [
            "Imagine a newly opened repair shop. It first decides whom to serve, raises money, buys equipment and provides services, then explains the results to its fund providers. Accounting translates these economic activities into understandable information. The business comes before the journal entry, not the other way around.",
            "Financing asks where funding comes from. Investing determines which long-term resources to acquire. Operating covers the daily creation and delivery of products or services. Reporting communicates the results to outsiders. Strategy sets the direction of the business and influences all these activities.",
            "Business events include not only voluntary transactions but also outcomes with economic consequences. A flood damaging inventory can affect the financial statements even without a purchase or sale. Analysis therefore considers management decisions, industry conditions, the macroeconomy and government requirements rather than attributing every change to management."
          ],
          "rules": [
            "Classify an activity by its purpose, not merely by whether cash increases.",
            "Economic events → identification and measurement → financial reports → users’ decisions."
          ],
          "example": {
            "scenario": "Original learning example: a repair shop borrows 20,000, buys equipment for 15,000 and then provides repair services.",
            "steps": [
              "Borrowing obtains resources to fund the business, so it is financing.",
              "Buying equipment used for years is investing; daily repair services are operating.",
              "Sending financial statements to the bank is reporting."
            ],
            "conclusion": "Activities may all involve money but have different purposes."
          },
          "pitfalls": [
            "Investing here includes acquiring long-term operating resources; it does not mean only buying shares."
          ],
          "questions": [
            {
              "id": "l1-business-events-q1",
              "explanations": [
                "Borrowing obtains funding and is financing.",
                "Providing repair services is a daily operating activity.",
                "Acquiring long-term equipment is investing.",
                "Preparing an annual report is reporting."
              ],
              "hint": "Ask whether the activity obtains capital for the business."
            },
            {
              "id": "l1-business-events-q2",
              "explanations": [
                "A visit alone is not a recorded transaction.",
                "Flood damage reduces inventory resources and has economic consequences.",
                "Reading alone causes no identifiable resource change in this example.",
                "A personal consideration has not created a business consequence."
              ],
              "hint": "An economic event need not be a voluntary purchase or sale."
            }
          ]
        }
      },
      {
        "id": "l1-capital-markets",
        "title": "股票、债券与资金流向",
        "en": "Capital markets and share offerings",
        "pages": [
          21,
          23,
          30,
          31
        ],
        "prerequisites": [
          "l1-business-events"
        ],
        "summary": "区分公司融资和投资者之间的交易。",
        "explanation": [
          "实体企业需要资金，金融市场帮助资金提供者与企业连接。股权 Equity 代表所有者的剩余权益；债务 Debt 则通常带有约定的付款义务。股票投资者承担剩余风险，债权人主要关心能否按约收回本息。",
          "IPO 是公司首次向公众发行股票，FPO 是已上市公司后续发行股票。判断是否给公司带来新资金，要看卖的是公司新发行的股票，还是原股东持有的股票。课件所称 Secondary offering 指大股东等出售已有股票的情境。",
          "二级市场上股价上涨，买方付的钱通常给卖方，不会自动进入公司现金账户。但价格仍影响融资条件、市场评价和股东财富。市场能有效配置资金，需要可信的财务信息来比较风险和回报。"
        ],
        "rules": [
          "新发行股票筹资：公司收到发行所得。",
          "已有股票转让：交易款通常由买方支付给原持有人。"
        ],
        "example": {
          "scenario": "自编例：投资者甲以100元向乙买入某公司一股已有股票。",
          "steps": [
            "识别卖方是乙，而不是发行公司。",
            "甲付款给乙，公司没有发行新股。"
          ],
          "conclusion": "公司现金不因这次买卖增加。"
        },
        "pitfalls": [
          "股价上涨不等于企业收到等额现金。",
          "课件中的 Secondary offering 用法应结合是否为已有股票出售判断。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "An investor buys existing shares from another investor. Who normally receives the purchase price?",
            "zh": "投资者向另一投资者买入已有股票，通常谁收到价款？",
            "options": [
              "The selling investor",
              "The company automatically",
              "The company’s auditor",
              "The tax authority in full"
            ],
            "answer": 0,
            "explanations": [
              "卖出已有股票的投资者收到价款。",
              "公司没有因此发行新股。",
              "审计师不是出售股票的一方。",
              "税款可能另有规定，但不是全部成交价的收款方。"
            ],
            "hint": "识别谁是交易中的卖方。",
            "errorType": "概念混淆",
            "id": "l1-capital-markets-q1"
          },
          {
            "prompt": "What distinguishes an IPO from an FPO?",
            "zh": "IPO和FPO的区别是什么？",
            "options": [
              "An IPO guarantees future profits",
              "An IPO is the first public issue; an FPO is a subsequent public issue by a listed firm",
              "An IPO is always debt financing",
              "An FPO never raises funds for the issuer"
            ],
            "answer": 1,
            "explanations": [
              "发行股票不能保证未来盈利。",
              "首次与上市后后续发行是关键区别。",
              "IPO发行的是股票，不是债券。",
              "后续新股发行可以为公司筹资。"
            ],
            "hint": "关注 first 和 subsequent。",
            "errorType": "英文理解",
            "id": "l1-capital-markets-q2"
          }
        ],
        "english": {
          "summary": "Distinguish company financing from trades between investors.",
          "explanation": [
            "Operating businesses need funding, and financial markets connect them with fund providers. Equity represents an owner’s residual interest. Debt normally carries contractual payment obligations. Shareholders bear residual risk, while creditors focus primarily on collecting principal and interest as agreed.",
            "An IPO is a company’s first public share issue; an FPO is a subsequent public issue by an already listed company. To determine whether the company receives new funds, ask whether it issues new shares or an existing shareholder sells shares already held. In the lecture, a secondary offering refers to a sale of existing shares by large shareholders or other investors.",
            "When a share price rises in secondary-market trading, the buyer normally pays the seller, not the company. The company’s cash does not automatically increase. Prices nevertheless affect financing conditions, market assessments and shareholder wealth. Efficient resource allocation requires trustworthy financial information to compare risk and return."
          ],
          "rules": [
            "New shares issued for funding: the company receives the issue proceeds.",
            "Existing shares transferred: the buyer normally pays the previous holder."
          ],
          "example": {
            "scenario": "Original learning example: investor A buys one existing company share from investor B for 100.",
            "steps": [
              "Identify B, rather than the company, as the seller.",
              "A pays B; the company has not issued a new share."
            ],
            "conclusion": "The company’s cash does not increase because of this trade."
          },
          "pitfalls": [
            "A higher share price does not mean the company receives an equal amount of cash.",
            "Interpret the lecture’s use of secondary offering by checking whether existing shares are being sold."
          ],
          "questions": [
            {
              "id": "l1-capital-markets-q1",
              "explanations": [
                "The investor selling existing shares receives the price.",
                "The company has not issued new shares in this trade.",
                "The auditor is not the seller.",
                "Taxes may apply separately, but the authority does not receive the entire purchase price."
              ],
              "hint": "Identify the seller in the transaction."
            },
            {
              "id": "l1-capital-markets-q2",
              "explanations": [
                "Issuing shares cannot guarantee future profit.",
                "The distinction is first public issue versus a subsequent issue after listing.",
                "An IPO issues equity, not bonds.",
                "A subsequent new-share issue can raise funds for the company."
              ],
              "hint": "Focus on first versus subsequent public issues."
            }
          ]
        }
      },
      {
        "id": "l1-time-value",
        "title": "今天的钱与未来的钱",
        "en": "Present value and future value",
        "pages": [
          32,
          33,
          34,
          35
        ],
        "prerequisites": [
          "l1-capital-markets"
        ],
        "summary": "使用同一时间基准比较不同日期的现金。",
        "explanation": [
          "今天收到100元与一年后收到100元不完全相同。今天的钱可以先投资；等待还可能带来风险。货币时间价值把不同时间的现金转换到同一时点，才能比较。",
          "复利 Compounding 从现在推向未来：本金和之前产生的利息一起继续计息。贴现 Discounting 从未来折回今天：为了在未来达到目标金额，今天需要投入多少。它们是同一个关系的两个方向。",
          "利率和期数必须对应。月现金流不能直接使用年利率当作每月利率。其他条件相同，贴现率越高，未来同一笔现金的现值越低；课件把更高风险与更高要求回报联系起来。"
        ],
        "rules": [
          "FV = PV × (1 + r)^n。",
          "PV = FV ÷ (1 + r)^n。",
          "r是每期利率，n是相同长度的期数。"
        ],
        "example": {
          "scenario": "自编例：现在投入1,000元，每年复利10%，两年后取出。",
          "steps": [
            "第一年末为1,000×1.10=1,100。",
            "第二年末为1,100×1.10=1,210。",
            "反向检查：1,210÷1.10²=1,000。"
          ],
          "conclusion": "两年利息共210元，其中10元来自利息再生利息。"
        },
        "pitfalls": [
          "两年10%复利不是简单加20%。",
          "利率、现金流和期数必须采用一致期间。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "What is the future value of $1,000 after two years at 10% annual compound interest?",
            "zh": "1,000美元按年复利10%投资两年，终值是多少？",
            "options": [
              "$826.45",
              "$1,210",
              "$1,200",
              "$1,100"
            ],
            "answer": 1,
            "explanations": [
              "826.45是把1,000贴现两年的结果。",
              "1,000×1.1²=1,210。",
              "1,200使用了单利。",
              "1,100只计算一年。"
            ],
            "hint": "第二年也要对第一年利息计息。",
            "errorType": "计算",
            "id": "l1-time-value-q1"
          },
          {
            "prompt": "Holding future cash flow and timing constant, a higher discount rate causes present value to:",
            "zh": "未来现金金额和时间不变，提高贴现率会使现值：",
            "options": [
              "Decrease",
              "Increase",
              "Remain unchanged",
              "Become equal to face value"
            ],
            "answer": 0,
            "explanations": [
              "分母增大，所以现值降低。",
              "这是复利终值的方向，不是现值。",
              "贴现率直接影响现值。",
              "面值是合同金额概念，不由此保证。"
            ],
            "hint": "看PV公式的分母。",
            "errorType": "概念混淆",
            "id": "l1-time-value-q2"
          }
        ],
        "english": {
          "summary": "Compare cash amounts at different dates by placing them on the same time basis.",
          "explanation": [
            "Receiving 100 today is not equivalent to receiving 100 a year later. Money received today can be invested, while waiting may involve risk. The time value of money converts cash at different dates to a common date so that it can be compared.",
            "Compounding moves a present amount into the future: both the original principal and previously earned interest earn further interest. Discounting moves a future amount back to today: how much must be invested now to reach that future amount? These are opposite directions of the same relationship.",
            "The rate and the number of periods must match. An annual rate cannot simply be used as a monthly rate for monthly cash flows. All else equal, a higher discount rate lowers the present value of a given future cash flow. The lecture links higher uncertainty with a higher required return."
          ],
          "rules": [
            "FV = PV × (1 + r)^n.",
            "PV = FV ÷ (1 + r)^n.",
            "r is the rate per period, and n counts periods of the same length."
          ],
          "example": {
            "scenario": "Original learning example: invest 1,000 today at 10% annual compound interest for two years.",
            "steps": [
              "At the end of year one: 1,000 × 1.10 = 1,100.",
              "At the end of year two: 1,100 × 1.10 = 1,210.",
              "Reverse check: 1,210 ÷ 1.10² = 1,000."
            ],
            "conclusion": "Total interest is 210; 10 of that comes from interest earning interest."
          },
          "pitfalls": [
            "Two years at 10% compound interest is not merely a 20% addition.",
            "Use consistent periods for the rate, cash flows and number of periods."
          ],
          "questions": [
            {
              "id": "l1-time-value-q1",
              "explanations": [
                "826.45 discounts 1,000 back two years.",
                "1,000 × 1.1² = 1,210.",
                "1,200 uses simple interest.",
                "1,100 covers only one year."
              ],
              "hint": "In year two, interest is also earned on year-one interest."
            },
            {
              "id": "l1-time-value-q2",
              "explanations": [
                "A larger denominator lowers present value.",
                "That is the direction for a compounded future value, not present value.",
                "The discount rate directly affects present value.",
                "Face value is a contractual amount; equality is not established here."
              ],
              "hint": "Look at the denominator of the PV formula."
            }
          ]
        }
      },
      {
        "id": "l1-equity-valuation",
        "title": "从未来股利理解股票价值",
        "en": "Dividend discount model",
        "pages": [
          36,
          37,
          38
        ],
        "prerequisites": [
          "l1-time-value"
        ],
        "summary": "估值把未来预期现金收益折回今天。",
        "explanation": [
          "股票价格是市场成交结果，内在价值 Intrinsic value 则是根据假设估计的经济价值。股利贴现思路认为，持有股票能带来的未来现金股利值得多少，取决于金额、时间和风险。",
          "课件介绍固定增长模型：假设股利永续以g增长，股权要求回报率为Re，价值P0=D1/(Re−g)。D1是下一期股利，不是刚支付的D0。模型必须满足g小于Re，否则这个永续增长表达式不成立。",
          "在模型条件不变时，提高可持续的未来股利或降低要求回报，会提高估值。但公式不是企业真实价值的保证。市盈率 P/E 把股价与每股收益联系起来，受增长、风险和分红等因素影响，不能只比较一个倍数就下结论。"
        ],
        "rules": [
          "P0 = D1 ÷ (Re − g)，适用条件为稳定永续增长且g < Re。",
          "D1 = D0 × (1 + g)。",
          "补充定义：P/E = 每股价格 ÷ 每股收益；负收益时解释受到限制。"
        ],
        "example": {
          "scenario": "自编例：预计下一年股利为3元，Re=10%，长期g=4%。",
          "steps": [
            "确认3元是D1。",
            "回报与增长差为0.10−0.04=0.06。",
            "价值=3÷0.06=50元。"
          ],
          "conclusion": "在给定假设下估值50元，假设变化会改变结果。"
        },
        "pitfalls": [
          "不能把增长率设得任意高来制造高估值。",
          "D0和D1不能混用。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Expected next-year dividend is $3, required return is 10%, and constant growth is 4%. What is the model value?",
            "zh": "下一年股利3美元，要求回报10%，固定增长4%，模型估值是多少？",
            "options": [
              "$3.12",
              "$50",
              "$30",
              "$75"
            ],
            "answer": 1,
            "explanations": [
              "3.12是把3增长4%，不是估值。",
              "3/(0.10−0.04)=50。",
              "30忽略了增长率。",
              "75错误使用4%作分母。"
            ],
            "hint": "分母是回报率与增长率之差。",
            "errorType": "计算",
            "id": "l1-equity-valuation-q1"
          },
          {
            "prompt": "Which condition is required for the constant-growth dividend formula used here?",
            "zh": "这里的固定增长股利公式需要满足什么条件？",
            "options": [
              "Growth is below the required return",
              "Growth equals the required return",
              "Dividends are guaranteed by the auditor",
              "Share price always equals book value"
            ],
            "answer": 0,
            "explanations": [
              "g<Re使该永续增长模型成立。",
              "相等会使分母为零。",
              "审计师不保证未来股利。",
              "账面价值与股价不是同一个概念。"
            ],
            "hint": "想一想公式的分母及永续假设。",
            "errorType": "概念混淆",
            "id": "l1-equity-valuation-q2"
          }
        ],
        "english": {
          "summary": "Valuation discounts expected future cash benefits to today.",
          "explanation": [
            "A share price is an observed market transaction price. Intrinsic value is an estimate of economic worth based on assumptions. Dividend discounting asks what the future cash dividends from owning a share are worth today, considering their amounts, timing and risk.",
            "The lecture introduces the constant-growth model: if dividends grow forever at g and the required equity return is Re, P0 = D1 / (Re − g). D1 is next period’s dividend, not the dividend D0 just paid. The model requires g < Re; otherwise this perpetual-growth expression is not valid.",
            "Within the model, higher sustainable future dividends or a lower required return increase estimated value, holding other assumptions constant. The formula does not guarantee a company’s true value. The P/E ratio relates share price to earnings per share and depends on growth, risk and payout, among other factors. One multiple alone is not enough for a conclusion."
          ],
          "rules": [
            "P0 = D1 ÷ (Re − g), assuming stable perpetual growth and g < Re.",
            "D1 = D0 × (1 + g).",
            "Supplementary definition: P/E = price per share ÷ earnings per share; interpretation is limited when earnings are negative."
          ],
          "example": {
            "scenario": "Original learning example: next year’s expected dividend is 3, Re is 10%, and long-term g is 4%.",
            "steps": [
              "Check that 3 is D1.",
              "The return-growth spread is 0.10 − 0.04 = 0.06.",
              "Value = 3 ÷ 0.06 = 50."
            ],
            "conclusion": "The estimated value is 50 under these assumptions; different assumptions change the result."
          },
          "pitfalls": [
            "Do not choose an arbitrarily high growth rate to manufacture a high valuation.",
            "Do not confuse D0 with D1."
          ],
          "questions": [
            {
              "id": "l1-equity-valuation-q1",
              "explanations": [
                "3.12 grows 3 by 4%; it is not the valuation.",
                "3 / (0.10 − 0.04) = 50.",
                "30 ignores growth.",
                "75 incorrectly uses 4% alone as the denominator."
              ],
              "hint": "The denominator is the required return minus growth."
            },
            {
              "id": "l1-equity-valuation-q2",
              "explanations": [
                "g < Re makes this perpetual-growth model valid.",
                "Equality would make the denominator zero.",
                "An auditor does not guarantee future dividends.",
                "Book value and market price are different concepts."
              ],
              "hint": "Consider the denominator and the perpetual-growth assumption."
            }
          ]
        }
      },
      {
        "id": "l1-bond-pricing",
        "title": "债券为什么有溢价与折价",
        "en": "Bond cash flows and pricing",
        "pages": [
          39,
          40
        ],
        "prerequisites": [
          "l1-time-value"
        ],
        "summary": "债券价格是票息与本金的现值之和。",
        "explanation": [
          "债券合同先确定面值 Face value、票息 Coupon 和到期日 Maturity。票息按约定票面利率计算，到期通常还要归还面值。买入债券的人面对的是一串不同时间的现金流。",
          "市场要求的有效利率 Effective rate 或贴现率决定这串现金流今天值多少。定价时，每笔票息与到期本金都要折现，再相加；最后一期同时有票息和本金，不能漏掉其中一项。",
          "同期间口径下，票面利率等于市场利率时，价格等于面值；票面利率高于市场利率时，较优票息带来溢价；低于时则折价。课件半年度例子的5%按每半年理解，不能擅自再当作年利率使用。"
        ],
        "rules": [
          "价格 = 各期票息现值之和 + 到期本金现值。",
          "票息率 > 市场每期利率：溢价；相等：平价；小于：折价。"
        ],
        "example": {
          "scenario": "自编例：一年后到期、面值1,000元、到期票息50元的债券，市场一年要求回报5%。",
          "steps": [
            "一年后合计收到1,050元。",
            "用市场利率贴现：1,050÷1.05。"
          ],
          "conclusion": "价格为1,000元；若市场利率升到10%，价格降到954.55元。"
        },
        "pitfalls": [
          "票面利率决定合同票息，市场利率决定贴现，两者作用不同。",
          "必须匹配每期利率与付款频率。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "A bond pays a 6% annual coupon while the market requires 4% annually. It normally sells:",
            "zh": "年票息率6%，市场年要求回报4%的债券通常：",
            "options": [
              "Above par",
              "At par",
              "Below par",
              "For zero"
            ],
            "answer": 0,
            "explanations": [
              "合同票息高于市场要求，因此溢价。",
              "只有其他条件适当且两种利率相等时才平价。",
              "票息低于市场要求时通常折价。",
              "仍有票息与本金现金流，不能推断价值为零。"
            ],
            "hint": "比较票息与市场要求回报。",
            "errorType": "概念混淆",
            "id": "l1-bond-pricing-q1"
          },
          {
            "prompt": "A one-year bond will pay $1,050 at maturity. At a 5% discount rate, its price is:",
            "zh": "一年后共支付1,050美元的债券，贴现率5%，价格是多少？",
            "options": [
              "$50",
              "$1,000",
              "$1,050",
              "$1,102.50"
            ],
            "answer": 1,
            "explanations": [
              "50只相当于票息，忽略本金。",
              "1,050/1.05=1,000。",
              "1,050是未来现金，没有贴现。",
              "1,102.50反而复利向未来推了。"
            ],
            "hint": "将最后的全部现金流折回今天。",
            "errorType": "计算",
            "id": "l1-bond-pricing-q2"
          }
        ],
        "english": {
          "summary": "A bond’s price is the sum of the present values of coupons and principal.",
          "explanation": [
            "A bond contract specifies face value, coupon payments and maturity. Coupons are calculated using the contractual coupon rate, and face value is normally repaid at maturity. A bondholder therefore receives a sequence of cash flows at different dates.",
            "The market’s effective rate, or discount rate, determines what those cash flows are worth today. Discount every coupon and the maturity principal, then add them together. The final payment normally includes both the final coupon and principal; neither may be omitted.",
            "Using consistent period definitions, a coupon rate equal to the market rate produces a price at par. A higher coupon rate produces a premium because the coupon is more attractive; a lower coupon rate produces a discount. The lecture’s semiannual example uses 5% per half-year. Do not silently treat that as an annual rate."
          ],
          "rules": [
            "Price = present value of all coupons + present value of maturity principal.",
            "Coupon rate > market rate per period: premium; equal: par; lower: discount."
          ],
          "example": {
            "scenario": "Original learning example: a one-year bond has face value 1,000 and pays a 50 coupon at maturity; the market requires 5% for the year.",
            "steps": [
              "Total cash received in one year is 1,050.",
              "Discount at the market rate: 1,050 ÷ 1.05."
            ],
            "conclusion": "The price is 1,000. If the market rate rises to 10%, the price falls to 954.55."
          },
          "pitfalls": [
            "The coupon rate sets contractual coupons; the market rate discounts them. These are different roles.",
            "Match the rate per period to payment frequency."
          ],
          "questions": [
            {
              "id": "l1-bond-pricing-q1",
              "explanations": [
                "Contractual coupons exceed the market requirement, producing a premium.",
                "A price at par generally requires equal rates and appropriate other conditions.",
                "A below-market coupon normally produces a discount.",
                "Coupons and principal still have value; a zero price does not follow."
              ],
              "hint": "Compare the coupon with the market’s required return."
            },
            {
              "id": "l1-bond-pricing-q2",
              "explanations": [
                "50 counts only the coupon and omits principal.",
                "1,050 / 1.05 = 1,000.",
                "1,050 is the undiscounted future receipt.",
                "1,102.50 compounds forward instead of discounting."
              ],
              "hint": "Discount the entire final cash payment to today."
            }
          ]
        }
      },
      {
        "id": "l1-accounting-types",
        "title": "财务、管理与税务会计",
        "en": "Financial, managerial and tax accounting",
        "pages": [
          41,
          42,
          43,
          44,
          45,
          46,
          47
        ],
        "prerequisites": [
          "l1-business-events"
        ],
        "summary": "同一家企业因信息用途不同，可以有不同利润口径。",
        "explanation": [
          "财务会计 Financial accounting 主要向投资者、债权人等外部使用者提供通用报告，需要遵循适用会计准则。管理会计 Managerial accounting 帮助内部经营决策，格式可以围绕决策需求组织。税务会计 Tax accounting 则按税法确定应税项目和纳税。",
          "同样分析营业利润，财务报告常按销售成本与销售管理费用呈现，内部管理分析则可能按变动成本与固定成本区分。后者便于分析多卖一件产品能增加多少贡献，两者服务的问题不同。",
          "会计税前利润不必等于应纳税所得额 Taxable income。例如某项费用在财务上已经发生，但税法不允许扣除；某些税收优惠可能给予额外扣除。具体税务处理取决于税法与期间，不能直接把会计费用全部当成税前可扣除项目。"
        ],
        "rules": [
          "财务：适用会计准则；管理：内部决策需求；税务：适用税法。",
          "补充练习口径：应纳税所得额 = 会计利润 + 不可扣除费用 − 额外税务扣除，假设无其他差异。"
        ],
        "example": {
          "scenario": "自编例：税前会计利润100万元，包含不得税前扣除的罚款费用2万元，无其他税会差异。",
          "steps": [
            "会计利润已经减掉罚款。",
            "税务不允许这项扣除，需要加回2万元。"
          ],
          "conclusion": "应纳税所得额为102万元，不代表会计利润也改成102万元。"
        },
        "pitfalls": [
          "财务利润与应税利润不同，不一定意味着报错。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Which system is primarily designed for internal managers’ decisions?",
            "zh": "哪一种会计系统主要服务内部管理决策？",
            "options": [
              "An independent audit opinion",
              "Managerial accounting",
              "Tax accounting",
              "External financial reporting only"
            ],
            "answer": 1,
            "explanations": [
              "审计意见不是管理会计系统。",
              "管理会计围绕内部决策组织信息。",
              "税务会计服务税法下的申报与计税。",
              "财务报告主要面向外部通用需求。"
            ],
            "hint": "看使用者是内部还是外部。",
            "errorType": "概念混淆",
            "id": "l1-accounting-types-q1"
          },
          {
            "prompt": "Accounting profit is $100,000 and includes a $2,000 expense that is not tax-deductible. With no other differences, taxable income is:",
            "zh": "会计利润100,000美元，已扣除一项税法不允许扣除的2,000美元费用，无其他差异，应税所得是多少？",
            "options": [
              "$102,000",
              "$98,000",
              "$100,000",
              "$2,000"
            ],
            "answer": 0,
            "explanations": [
              "不可扣除费用应加回：100,000+2,000。",
              "再次减掉会把不允许扣除的费用多扣一次。",
              "存在该差异，不能直接使用会计利润。",
              "2,000是调整额，不是全部应税所得。"
            ],
            "hint": "先确认费用是否已在会计利润中扣除。",
            "errorType": "计算",
            "id": "l1-accounting-types-q2"
          }
        ],
        "english": {
          "summary": "One business may have different profit measures because information serves different purposes.",
          "explanation": [
            "Financial accounting provides general-purpose reports mainly to external users such as investors and creditors, following applicable accounting standards. Managerial accounting supports internal operating decisions, so its format can be tailored to the decision. Tax accounting applies tax law to determine taxable amounts and taxes.",
            "For operating profit, financial reporting often separates cost of sales from selling and administrative expenses. Internal analysis may instead separate variable and fixed costs. The latter helps assess the additional contribution from selling one more unit. The two presentations answer different questions.",
            "Accounting profit before tax need not equal taxable income. An expense may have occurred for financial accounting but be disallowed as a tax deduction. Tax incentives may allow extra deductions. Specific treatments depend on the relevant tax law and period; not every accounting expense is automatically tax-deductible."
          ],
          "rules": [
            "Financial: applicable accounting standards; managerial: internal decisions; tax: applicable tax law.",
            "Supplementary exercise assumption: taxable income = accounting profit + nondeductible expenses − additional tax deductions, with no other differences."
          ],
          "example": {
            "scenario": "Original learning example: accounting profit before tax is 1,000,000 and includes a nondeductible fine expense of 20,000, with no other tax-accounting differences.",
            "steps": [
              "Accounting profit has already deducted the fine.",
              "Tax does not allow that deduction, so add back 20,000."
            ],
            "conclusion": "Taxable income is 1,020,000; this does not change accounting profit to 1,020,000."
          },
          "pitfalls": [
            "Different accounting and taxable profits do not automatically indicate an error."
          ],
          "questions": [
            {
              "id": "l1-accounting-types-q1",
              "explanations": [
                "An audit opinion is not a managerial accounting system.",
                "Managerial accounting organizes information for internal decisions.",
                "Tax accounting supports taxation and filing under tax law.",
                "Financial reporting primarily addresses external general-purpose needs."
              ],
              "hint": "Check whether the intended users are internal or external."
            },
            {
              "id": "l1-accounting-types-q2",
              "explanations": [
                "Add back the nondeductible expense: 100,000 + 2,000.",
                "Subtracting it again gives an extra deduction for an item that is not deductible.",
                "This tax difference prevents using accounting profit without adjustment.",
                "2,000 is the adjustment, not total taxable income."
              ],
              "hint": "First establish whether the expense has already reduced accounting profit."
            }
          ]
        }
      },
      {
        "id": "l1-gaap",
        "title": "会计准则解决哪四个问题",
        "en": "GAAP: recognition, measurement, presentation and disclosure",
        "pages": [
          48,
          49,
          50,
          51,
          52,
          53,
          54,
          55
        ],
        "prerequisites": [
          "l1-accounting-types"
        ],
        "summary": "准则不仅规定分录，也规定金额、报表位置和解释。",
        "explanation": [
          "如果每家公司随意定义利润，投资者就很难比较。GAAP 是公认会计原则的统称，目的是使报告更相关、可信和可比较。课件列举中国会计准则、US GAAP与IFRS，不同体系并非每项处理都完全一致。",
          "确认 Recognition 先问要不要入账、什么时候入账、进哪个账户；计量 Measurement/Valuation 决定记多少；列报 Presentation 决定放到报表什么位置；披露 Disclosure 则解释数字背后的政策、估计和风险。四类问题相关，但不能互相替代。",
          "例如一项复杂融资工具被认定为负债还是权益，可能改变后续损益表现。课件用准则口径差异说明同一企业的利润可能差异很大。比较时应查看准则、政策及调整解释，而不是只看最终利润数字。"
        ],
        "rules": [
          "确认：是否、何时、哪个账户；计量：多少；列报：哪里；披露：说明什么。",
          "补充提醒：非准则调整指标必须了解计算口径，不能自动视为更真实。"
        ],
        "example": {
          "scenario": "自编例：公司已经确认一项借款，现讨论应列为流动还是非流动负债。",
          "steps": [
            "是否存在借款属于确认层面。",
            "已确认后，流动或非流动位置属于列报层面。",
            "利率与担保等说明可能属于附注披露。"
          ],
          "conclusion": "同一个借款可同时涉及四类准则问题。"
        },
        "pitfalls": [
          "把附注披露了等同于已经入账，是混淆披露与确认。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Deciding when to record revenue is primarily a question of:",
            "zh": "决定何时记录收入主要属于：",
            "options": [
              "Market valuation of the company",
              "Recognition",
              "Presentation",
              "Page numbering"
            ],
            "answer": 1,
            "explanations": [
              "企业市场估值与收入确认不同。",
              "确认讨论是否以及何时记录。",
              "列报讨论已经记录的信息放哪里。",
              "页码不是准则的确认问题。"
            ],
            "hint": "when to record 是关键。",
            "errorType": "英文理解",
            "id": "l1-gaap-q1"
          },
          {
            "prompt": "Explaining an accounting policy in the notes is primarily:",
            "zh": "在附注说明会计政策主要属于：",
            "options": [
              "Disclosure",
              "Cash collection",
              "Closing the bank account",
              "Issuing shares"
            ],
            "answer": 0,
            "explanations": [
              "附注补充解释属于披露。",
              "收款是业务交易。",
              "关闭银行账户不是附注解释。",
              "发行股票是融资交易。"
            ],
            "hint": "附注承担什么功能？",
            "errorType": "概念混淆",
            "id": "l1-gaap-q2"
          }
        ],
        "english": {
          "summary": "Standards govern not only entries but amounts, statement locations and explanations.",
          "explanation": [
            "If every company defined profit however it wished, comparison would be difficult. GAAP is a general term for generally accepted accounting principles, intended to make reporting relevant, trustworthy and comparable. The lecture lists Chinese Accounting Standards, US GAAP and IFRS; their treatments are not identical in every area.",
            "Recognition asks whether to record something, when to record it and in which account. Measurement or valuation determines the amount. Presentation determines where and how it appears in the statements. Disclosure explains policies, estimates and risks behind the numbers. These questions are connected but not interchangeable.",
            "For example, classifying a complex financing instrument as debt or equity may change subsequent reported profit. The lecture uses differences between reporting bases to show why a company’s profit figures can differ greatly. Comparisons require examining the standards, policies and reconciliations rather than only the final profit number."
          ],
          "rules": [
            "Recognition: whether, when and which account; measurement: how much; presentation: where; disclosure: what explanation.",
            "Supplementary reminder: understand how a non-GAAP adjusted measure is calculated; it is not automatically more truthful."
          ],
          "example": {
            "scenario": "Original learning example: a borrowing has already been recognized; the company now considers classifying it as current or noncurrent.",
            "steps": [
              "Whether a borrowing exists is a recognition issue.",
              "Its current or noncurrent location after recognition is a presentation issue.",
              "Explanations of interest rates and collateral may be disclosures in the notes."
            ],
            "conclusion": "A single borrowing can raise all four types of accounting question."
          },
          "pitfalls": [
            "Disclosure in the notes is not the same as recognition in the accounts."
          ],
          "questions": [
            {
              "id": "l1-gaap-q1",
              "explanations": [
                "Market valuation of the entity is different from revenue recognition.",
                "Recognition addresses whether and when to record an item.",
                "Presentation concerns where recorded information appears.",
                "Page numbering is not a recognition issue."
              ],
              "hint": "The phrase when to record identifies the issue."
            },
            {
              "id": "l1-gaap-q2",
              "explanations": [
                "Explanatory information in notes is disclosure.",
                "Collection is a business transaction.",
                "Closing a bank account is not explaining a policy in notes.",
                "Issuing shares is a financing transaction."
              ],
              "hint": "What function do the notes serve?"
            }
          ]
        }
      },
      {
        "id": "l1-reporting-framework",
        "title": "从业务到决策的报告链条",
        "en": "Financial reporting framework",
        "pages": [
          57,
          58,
          59,
          60,
          61
        ],
        "prerequisites": [
          "l1-business-events",
          "l1-gaap"
        ],
        "summary": "先还原业务，再理解数字如何形成和被使用。",
        "explanation": [
          "财务报告有两个主要阶段。第一阶段，编制者把业务事件按准则转换为记录和报告；第二阶段，使用者分析报告，再作投资、放贷等决定。这条链能帮助你定位自己现在不懂的是业务、记账还是分析。",
          "编制时要先分析交易，再使用账户体系、分录和分类账积累信息，最后形成财务报表及附注。准则中的确认与计量影响记录，列报与披露影响最终展示。",
          "分析者还要结合行业竞争、宏观环境、管理层选择及其他信息来源。报表是重要证据，但不会自动给出买卖结论。分析可以从共同百分比报表和比率入手，之后再解释变化的业务原因。"
        ],
        "rules": [
          "编制链：事件→交易分析→分录与分类账→报表和附注。",
          "使用链：报告→结合环境分析→决策。"
        ],
        "example": {
          "scenario": "自编例：餐厅销售收入增长，但现金流没有同步增长。",
          "steps": [
            "先查销售是现金销售还是赊销。",
            "再查应收账款和收款变化。",
            "结合客户付款条件与经营环境解释。"
          ],
          "conclusion": "不能从收入增长一个数字直接推断现金充足。"
        },
        "pitfalls": [
          "报表数字需要解释，不能把指标变化自动等同于管理好坏。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Which sequence best describes report preparation?",
            "zh": "哪一顺序最符合报告编制过程？",
            "options": [
              "Ratio analysis → automatic cash receipt",
              "Business events → transaction analysis → accounting records → financial statements",
              "Financial statements → business events → cash creation",
              "Share price → guaranteed revenue → audit"
            ],
            "answer": 1,
            "explanations": [
              "比率分析不产生收款。",
              "先有业务，再分析记录并形成报告。",
              "报告不创造先前的业务与现金。",
              "股价不保证收入。"
            ],
            "hint": "从现实活动开始排序。",
            "errorType": "概念混淆",
            "id": "l1-reporting-framework-q1"
          },
          {
            "prompt": "Why should financial statement analysis consider industry conditions?",
            "zh": "为什么分析报表要考虑行业情况？",
            "options": [
              "Similar numbers may have different economic explanations",
              "Accounting numbers never matter",
              "Industry analysis replaces all accounting records",
              "Every firm in an industry has identical risk"
            ],
            "answer": 0,
            "explanations": [
              "竞争与行业环境会影响数字含义。",
              "会计数字仍是重要证据。",
              "环境分析不能代替记录。",
              "同行企业风险也可能不同。"
            ],
            "hint": "把数字放回它产生的商业环境。",
            "errorType": "概念混淆",
            "id": "l1-reporting-framework-q2"
          }
        ],
        "english": {
          "summary": "Reconstruct the business first, then understand how numbers are produced and used.",
          "explanation": [
            "Financial reporting has two broad stages. First, preparers translate business events into records and reports using accounting standards. Second, users analyze those reports and make decisions such as investing or lending. This chain helps identify whether your difficulty concerns the business, bookkeeping or analysis.",
            "Preparation starts with transaction analysis, then uses the chart of accounts, journal entries and ledgers to accumulate information before producing statements and notes. Recognition and measurement influence the records; presentation and disclosure influence the final report.",
            "Analysts also consider industry competition, macroeconomic conditions, management choices and other information sources. Statements are important evidence but do not automatically produce a buy-or-sell decision. Analysis may begin with common-size statements and ratios, followed by an explanation of the business causes of change."
          ],
          "rules": [
            "Preparation: events → transaction analysis → journal and ledger → statements and notes.",
            "Use: reports → analysis in context → decisions."
          ],
          "example": {
            "scenario": "Original learning example: a restaurant’s revenue grows, but cash flow does not grow with it.",
            "steps": [
              "Check whether sales are cash sales or credit sales.",
              "Examine changes in receivables and collections.",
              "Interpret the findings using customer payment terms and operating conditions."
            ],
            "conclusion": "Revenue growth alone does not establish that cash is sufficient."
          },
          "pitfalls": [
            "Changes in ratios require explanation; they do not automatically prove good or bad management."
          ],
          "questions": [
            {
              "id": "l1-reporting-framework-q1",
              "explanations": [
                "Ratio analysis does not itself generate a cash receipt.",
                "Business events come first, followed by analysis, recording and reporting.",
                "Reports do not create the preceding business events or cash.",
                "A share price does not guarantee revenue."
              ],
              "hint": "Put real business activity first in the sequence."
            },
            {
              "id": "l1-reporting-framework-q2",
              "explanations": [
                "Competition and industry conditions affect the meaning of figures.",
                "Accounting numbers remain important evidence.",
                "Contextual analysis cannot replace the accounting records.",
                "Companies in the same industry may still have different risks."
              ],
              "hint": "Place the numbers back into the business environment that produced them."
            }
          ]
        }
      },
      {
        "id": "l1-annual-audit",
        "title": "年报、管理层与独立审计",
        "en": "Annual report and independent audit",
        "pages": [
          62,
          63,
          64,
          65,
          66
        ],
        "prerequisites": [
          "l1-reporting-framework"
        ],
        "summary": "管理层负责报告，独立审计提供审计意见。",
        "explanation": [
          "年报 Annual report 是管理层每年向外部提供的综合说明，包括业务讨论、财务报表及附注。只看利润表会遗漏企业做什么、采用什么政策，以及关键估计与风险。",
          "企业内部会计人员在管理层领导下编制财务报表。课件强调，财务报告完整性与客观性的主要责任在最高管理层，特别是CEO与CFO。聘请审计师不会把这项责任转交出去。",
          "独立审计师 Independent auditor 检查报表是否按适用规则编制，并出具意见。独立性很重要，否则核查者可能受编制者影响。补充理解：审计提供合理保证而非绝对保证，也不是对未来盈利或投资回报的承诺。"
        ],
        "rules": [
          "报告编制与主要责任：管理层；独立审计：对报表发表审计意见。",
          "年报范围通常大于四张主要财务报表。"
        ],
        "example": {
          "scenario": "自编例：某公司说“报表由外部审计过，所以管理层无需负责”。",
          "steps": [
            "区分编制责任和审计责任。",
            "审计提供外部核查，但管理层仍对财务报告负责。"
          ],
          "conclusion": "该说法错误；审计不能替代管理层责任。"
        },
        "pitfalls": [
          "审计过不等于没有任何错报，更不等于股票值得买。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Who has primary responsibility for the integrity of financial reporting?",
            "zh": "谁对财务报告的完整性负主要责任？",
            "options": [
              "Customers",
              "Top management",
              "Only outside investors",
              "Only the stock exchange"
            ],
            "answer": 1,
            "explanations": [
              "客户不是报告编制负责人。",
              "最高管理层负主要责任。",
              "投资者使用报告，不承担编制责任。",
              "交易所监管不代替管理层责任。"
            ],
            "hint": "区分编制者与使用者。",
            "errorType": "概念混淆",
            "id": "l1-annual-audit-q1"
          },
          {
            "prompt": "An audit opinion should be understood as:",
            "zh": "审计意见应被理解为：",
            "options": [
              "An independent opinion on financial statements under an applicable framework",
              "A guarantee of future profit",
              "A promise that share prices will rise",
              "A transfer of all management responsibility"
            ],
            "answer": 0,
            "explanations": [
              "审计意见针对按适用框架编制的报表。",
              "审计不保证未来利润。",
              "审计不保证市场价格。",
              "管理层仍然承担报告责任。"
            ],
            "hint": "审计对象是财务报表，不是未来回报。",
            "errorType": "概念混淆",
            "id": "l1-annual-audit-q2"
          }
        ],
        "english": {
          "summary": "Management is responsible for reporting; independent auditors provide an audit opinion.",
          "explanation": [
            "An annual report is management’s yearly comprehensive communication to outsiders, including business discussion, financial statements and notes. Reading only the income statement misses what the business does, its accounting policies, and important estimates and risks.",
            "Internal accountants prepare the statements under management’s direction. The lecture emphasizes that top management, particularly the CEO and CFO, has primary responsibility for the integrity and objectivity of financial reporting. Hiring an auditor does not transfer that responsibility.",
            "Independent auditors examine whether statements follow the applicable rules and issue an opinion. Independence matters because the reviewer should not be improperly influenced by the preparer. Supplementary explanation: an audit provides reasonable, not absolute, assurance; it does not promise future profits or investment returns."
          ],
          "rules": [
            "Preparation and primary reporting responsibility: management; independent audit: an opinion on the financial statements.",
            "An annual report normally contains more than the four main financial statements."
          ],
          "example": {
            "scenario": "Original learning example: a company claims that because its statements were externally audited, management is no longer responsible.",
            "steps": [
              "Separate preparation responsibility from audit responsibility.",
              "An audit supplies an external examination, but management remains responsible for financial reporting."
            ],
            "conclusion": "The claim is incorrect; an audit does not replace management responsibility."
          },
          "pitfalls": [
            "An audit does not mean every possible misstatement is absent, or that the shares are a good purchase."
          ],
          "questions": [
            {
              "id": "l1-annual-audit-q1",
              "explanations": [
                "Customers are not responsible for preparing the report.",
                "Top management has primary responsibility.",
                "Investors use the report rather than assume preparation responsibility.",
                "Exchange oversight does not replace management responsibility."
              ],
              "hint": "Distinguish report preparers from report users."
            },
            {
              "id": "l1-annual-audit-q2",
              "explanations": [
                "The opinion addresses statements prepared under an applicable framework.",
                "An audit does not guarantee future profit.",
                "An audit does not guarantee market prices.",
                "Management retains reporting responsibility."
              ],
              "hint": "The audit addresses financial statements, not promised future returns."
            }
          ]
        }
      },
      {
        "id": "l1-statement-geography",
        "title": "四张报表与附注各回答什么",
        "en": "Financial statements and notes",
        "pages": [
          67,
          68,
          69,
          70,
          71,
          72
        ],
        "prerequisites": [
          "l1-reporting-framework"
        ],
        "summary": "把时点存量与期间变化分开。",
        "explanation": [
          "资产负债表 Balance sheet 或 Statement of financial position 像一张照片，回答某一天拥有什么、欠什么、净归股东多少。利润表 Income statement 像一段录像，回答一个期间取得多少收入、发生多少费用、净赚多少。",
          "现金流量表 Statement of cash flows 解释期初至期末现金如何变化，分为经营CFO、投资CFI和融资CFF。权益变动表 Statement of changes in equity 则解释所有者投入、利润、分红等如何改变权益。",
          "附注 Notes 解释政策、估计和报表行项目明细。四张表与附注共同构成理解报告的基础。利润不是现金，某日余额不是全年流量，读英文表头的 as at 与 for the period ended 能帮助识别。"
        ],
        "rules": [
          "资产负债表：时点；利润表、现金流量表、权益变动表：期间。",
          "期末现金 = 期初现金 + 本期现金净变动，若有汇率影响需另行考虑。"
        ],
        "example": {
          "scenario": "自编例：12月31日银行存款30,000元，全年服务收入100,000元。",
          "steps": [
            "30,000元是某日现金余额，进入资产负债表。",
            "100,000元是全年收入，进入利润表。",
            "全年收付款怎样把现金变到30,000元，由现金流量表解释。"
          ],
          "conclusion": "余额与流量不同，不能直接相加或互相替代。"
        },
        "pitfalls": [
          "Income是利润相关概念，Cash是现金，不能仅凭英文直觉混同。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Which report presents financial position at a specific date?",
            "zh": "哪张报表反映某一特定日期的财务状况？",
            "options": [
              "Statement of cash flows",
              "Annual sales budget",
              "Balance sheet",
              "Income statement"
            ],
            "answer": 2,
            "explanations": [
              "现金流量表展示期间收付变化。",
              "销售预算是未来计划，并非该财务状况报表。",
              "资产负债表展示时点资产、负债与权益。",
              "利润表展示期间经营结果。"
            ],
            "hint": "at a specific date 指时点。",
            "errorType": "英文理解",
            "id": "l1-statement-geography-q1"
          },
          {
            "prompt": "Where would detailed accounting policies normally be explained?",
            "zh": "详细会计政策通常在哪里解释？",
            "options": [
              "Only in the share price",
              "Only in the cash balance",
              "Only in an invoice",
              "Notes to the financial statements"
            ],
            "answer": 3,
            "explanations": [
              "股价不是政策说明。",
              "现金余额本身不解释政策。",
              "发票是业务凭证，不是报表政策说明。",
              "附注解释政策与估计。"
            ],
            "hint": "数字背后的说明到哪里找？",
            "errorType": "概念混淆",
            "id": "l1-statement-geography-q2"
          }
        ],
        "english": {
          "summary": "Separate balances at a date from movements over a period.",
          "explanation": [
            "The balance sheet, or statement of financial position, is like a photograph. It shows what the business has, what it owes and what remains for shareholders at one date. The income statement is like a video: it shows revenue, expenses and profit over a period.",
            "The statement of cash flows explains changes in cash from the beginning to the end of a period, classified as operating (CFO), investing (CFI) and financing (CFF). The statement of changes in equity explains how owner contributions, profit, dividends and other movements change equity.",
            "Notes explain policies, estimates and details of statement line items. The four statements and notes work together. Profit is not cash, and a balance at one date is not a full-year flow. English headings such as as at and for the period ended help identify the distinction."
          ],
          "rules": [
            "Balance sheet: a date; income statement, cash flow statement and equity changes: a period.",
            "Ending cash = beginning cash + net cash movement; consider exchange-rate effects separately when applicable."
          ],
          "example": {
            "scenario": "Original learning example: bank cash is 30,000 on December 31, and annual service revenue is 100,000.",
            "steps": [
              "The 30,000 cash amount is a dated balance on the balance sheet.",
              "The 100,000 is revenue earned over the year on the income statement.",
              "The cash flow statement explains how annual receipts and payments brought cash to 30,000."
            ],
            "conclusion": "Balances and flows differ; they cannot be directly added together or substituted for each other."
          },
          "pitfalls": [
            "Income concerns earnings; cash concerns money. Do not treat the terms as interchangeable."
          ],
          "questions": [
            {
              "id": "l1-statement-geography-q1",
              "explanations": [
                "The cash flow statement covers receipts and payments over a period.",
                "A sales budget is a future plan, not this statement of financial position.",
                "The balance sheet presents assets, liabilities and equity at a date.",
                "The income statement presents performance over a period."
              ],
              "hint": "At a specific date indicates a point in time."
            },
            {
              "id": "l1-statement-geography-q2",
              "explanations": [
                "A share price does not explain accounting policies.",
                "A cash balance alone does not explain policies.",
                "An invoice is a transaction document, not the statements’ policy explanation.",
                "Notes explain accounting policies and estimates."
              ],
              "hint": "Where can you find explanations behind the numbers?"
            }
          ]
        }
      },
      {
        "id": "l1-report-users",
        "title": "投资者与债权人如何使用报告",
        "en": "Valuation, contracting and fundamental analysis",
        "pages": [
          73,
          74,
          75,
          76,
          77,
          78,
          79
        ],
        "prerequisites": [
          "l1-statement-geography",
          "l1-equity-valuation"
        ],
        "summary": "不同使用者会围绕不同决策选择信息。",
        "explanation": [
          "股权投资者是剩余所有者，关注未来收益、风险与内在价值。估值作用 Valuation role 是利用相关信息估计股票价值，再与市场价格比较，为买入、持有或卖出提供依据。",
          "基本面分析 Fundamental analysis 结合宏观经济、行业和企业经营财务情况。它先估计价值，再与价格比较，而不是把历史利润直接当作未来保证。估值依赖假设，存在不确定性。",
          "债权人拥有合同约定的收款权，更多关注偿债能力、抵押品与财务约束 Covenants。报告的契约作用 Contracting role 帮助签约前评估与签约后监督。管理层也可能有调整数字表现的动机，因此需要结合附注与业务背景保持审慎。"
        ],
        "rules": [
          "估值：相关信息→估计内在价值→比较价格。",
          "契约与监督：约定指标→持续报告→检查约束是否满足。"
        ],
        "example": {
          "scenario": "自编例：银行要求借款人在贷款期维持某个财务比率。",
          "steps": [
            "贷款前使用报表评估风险。",
            "贷款后按约定口径定期检查比率。"
          ],
          "conclusion": "这是报告的契约和监督用途。"
        },
        "pitfalls": [
          "股价低于个人估值不保证赚钱，估值可能有误。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "A bank checks whether a borrower meets a required financial ratio. This mainly illustrates the:",
            "zh": "银行检查借款人是否满足约定财务比率，主要体现：",
            "options": [
              "Guarantee of share returns",
              "Preparation of an IPO",
              "Replacement of management",
              "Contracting and monitoring role"
            ],
            "answer": 3,
            "explanations": [
              "检查比率不保证股权收益。",
              "与首次发行没有直接关系。",
              "监督不是替代管理。",
              "按合同指标监督借款人是契约用途。"
            ],
            "hint": "谁在检查，依据什么约定？",
            "errorType": "概念混淆",
            "id": "l1-report-users-q1"
          },
          {
            "prompt": "Fundamental analysis generally seeks to compare:",
            "zh": "基本面分析通常希望比较什么？",
            "options": [
              "Audit fees and dividends only",
              "Face value and the number of employees only",
              "Estimated intrinsic value and current market price",
              "Cash and every expense as if identical"
            ],
            "answer": 2,
            "explanations": [
              "两项数字不足以概括基本面分析。",
              "面值与人数不构成股票价值比较框架。",
              "估计价值与价格比较，为判断提供依据。",
              "现金与费用不是相同概念。"
            ],
            "hint": "区分 value 与 price。",
            "errorType": "英文理解",
            "id": "l1-report-users-q2"
          }
        ],
        "english": {
          "summary": "Different users select information for different decisions.",
          "explanation": [
            "Equity investors are residual owners and care about future returns, risk and intrinsic value. The valuation role of reporting uses relevant information to estimate share value, then compares it with market price to inform buying, holding or selling.",
            "Fundamental analysis considers the macroeconomy, industry conditions and a company’s operating and financial position. It estimates value and compares it with price, rather than treating past profits as a future guarantee. Valuation depends on assumptions and remains uncertain.",
            "Creditors have contractual collection rights and focus more on repayment capacity, collateral and financial covenants. Reporting’s contracting role helps assess a party before agreement and monitor it afterward. Managers may also have incentives to influence reported performance, so users need notes and business context to interpret it critically."
          ],
          "rules": [
            "Valuation: relevant information → estimated intrinsic value → comparison with price.",
            "Contracting and monitoring: agreed metrics → continuing reports → checking compliance."
          ],
          "example": {
            "scenario": "Original learning example: a bank requires a borrower to maintain a specified financial ratio throughout the loan.",
            "steps": [
              "Before lending, the bank assesses risk using financial statements.",
              "After lending, it periodically checks the ratio using the agreed definitions."
            ],
            "conclusion": "This illustrates reporting’s contracting and monitoring role."
          },
          "pitfalls": [
            "A price below your estimated value does not guarantee profit; the estimate itself may be wrong."
          ],
          "questions": [
            {
              "id": "l1-report-users-q1",
              "explanations": [
                "Checking a ratio does not guarantee equity returns.",
                "The check is not directly about an initial share issue.",
                "Monitoring is not replacing management.",
                "Monitoring a borrower using agreed metrics is a contracting use."
              ],
              "hint": "Who is checking, and under which agreement?"
            },
            {
              "id": "l1-report-users-q2",
              "explanations": [
                "Those two figures do not summarize fundamental analysis.",
                "Face value and headcount do not form a framework for comparing share value and price.",
                "Comparing estimated value and price helps inform a decision.",
                "Cash and expense are not identical concepts."
              ],
              "hint": "Distinguish value from price."
            }
          ]
        }
      }
    ],
    "descriptionEn": "Build a reporting framework through business activities, capital markets and time value, then understand standards, statements and their users."
  },
  {
    "id": "l2",
    "number": 2,
    "title": "会计恒等式与复式记账",
    "en": "Accounting Equation and Double-entry Bookkeeping",
    "description": "从账户分类和借贷方向开始，把业务事件写成分录，并理解报表之间的连接。",
    "source": "Lecture 2.pdf",
    "pages": 87,
    "nodes": [
      {
        "id": "l2-equation-entity",
        "title": "会计恒等式与企业边界",
        "en": "Accounting equation and entity",
        "pages": [
          4,
          5,
          6,
          7,
          8,
          9,
          43,
          53,
          54
        ],
        "prerequisites": [
          "l1-statement-geography"
        ],
        "summary": "资产的来源可以由债权人与所有者共同解释。",
        "explanation": [
          "资产 Assets 是企业拥有或控制、能带来未来经济利益的资源；负债 Liabilities 是对外部的现有义务；权益 Equity 是扣除负债后归所有者的剩余部分。恒等式把同一企业的资源与对资源的请求权联系起来。",
          "资产=负债+权益不是“现金=借款+股本”。资产还包括应收账款、存货和设备，负债还包括应付货款和应付工资。权益也不只是最初投入，留在企业里的利润会改变它。",
          "记账首先确定会计主体 Accounting entity。股东与公司是不同的核算边界，股东用自己的账户支付个人装修费，不是公司交易。补充提醒：若公司代付个人支出，需另行判断性质，不能套用“不入账”。"
        ],
        "rules": [
          "Assets = Liabilities + Equity。",
          "Equity = Assets − Liabilities。",
          "每笔企业交易处理后，恒等式仍须平衡。"
        ],
        "example": {
          "scenario": "自编例：企业有资产80,000元，欠银行30,000元。股东另从个人账户付5,000元家庭支出。",
          "steps": [
            "企业权益=80,000−30,000=50,000。",
            "股东的个人支出不改变企业的资源或义务。"
          ],
          "conclusion": "企业权益仍为50,000元。"
        },
        "pitfalls": [
          "借款增加资产的同时也增加负债，不是赚到利润。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Assets are $80,000 and liabilities are $30,000. Equity equals:",
            "zh": "资产80,000美元，负债30,000美元，权益是多少？",
            "options": [
              "$80,000",
              "$50,000",
              "$110,000",
              "$30,000"
            ],
            "answer": 1,
            "explanations": [
              "80,000没有扣除负债。",
              "80,000−30,000=50,000。",
              "110,000错误相加。",
              "30,000是负债。"
            ],
            "hint": "权益是剩余请求权。",
            "errorType": "计算",
            "id": "l2-equation-entity-q1"
          },
          {
            "prompt": "A shareholder pays for a personal holiday from a personal bank account. The company should:",
            "zh": "股东用个人银行账户支付私人度假费用，公司应如何处理？",
            "options": [
              "Make no entry for this personal event",
              "Record company travel expense",
              "Reduce company cash",
              "Increase company revenue"
            ],
            "answer": 0,
            "explanations": [
              "该事件在公司核算边界之外。",
              "不是企业发生的差旅费用。",
              "公司现金没有变化。",
              "公司没有交付商品或服务取得收入。"
            ],
            "hint": "先问是谁的钱，谁的活动。",
            "errorType": "概念混淆",
            "id": "l2-equation-entity-q2"
          }
        ],
        "english": {
          "summary": "Assets can be explained by the claims of both creditors and owners.",
          "explanation": [
            "Assets are resources the entity owns or controls that can bring future economic benefits. Liabilities are present obligations to outsiders. Equity is the residual interest after liabilities are deducted. The equation connects the resources of one entity with claims on those resources.",
            "Assets = liabilities + equity does not mean cash = loans + share capital. Assets also include receivables, inventory and equipment; liabilities include amounts owed to suppliers and employees. Equity includes more than initial contributions because retained profits change it.",
            "First identify the accounting entity. A shareholder and a company have separate accounting boundaries. A shareholder paying for personal home renovation from a personal account creates no company transaction. Supplementary caution: if the company pays a personal bill, analyze its nature separately rather than applying the no-entry conclusion automatically."
          ],
          "rules": [
            "Assets = Liabilities + Equity.",
            "Equity = Assets − Liabilities.",
            "The equation must remain balanced after recording each company transaction."
          ],
          "example": {
            "scenario": "Original learning example: a company has assets of 80,000 and a bank debt of 30,000. A shareholder separately pays 5,000 of household expenses from a personal account.",
            "steps": [
              "Company equity = 80,000 − 30,000 = 50,000.",
              "The shareholder’s personal payment does not change company resources or obligations."
            ],
            "conclusion": "Company equity remains 50,000."
          },
          "pitfalls": [
            "Borrowing increases both assets and liabilities; it is not profit earned."
          ],
          "questions": [
            {
              "id": "l2-equation-entity-q1",
              "explanations": [
                "80,000 fails to deduct liabilities.",
                "80,000 − 30,000 = 50,000.",
                "110,000 incorrectly adds assets and liabilities.",
                "30,000 is the liability amount."
              ],
              "hint": "Equity is the residual claim."
            },
            {
              "id": "l2-equation-entity-q2",
              "explanations": [
                "The event is outside the company’s accounting boundary.",
                "It is not a company travel cost.",
                "Company cash has not changed.",
                "The company did not earn revenue by delivering goods or services."
              ],
              "hint": "First ask whose money and whose activity are involved."
            }
          ]
        }
      },
      {
        "id": "l2-retained-earnings",
        "title": "投入资本、留存收益与分红",
        "en": "Contributed capital and retained earnings",
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
          19,
          20,
          31,
          32
        ],
        "prerequisites": [
          "l2-equation-entity"
        ],
        "summary": "股东投入与经营积累是两种不同的权益来源。",
        "explanation": [
          "投入资本 Contributed capital 是所有者以股东身份投入的资源，课件以普通股 Common stock 表示。留存收益 Retained earnings 是企业历年净利润扣除分红后的累计余额，两者不能混成同一种收入。",
          "本期净利润 Net income=收入−费用。它增加留存收益；净亏损则减少。分红 Dividends 是向所有者分配资源，减少留存收益，却不是为了取得收入而消耗的费用，所以不进入利润计算。",
          "收入、费用、分红都有自己的期间账户，并不因为最终影响留存收益就成为资产负债表上的权益账户。期末利润与分红通过权益变动衔接到留存收益，阅读报表时要分清“影响权益”与“属于权益账户”。"
        ],
        "rules": [
          "期末留存收益 = 期初留存收益 + 净利润 − 分红。",
          "净利润 = 收入 − 费用。",
          "简化权益 = 投入资本 + 留存收益；实际报表可能有其他权益项目。"
        ],
        "example": {
          "scenario": "自编例：期初留存收益8,000元，本期收入12,000元、费用7,000元，分红2,000元。",
          "steps": [
            "净利润=12,000−7,000=5,000。",
            "期末留存收益=8,000+5,000−2,000。"
          ],
          "conclusion": "期末留存收益11,000元；分红不会把净利润改为3,000元。"
        },
        "pitfalls": [
          "留存收益不是一袋专门保留的现金，资金可能已经用于设备或存货。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Beginning retained earnings are $8,000, net income is $5,000, and dividends are $2,000. Ending retained earnings are:",
            "zh": "期初留存收益8,000美元，净利润5,000美元，分红2,000美元，期末是多少？",
            "options": [
              "$15,000",
              "$3,000",
              "$13,000",
              "$11,000"
            ],
            "answer": 3,
            "explanations": [
              "15,000错误加上了分红。",
              "3,000遗漏期初余额。",
              "13,000没有扣除分红。",
              "8,000+5,000−2,000=11,000。"
            ],
            "hint": "留存收益有期初存量和本期变动。",
            "errorType": "计算",
            "id": "l2-retained-earnings-q1"
          },
          {
            "prompt": "Which payment reduces retained earnings without being an expense?",
            "zh": "哪种付款减少留存收益但不属于费用？",
            "options": [
              "Rent for the current month",
              "Utilities consumed this month",
              "A dividend to shareholders",
              "Salary for work performed"
            ],
            "answer": 2,
            "explanations": [
              "当月已耗用租赁服务属于租金费用。",
              "当月耗用公用服务属于费用。",
              "分红是所有者分配，不是费用。",
              "员工服务的消耗属于工资费用。"
            ],
            "hint": "识别收款人是以所有者身份还是提供经营服务。",
            "errorType": "概念混淆",
            "id": "l2-retained-earnings-q2"
          }
        ],
        "english": {
          "summary": "Owner contributions and accumulated operating earnings are different sources of equity.",
          "explanation": [
            "Contributed capital is resources provided by owners acting as owners; the lecture represents it with common stock. Retained earnings is cumulative net income less dividends over the business’s history. Neither owner contributions nor retained earnings should be confused with current revenue.",
            "Current net income equals revenue minus expenses and increases retained earnings; a net loss reduces it. Dividends distribute resources to owners and reduce retained earnings. They are not resources consumed to earn revenue, so they are not expenses in calculating profit.",
            "Revenue, expenses and dividends have their own period accounts. Their eventual effect on retained earnings does not make them balance-sheet equity accounts. Period profit and dividends connect to retained earnings through equity changes. Distinguish affecting equity from being an equity account."
          ],
          "rules": [
            "Ending retained earnings = beginning retained earnings + net income − dividends.",
            "Net income = revenue − expenses.",
            "Simplified equity = contributed capital + retained earnings; real statements may contain other equity components."
          ],
          "example": {
            "scenario": "Original learning example: beginning retained earnings is 8,000; current revenue is 12,000, expenses are 7,000 and dividends are 2,000.",
            "steps": [
              "Net income = 12,000 − 7,000 = 5,000.",
              "Ending retained earnings = 8,000 + 5,000 − 2,000."
            ],
            "conclusion": "Ending retained earnings is 11,000. Dividends do not reduce net income to 3,000."
          },
          "pitfalls": [
            "Retained earnings is not a separate bag of cash. Resources may already be invested in equipment or inventory."
          ],
          "questions": [
            {
              "id": "l2-retained-earnings-q1",
              "explanations": [
                "15,000 incorrectly adds dividends.",
                "3,000 omits the beginning balance.",
                "13,000 does not deduct dividends.",
                "8,000 + 5,000 − 2,000 = 11,000."
              ],
              "hint": "Retained earnings includes an opening balance as well as current movements."
            },
            {
              "id": "l2-retained-earnings-q2",
              "explanations": [
                "Rent consumed this month is rent expense.",
                "Utilities consumed this month are an expense.",
                "A dividend is an owner distribution, not an expense.",
                "Employee services consumed are salary expense."
              ],
              "hint": "Is the recipient acting as an owner or supplying operating services?"
            }
          ]
        }
      },
      {
        "id": "l2-asset-accounts",
        "title": "认识常见资产账户",
        "en": "Cash, receivables, inventory, prepayments and PP&E",
        "pages": [
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29
        ],
        "prerequisites": [
          "l2-equation-entity"
        ],
        "summary": "资产不只是钱，也包括未来收款权与未耗用资源。",
        "explanation": [
          "账户 Account 是对某一项目的增减与余额的持续记录。现金账户记录企业的现金及课件所述银行资金等；应收账款 Accounts receivable 记录已向客户交付后尚未收到的款项；应收票据 Notes receivable 则具有正式票据承诺，常明确到期日和利息。",
          "存货 Inventory 是为销售或生产而持有的资源，包括原材料、在产品和产成品。预付费用 Prepaid expenses 虽然名字带费用，但在未来服务尚未耗用时是资产，例如提前支付的保险与租金。",
          "土地、建筑物、设备等用于经营的长期有形资源统称PP&E。购买设备只是把一种资产换成另一种，通常不在购买当天把全部金额当作当期费用。以后如何分摊耗用，需要进一步学习折旧等规则。"
        ],
        "rules": [
          "应收账款：客户欠企业的钱；应付账款：企业欠供应商的钱。",
          "预付且尚未耗用的利益是资产；耗用后再判断费用。"
        ],
        "example": {
          "scenario": "自编例：10月1日付12,000元，购买从当天起覆盖12个月的保险。",
          "steps": [
            "付款后获得未来一年的保险保障。",
            "刚付款时先识别未耗用利益，不把全年都当10月费用。",
            "补充示例：若按月平均耗用，每月费用1,000元。"
          ],
          "conclusion": "付款时产生预付资产，之后随保障耗用转为费用。"
        },
        "pitfalls": [
          "paid不自动等于expense；先判断是否仍有未来利益。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Insurance paid in advance for future coverage is initially usually:",
            "zh": "提前支付的未来保险保障最初通常属于什么？",
            "options": [
              "Current-period revenue",
              "An amount owed to the insurer after payment",
              "An asset",
              "A dividend"
            ],
            "answer": 2,
            "explanations": [
              "不是向客户交付取得的收入。",
              "已经付款不能因此认定仍欠相同金额。",
              "未耗用保障提供未来利益，是预付资产。",
              "与向股东分配无关。"
            ],
            "hint": "看保障是否尚未耗用。",
            "errorType": "概念混淆",
            "id": "l2-asset-accounts-q1"
          },
          {
            "prompt": "Which account normally records a customer’s informal promise to pay for services already provided?",
            "zh": "客户对已接受服务作出的非正式付款承诺，通常记录在哪个账户？",
            "options": [
              "Accounts payable",
              "Common stock",
              "Salary expense",
              "Accounts receivable"
            ],
            "answer": 3,
            "explanations": [
              "应付账款是企业欠供应商。",
              "股本代表所有者投入。",
              "工资费用是员工服务耗用。",
              "客户欠企业款项是应收账款。"
            ],
            "hint": "receivable表示将由企业收取。",
            "errorType": "英文理解",
            "id": "l2-asset-accounts-q2"
          }
        ],
        "english": {
          "summary": "Assets include collection rights and unconsumed resources, not only money.",
          "explanation": [
            "An account continuously records changes and the balance of a particular item. Cash includes cash and the bank funds described in the lecture. Accounts receivable records amounts customers owe after delivery. Notes receivable has a formal written promise, often specifying maturity and interest.",
            "Inventory is held for sale or production and includes raw materials, work in process and finished goods. Despite the word expenses in its name, prepaid expenses is an asset while future services remain unconsumed, as with advance insurance and rent.",
            "Land, buildings and equipment used in operations are grouped as property, plant and equipment, or PP&E. Buying equipment exchanges one asset for another and does not normally make its entire cost an expense on the purchase date. Later allocation of consumption requires concepts such as depreciation."
          ],
          "rules": [
            "Accounts receivable: customers owe the entity; accounts payable: the entity owes suppliers.",
            "Advance payment for an unconsumed benefit is an asset; assess expense as the benefit is consumed."
          ],
          "example": {
            "scenario": "Original learning example: on October 1, pay 12,000 for insurance covering twelve months from that date.",
            "steps": [
              "The payment obtains a year of future insurance protection.",
              "Initially identify the unconsumed benefit rather than expensing the whole year in October.",
              "Supplementary illustration: with equal monthly consumption, monthly expense is 1,000."
            ],
            "conclusion": "Payment initially creates a prepaid asset, which becomes expense as protection is consumed."
          },
          "pitfalls": [
            "Paid does not automatically mean expense; ask whether a future benefit remains."
          ],
          "questions": [
            {
              "id": "l2-asset-accounts-q1",
              "explanations": [
                "It is not revenue earned from delivering to a customer.",
                "Payment does not itself mean the same amount is still owed.",
                "Unconsumed coverage provides future benefit and is a prepaid asset.",
                "This is not a distribution to shareholders."
              ],
              "hint": "Check whether the coverage is still unconsumed."
            },
            {
              "id": "l2-asset-accounts-q2",
              "explanations": [
                "Accounts payable is what the entity owes suppliers.",
                "Common stock represents owner contributions.",
                "Salary expense reflects employee services consumed.",
                "An amount customers owe the entity is accounts receivable."
              ],
              "hint": "Receivable indicates an amount the entity expects to collect."
            }
          ]
        }
      },
      {
        "id": "l2-liability-equity-accounts",
        "title": "负债、收入和费用如何区分",
        "en": "Payables, revenue and expenses",
        "pages": [
          30,
          31,
          32,
          33
        ],
        "prerequisites": [
          "l2-asset-accounts",
          "l2-retained-earnings"
        ],
        "summary": "欠款、赚取收入与资源耗用回答不同问题。",
        "explanation": [
          "应付账款 Accounts payable 通常来自赊购商品或服务；应付票据 Notes payable 具有正式付款承诺；应计负债 Accrued liabilities 常来自费用已发生但尚未支付，例如应付工资和应付利息。名字里有payable，一般提示对外付款义务。",
          "收入 Revenue 来自向客户交付商品或服务。费用 Expenses 是本期为经营而发生的资源或服务耗用。课件列出销售成本、工资、租金、广告、保险和水电等费用；是否付款不是唯一判断依据。",
          "已借到的银行资金不是收入，因为同时产生偿还义务；股东投入也不是收入，因为是所有者交易。反过来，支付应付账款也不一定是新费用，因为该成本或费用可能此前已经记录。"
        ],
        "rules": [
          "借款：资产与负债同时增加，不增加收入。",
          "已发生而未支付的费用：费用增加，同时形成负债。"
        ],
        "example": {
          "scenario": "自编例：员工本月已工作，工资3,000元下月才支付。",
          "steps": [
            "本月已耗用员工服务，应确认本月工资费用。",
            "尚未支付，形成应付工资负债。"
          ],
          "conclusion": "本月费用和负债各增加3,000元，现金暂不变。"
        },
        "pitfalls": [
          "所有支出都叫费用、所有收款都叫收入，会导致大量重复或错期。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Employees have earned salaries that will be paid next month. At month-end the company normally records:",
            "zh": "员工已赚得工资，下月支付，月末通常记录什么？",
            "options": [
              "Cash revenue only",
              "A dividend and cash",
              "No event until cash is paid",
              "Salary expense and salaries payable"
            ],
            "answer": 3,
            "explanations": [
              "没有取得客户收入，也未收现金。",
              "工资不是所有者分红。",
              "权责发生的费用不能仅因未付款而忽略。",
              "服务已耗用，费用和应付工资同时形成。"
            ],
            "hint": "区分服务耗用时间与付款时间。",
            "errorType": "确认时点",
            "id": "l2-liability-equity-accounts-q1"
          },
          {
            "prompt": "Which receipt is not revenue?",
            "zh": "哪项收款不是收入？",
            "options": [
              "Cash received for products delivered",
              "Cash earned from renting property for the current period",
              "Cash borrowed from a bank",
              "Cash received for services performed"
            ],
            "answer": 2,
            "explanations": [
              "已交付商品可产生销售收入。",
              "本期租赁服务赚取的租金是收入。",
              "借款伴随偿还义务，不是经营赚取收入。",
              "已完成服务可产生服务收入。"
            ],
            "hint": "是否因交付赚取，还是需要归还？",
            "errorType": "概念混淆",
            "id": "l2-liability-equity-accounts-q2"
          }
        ],
        "english": {
          "summary": "An obligation, earning revenue and consuming resources answer different questions.",
          "explanation": [
            "Accounts payable commonly arises from buying goods or services on credit. Notes payable involves a formal payment promise. Accrued liabilities often arise when expenses have occurred but payment is pending, such as salaries payable or interest payable. Payable generally signals a payment obligation.",
            "Revenue arises from delivering goods or services to customers. Expenses reflect resources or services consumed in current operations. The lecture includes cost of goods sold, salaries, rent, advertising, insurance and utilities. Payment alone does not determine expense recognition.",
            "Bank borrowing is not revenue because it creates an obligation to repay. Owner contributions are also not revenue because they are owner transactions. Conversely, paying an account payable need not be a new expense because the cost or expense may have been recorded earlier."
          ],
          "rules": [
            "Borrowing increases assets and liabilities together, not revenue.",
            "Expense incurred but unpaid: increase expense and recognize a liability."
          ],
          "example": {
            "scenario": "Original learning example: employees have worked this month, but their 3,000 salary will be paid next month.",
            "steps": [
              "Employee services have been consumed this month, so recognize salary expense now.",
              "Because payment is pending, recognize salaries payable."
            ],
            "conclusion": "Current expense and liabilities each increase by 3,000; cash is unchanged for now."
          },
          "pitfalls": [
            "Calling every payment an expense and every receipt revenue causes duplication and timing errors."
          ],
          "questions": [
            {
              "id": "l2-liability-equity-accounts-q1",
              "explanations": [
                "No customer revenue has been earned and no cash has been received.",
                "Salaries are not owner distributions.",
                "An incurred expense cannot be ignored merely because it is unpaid.",
                "Services consumed create expense and salaries payable together."
              ],
              "hint": "Separate the time services are consumed from the time cash is paid."
            },
            {
              "id": "l2-liability-equity-accounts-q2",
              "explanations": [
                "Delivered products can generate sales revenue.",
                "Rent earned from current-period rental services is revenue.",
                "Borrowing creates a repayment obligation, not earned operating revenue.",
                "Completed services can generate service revenue."
              ],
              "hint": "Was the cash earned through delivery, or must it be repaid?"
            }
          ]
        }
      },
      {
        "id": "l2-debits-credits",
        "title": "借贷方向与正常余额",
        "en": "Double-entry, debit, credit and normal balances",
        "pages": [
          37,
          38,
          39,
          60,
          61,
          62,
          63
        ],
        "prerequisites": [
          "l2-liability-equity-accounts"
        ],
        "summary": "借是左，贷是右，增减由账户类别决定。",
        "explanation": [
          "Debit 借方是账户左边，Credit 贷方是右边。它们本身不是好坏，也不是收到和付出。资产增加记借方，负债与权益增加记贷方；减少则反向。先识别账户类别，才能判断借贷。",
          "收入增加最终使权益增加，所以收入增加记贷方；费用与分红增加最终减少权益，所以增加记借方。补充术语“正常余额 Normal balance”表示该类账户通常积累在增加的一侧，并不意味着每个账户永远不会出现反向余额。",
          "复式记账 Double-entry bookkeeping 要求每笔交易至少影响两个账户，并且借方合计等于贷方合计。它允许一借多贷或多借一贷，不是必须只能有两个账户。借贷相等是必要检查，但无法排除用错账户或漏记整笔交易。"
        ],
        "rules": [
          "增加记借方：资产、费用、分红。",
          "增加记贷方：负债、股本等权益、收入。",
          "每笔分录借方合计 = 贷方合计。"
        ],
        "example": {
          "scenario": "自编例：用现金支付本月租金1,000元。",
          "steps": [
            "租金费用增加：借记Rent expense 1,000。",
            "现金资产减少：贷记Cash 1,000。"
          ],
          "conclusion": "费用增、现金减，但分录借贷各1,000元保持相等。"
        },
        "pitfalls": [
          "借方不总是增加，贷方不总是减少。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "An increase in an asset is normally recorded as a:",
            "zh": "资产增加通常记在哪一方？",
            "options": [
              "Credit",
              "Dividend",
              "Closing balance only",
              "Debit"
            ],
            "answer": 3,
            "explanations": [
              "资产减少通常记贷方。",
              "分红是交易类别，不是方向。",
              "发生时需要记录，不能只写期末余额。",
              "资产增加记借方。"
            ],
            "hint": "回到恒等式左侧的资产。",
            "errorType": "账户与借贷",
            "id": "l2-debits-credits-q1"
          },
          {
            "prompt": "Which statement about double-entry bookkeeping is correct?",
            "zh": "关于复式记账，哪项正确？",
            "options": [
              "Credits always mean decreases",
              "A balanced entry can never contain an error",
              "Total debits equal total credits for each transaction",
              "Every transaction has exactly two accounts"
            ],
            "answer": 2,
            "explanations": [
              "负债、权益和收入增加记贷方。",
              "金额相等仍可能记错账户或期间。",
              "每笔交易借贷总额必须相等。",
              "复合分录可涉及多个账户。"
            ],
            "hint": "区分至少两个账户与恰好两个账户。",
            "errorType": "账户与借贷",
            "id": "l2-debits-credits-q2"
          }
        ],
        "english": {
          "summary": "Debit means left and credit means right; account type determines increase or decrease.",
          "explanation": [
            "Debit is the left side of an account; credit is the right. Neither inherently means good or bad, receipt or payment. Asset increases are debits; liability and equity increases are credits. Decreases go on the opposite side. Identify the account type before choosing a direction.",
            "Revenue increases ultimately increase equity, so revenue increases are credits. Expenses and dividends ultimately reduce equity, so their increases are debits. Supplementary term: normal balance means the side on which the account typically accumulates increases, not a guarantee that an opposite balance can never occur.",
            "Double-entry bookkeeping requires each transaction to affect at least two accounts and total debits to equal total credits. Entries may have one debit and several credits, or several debits and one credit. Balance is a necessary check but cannot detect every wrong account or an entirely omitted transaction."
          ],
          "rules": [
            "Increases recorded as debits: assets, expenses and dividends.",
            "Increases recorded as credits: liabilities, equity such as share capital, and revenue.",
            "For every entry, total debits = total credits."
          ],
          "example": {
            "scenario": "Original learning example: pay 1,000 cash for this month’s rent.",
            "steps": [
              "Rent expense increases: debit Rent Expense 1,000.",
              "The cash asset decreases: credit Cash 1,000."
            ],
            "conclusion": "Expense rises and cash falls, while debits and credits both equal 1,000."
          },
          "pitfalls": [
            "A debit does not always increase an account; a credit does not always decrease one."
          ],
          "questions": [
            {
              "id": "l2-debits-credits-q1",
              "explanations": [
                "An asset decrease is normally credited.",
                "A dividend is a transaction category, not a debit-credit direction.",
                "The event must be recorded when it occurs, not merely as a closing balance.",
                "An asset increase is debited."
              ],
              "hint": "Think of assets on the left side of the equation."
            },
            {
              "id": "l2-debits-credits-q2",
              "explanations": [
                "Liability, equity and revenue increases are credits.",
                "Equal amounts may still involve a wrong account or period.",
                "Total debits must equal total credits for each transaction.",
                "A compound entry can involve more than two accounts."
              ],
              "hint": "Distinguish at least two accounts from exactly two accounts."
            }
          ]
        }
      },
      {
        "id": "l2-capital-purchases",
        "title": "投入、借款与资产购置",
        "en": "Financing and asset exchanges",
        "pages": [
          43,
          44,
          45,
          46,
          47,
          64,
          65,
          71,
          72,
          73
        ],
        "prerequisites": [
          "l2-debits-credits"
        ],
        "summary": "先区分资金来源，再分析买到了什么。",
        "explanation": [
          "所有者投入现金时，企业现金增加，同时股本增加。银行借款时，现金增加，同时借款负债增加。这两种融资都能使企业获得钱，但不会形成营业收入。",
          "现金购买土地或设备，是资产内部转换：取得的长期资源增加，现金减少。只要按成本交换且没有其他费用或损益，总资产不变。不能把现金减少直接解释成权益减少。",
          "赊购用品则不同：企业已经得到资源，但付款推迟，资产与应付账款同时增加。on credit 在这类题目里表示赊购或赊销，不是要求无论什么账户都记贷方。"
        ],
        "rules": [
          "发行股票收款：Dr Cash；Cr Common stock。",
          "现金购设备：Dr Equipment；Cr Cash。",
          "赊购未耗用用品：Dr Supplies；Cr Accounts payable。"
        ],
        "example": {
          "scenario": "自编例：企业收到股东20,000元，再用现金12,000元买设备，赊购用品2,000元。",
          "steps": [
            "投入后：现金20,000，权益20,000。",
            "买设备后：现金8,000，设备12,000，总资产仍20,000。",
            "赊购后：用品2,000，应付账款2,000。"
          ],
          "conclusion": "总资产22,000=负债2,000+权益20,000。"
        },
        "pitfalls": [
          "购置资产不是自动确认同额费用。"
        ],
        "related": [],
        "lab": "transaction",
        "questions": [
          {
            "prompt": "Equipment costing $12,000 is purchased for cash. Total assets immediately:",
            "zh": "用现金购买成本12,000美元的设备，总资产立即如何变化？",
            "options": [
              "Remain unchanged",
              "Increase by $12,000",
              "Decrease by $12,000",
              "Increase by $24,000"
            ],
            "answer": 0,
            "explanations": [
              "设备增12,000抵销现金减12,000。",
              "只计设备增加，漏掉现金减少。",
              "只计现金减少，漏掉设备增加。",
              "重复相加且忽略现金减少。"
            ],
            "hint": "这是两项资产之间的交换。",
            "errorType": "账户与借贷",
            "id": "l2-capital-purchases-q1"
          },
          {
            "prompt": "Supplies are purchased on credit and remain unused. The entry is:",
            "zh": "赊购且尚未使用的用品，应作哪笔分录？",
            "options": [
              "Debit Accounts Payable; credit Supplies",
              "Debit Supplies; credit Accounts Payable",
              "Debit Cash; credit Revenue",
              "Debit Expense; credit Common Stock"
            ],
            "answer": 1,
            "explanations": [
              "这是相反方向，会减少用品和应付。",
              "用品资产与应付款负债同时增加。",
              "未收现金，也未赚取收入。",
              "未耗用，且没有股东投入。"
            ],
            "hint": "on credit表示付款推迟。",
            "errorType": "英文理解",
            "id": "l2-capital-purchases-q2"
          }
        ],
        "english": {
          "summary": "Identify the source of funding, then analyze what the entity buys.",
          "explanation": [
            "When owners contribute cash, both cash and share capital increase. When the entity borrows from a bank, both cash and a borrowing liability increase. Both financing methods provide money, but neither creates operating revenue.",
            "Buying land or equipment for cash exchanges assets: the acquired long-term resource increases and cash decreases. If the exchange is at cost with no additional expense or gain or loss, total assets remain unchanged. Falling cash does not necessarily mean falling equity.",
            "Buying supplies on credit is different: the entity receives resources but pays later, increasing both assets and accounts payable. In these questions, on credit means payment is deferred, not that every affected account must be credited."
          ],
          "rules": [
            "Issue shares for cash: Dr Cash; Cr Common Stock.",
            "Buy equipment for cash: Dr Equipment; Cr Cash.",
            "Buy unconsumed supplies on credit: Dr Supplies; Cr Accounts Payable."
          ],
          "example": {
            "scenario": "Original learning example: the company receives 20,000 from shareholders, buys equipment for 12,000 cash and buys supplies of 2,000 on credit.",
            "steps": [
              "After the contribution: cash 20,000 and equity 20,000.",
              "After buying equipment: cash 8,000 plus equipment 12,000; total assets remain 20,000.",
              "After the credit purchase: supplies 2,000 and accounts payable 2,000."
            ],
            "conclusion": "Total assets of 22,000 equal liabilities of 2,000 plus equity of 20,000."
          },
          "pitfalls": [
            "Acquiring an asset does not automatically create an equal current expense."
          ],
          "questions": [
            {
              "id": "l2-capital-purchases-q1",
              "explanations": [
                "The 12,000 equipment increase offsets the 12,000 cash decrease.",
                "This counts equipment but omits the cash reduction.",
                "This counts the cash decrease but omits equipment.",
                "This adds amounts incorrectly and ignores the cash reduction."
              ],
              "hint": "This is an exchange between two assets."
            },
            {
              "id": "l2-capital-purchases-q2",
              "explanations": [
                "This reverses the required directions and reduces both supplies and payables.",
                "The supplies asset and payable liability both increase.",
                "No cash is received and no revenue is earned.",
                "The supplies are unconsumed and there is no owner contribution."
              ],
              "hint": "On credit means payment is deferred."
            }
          ]
        }
      },
      {
        "id": "l2-revenue-expense-transactions",
        "title": "现金与赊销中的收入费用",
        "en": "Revenue and expense transactions",
        "pages": [
          48,
          49,
          50,
          51,
          74,
          75,
          76
        ],
        "prerequisites": [
          "l2-capital-purchases"
        ],
        "summary": "交付赚取收入，耗用形成费用，收付可以发生在其他时间。",
        "explanation": [
          "已完成服务并立即收款，借记现金、贷记服务收入。若服务已经完成但客户以后付款，借记应收账款、贷记服务收入。两种情况收入相同，差别在得到现金还是收款权。",
          "费用确认也先看本期是否已经耗用。例如本月租金、工资和水电已发生且立即支付，分别借记费用、合计贷记现金。一笔复合分录可以把多项费用列出，同时保持借贷合计相等。",
          "收入减费用形成利润，利润最终影响留存收益。这是报表联系，不代表每次业务直接跳过收入费用账户去记留存收益。通过期间账户，才能知道本期利润如何形成。"
        ],
        "rules": [
          "已完成服务赊销：Dr Accounts receivable；Cr Service revenue。",
          "支付本期已发生费用：Dr 各费用；Cr Cash。"
        ],
        "example": {
          "scenario": "自编例：服务完成收费4,000元，其中现场收1,500元，其余下月收；当月支付费用1,000元。",
          "steps": [
            "收入是全部已完成服务的4,000元。",
            "借现金1,500、借应收2,500、贷服务收入4,000。",
            "借费用1,000、贷现金1,000。"
          ],
          "conclusion": "本期利润3,000元，现金净增加500元，应收增加2,500元。"
        },
        "pitfalls": [
          "利润与现金变化不同不代表分录不平衡。"
        ],
        "related": [],
        "lab": "transaction",
        "questions": [
          {
            "prompt": "Services of $4,000 are performed; $1,500 is collected now. Revenue recognized, assuming the service is fully earned, is:",
            "zh": "完成4,000美元服务，当前收1,500美元，假设已全部赚取，应确认多少收入？",
            "options": [
              "$4,000",
              "$1,500",
              "$2,500",
              "$0"
            ],
            "answer": 0,
            "explanations": [
              "已完成的全部服务形成收入。",
              "仅计收款会遗漏赊销收入。",
              "2,500是应收余额，不是全部收入。",
              "不必等所有款项收齐才确认该已赚取收入。"
            ],
            "hint": "收入确认与收现金分别判断。",
            "errorType": "确认时点",
            "id": "l2-revenue-expense-transactions-q1"
          },
          {
            "prompt": "Which entry records cash payment of current-month rent?",
            "zh": "哪笔分录记录支付本月租金？",
            "options": [
              "Debit Accounts Receivable; credit Cash",
              "Debit Rent Expense; credit Cash",
              "Debit Cash; credit Rent Expense",
              "Debit Dividends; credit Revenue"
            ],
            "answer": 1,
            "explanations": [
              "没有客户欠款，不能借记应收。",
              "费用增加借记，现金减少贷记。",
              "方向相反，会增加现金减少费用。",
              "租金不是分红，付款不形成收入。"
            ],
            "hint": "先判断费用和现金分别增减。",
            "errorType": "账户与借贷",
            "id": "l2-revenue-expense-transactions-q2"
          }
        ],
        "english": {
          "summary": "Delivery earns revenue; consumption creates expense; cash can move at another time.",
          "explanation": [
            "For completed services paid immediately, debit cash and credit service revenue. For completed services to be paid later, debit accounts receivable and credit service revenue. The revenue is the same; the asset received is either cash or a collection right.",
            "For expenses, first ask whether the current period has consumed the resource. Current rent, salaries and utilities incurred and paid immediately are debited to their separate expense accounts, with total cash credited. One compound entry can record several expenses while keeping total debits and credits equal.",
            "Revenue less expenses produces profit, which eventually affects retained earnings. This reporting connection does not mean bypassing revenue and expense accounts and recording each transaction directly in retained earnings. Period accounts show how current profit was generated."
          ],
          "rules": [
            "Completed services on credit: Dr Accounts Receivable; Cr Service Revenue.",
            "Pay current expenses incurred: Dr relevant expense accounts; Cr Cash."
          ],
          "example": {
            "scenario": "Original learning example: completed services earn 4,000, of which 1,500 is collected now and the rest next month. Current expenses of 1,000 are paid.",
            "steps": [
              "Revenue is the full 4,000 earned from completed services.",
              "Debit Cash 1,500, debit Accounts Receivable 2,500 and credit Service Revenue 4,000.",
              "Debit Expense 1,000 and credit Cash 1,000."
            ],
            "conclusion": "Current profit is 3,000, cash increases by 500 and receivables increase by 2,500."
          },
          "pitfalls": [
            "Profit differing from the change in cash does not mean the entry is unbalanced."
          ],
          "questions": [
            {
              "id": "l2-revenue-expense-transactions-q1",
              "explanations": [
                "All completed services produce the 4,000 of earned revenue.",
                "Counting only cash collection omits credit revenue.",
                "2,500 is the receivable balance, not total revenue.",
                "The entity need not wait for full collection to recognize this earned revenue."
              ],
              "hint": "Assess revenue recognition separately from cash collection."
            },
            {
              "id": "l2-revenue-expense-transactions-q2",
              "explanations": [
                "There is no customer debt, so receivables should not be debited.",
                "Debit the expense increase and credit the cash decrease.",
                "The directions are reversed: they increase cash and reduce expense.",
                "Rent is not a dividend, and paying does not create revenue."
              ],
              "hint": "Determine the changes in expense and cash first."
            }
          ]
        }
      },
      {
        "id": "l2-settlement-dividends",
        "title": "收欠款、还欠款、卖资产与分红",
        "en": "Settlements, asset disposal and dividends",
        "pages": [
          52,
          55,
          56,
          57,
          58,
          59,
          77,
          79,
          80,
          81
        ],
        "prerequisites": [
          "l2-revenue-expense-transactions"
        ],
        "summary": "现金变化不一定是本期收入或费用。",
        "explanation": [
          "收回应收账款是把收款权换成现金：借现金、贷应收账款，不再确认一次收入。偿还应付账款是现金与负债同时减少：借应付账款、贷现金，不再把已记录的成本或费用重复记一遍。",
          "按账面成本出售土地时，借现金、贷土地，资产内部转换，没有出售损益。补充理解：若售价与账面价值不同，才需进一步分析收益或损失；不能把全部出售款一概叫营业收入。",
          "宣告并立即支付分红时，课件用借记Dividends、贷记Cash记录，分红期末减少留存收益。补充边界：若宣告和付款不是同一天，会先形成应付股利，再在付款时清偿，不能直接套用立即支付的简化分录。"
        ],
        "rules": [
          "收欠款：Dr Cash；Cr Accounts receivable。",
          "还欠款：Dr Accounts payable；Cr Cash。",
          "宣告并即付分红：Dr Dividends；Cr Cash。"
        ],
        "example": {
          "scenario": "自编例：期初应收3,000元、应付2,000元；收回1,000元，再偿还应付600元。",
          "steps": [
            "收款后现金加1,000，应收降至2,000。",
            "付款后现金减600，应付降至1,400。"
          ],
          "conclusion": "现金净增400元；这两笔清偿本身不新增收入或费用。"
        },
        "pitfalls": [
          "on account结合receive常指收回应收，结合pay常指清偿应付。"
        ],
        "related": [],
        "lab": "transaction",
        "questions": [
          {
            "prompt": "A customer pays $1,000 toward a previously recorded receivable. The company should credit:",
            "zh": "客户支付1,000美元偿还此前已记录的应收账款，公司应贷记什么？",
            "options": [
              "Common Stock",
              "Accounts Receivable",
              "Service Revenue again",
              "Salary Expense"
            ],
            "answer": 1,
            "explanations": [
              "客户付款不是股东投入。",
              "应收资产减少，贷记应收账款。",
              "重复收入会高估利润。",
              "不是工资交易。"
            ],
            "hint": "原交易已经确认过收入。",
            "errorType": "账户与借贷",
            "id": "l2-settlement-dividends-q1"
          },
          {
            "prompt": "Land with a carrying amount of $8,000 is sold for $8,000 cash. The gain is:",
            "zh": "账面价值8,000美元的土地按8,000美元出售，出售收益是多少？",
            "options": [
              "$0",
              "$8,000",
              "$16,000",
              "-$8,000"
            ],
            "answer": 0,
            "explanations": [
              "售价等于账面价值，没有损益。",
              "8,000是收到现金，不是全部收益。",
              "相加没有业务依据。",
              "没有低于账面价值出售。"
            ],
            "hint": "收益是售价与账面价值之差。",
            "errorType": "计算",
            "id": "l2-settlement-dividends-q2"
          }
        ],
        "english": {
          "summary": "A cash movement need not be current revenue or expense.",
          "explanation": [
            "Collecting a receivable exchanges a collection right for cash: debit cash and credit accounts receivable, without recording revenue again. Paying an account payable reduces both cash and liabilities: debit accounts payable and credit cash, without duplicating a cost or expense already recorded.",
            "Selling land at its carrying cost is recorded by debiting cash and crediting land. It exchanges assets and creates no disposal gain or loss. Supplementary explanation: if price differs from carrying amount, analyze the resulting gain or loss; the entire sale receipt should not automatically be called operating revenue.",
            "For a dividend declared and immediately paid, the lecture debits Dividends and credits Cash. Dividends reduce retained earnings at period-end. Supplementary boundary: declaration and payment on different dates first create dividends payable, later settled on payment. The immediate-payment simplification does not apply unchanged."
          ],
          "rules": [
            "Collect a receivable: Dr Cash; Cr Accounts Receivable.",
            "Settle a payable: Dr Accounts Payable; Cr Cash.",
            "Declare and immediately pay a dividend: Dr Dividends; Cr Cash."
          ],
          "example": {
            "scenario": "Original learning example: opening receivables are 3,000 and payables are 2,000; collect 1,000, then pay suppliers 600.",
            "steps": [
              "After collection, cash rises 1,000 and receivables fall to 2,000.",
              "After payment, cash falls 600 and payables fall to 1,400."
            ],
            "conclusion": "Cash increases by a net 400. These settlements do not themselves create new revenue or expense."
          },
          "pitfalls": [
            "Receive on account often means collecting a receivable; pay on account often means settling a payable."
          ],
          "questions": [
            {
              "id": "l2-settlement-dividends-q1",
              "explanations": [
                "Customer payment is not an owner contribution.",
                "Receivables decrease, so credit Accounts Receivable.",
                "Recording revenue twice would overstate profit.",
                "This is not a salary transaction."
              ],
              "hint": "Revenue was already recognized in the original transaction."
            },
            {
              "id": "l2-settlement-dividends-q2",
              "explanations": [
                "Price equals carrying amount, so there is no gain or loss.",
                "8,000 is cash received, not the entire gain.",
                "Adding price and carrying amount has no basis here.",
                "The land was not sold below carrying amount."
              ],
              "hint": "Gain is the sale price less carrying amount."
            }
          ]
        }
      },
      {
        "id": "l2-journal-posting",
        "title": "从交易分析到分录和T账户",
        "en": "Journalizing and posting",
        "pages": [
          61,
          66,
          67,
          68,
          69,
          70,
          82
        ],
        "prerequisites": [
          "l2-settlement-dividends"
        ],
        "summary": "分录按时间组织，分类账按账户组织。",
        "explanation": [
          "交易分析 Transaction analysis 先确定业务影响哪个主体、哪些账户和增减。日记账 Journal 按时间顺序记录每笔交易，列日期、账户、借贷金额与说明。写分录前想清经济实质，比背固定格式更可靠。",
          "过账 Posting 把日记账信息转到各个账户的分类账 Ledger。T账户是教学中把分类账简化成左右两侧的形式。同一笔分录会分别进入相关账户，交易编号有助于回查。",
          "账户余额是累计借贷相抵后的结果。现金借方累计20,000、贷方累计7,000，借方余额13,000。补充检查工具：试算表 Trial balance 汇总账户余额核对借贷，但借贷相等不保证所有交易都完整正确。"
        ],
        "rules": [
          "分析→日记账分录→过账分类账→求余额。",
          "资产常见借方余额 = 借方累计 − 贷方累计，若贷方更大则为贷方余额。"
        ],
        "example": {
          "scenario": "自编例：现金账户借方有10,000和3,000，贷方有4,000和1,500。",
          "steps": [
            "借方累计13,000。",
            "贷方累计5,500。",
            "借方余额=13,000−5,500。"
          ],
          "conclusion": "现金借方余额7,500元。"
        },
        "pitfalls": [
          "过账不是新的业务，不能再额外增加一遍收入或现金。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Posting means transferring information from the journal to:",
            "zh": "Posting指把日记账信息转到哪里？",
            "options": [
              "A new unrelated sale",
              "Share prices",
              "A tax payment only",
              "Ledger accounts"
            ],
            "answer": 3,
            "explanations": [
              "它不是新增交易。",
              "不涉及更新市场股价。",
              "过账不限于税款。",
              "过账是按账户归集到分类账。"
            ],
            "hint": "时间顺序与账户分类是两种组织方式。",
            "errorType": "英文理解",
            "id": "l2-journal-posting-q1"
          },
          {
            "prompt": "Cash has total debits of $13,000 and credits of $5,500. Its balance is:",
            "zh": "现金借方累计13,000美元，贷方累计5,500美元，其余额为：",
            "options": [
              "$18,500 debit",
              "$5,500 debit",
              "$7,500 debit",
              "$7,500 credit"
            ],
            "answer": 2,
            "explanations": [
              "两方应相抵，不是相加。",
              "5,500是贷方累计，不是余额。",
              "借方超过贷方7,500，留借方余额。",
              "差额方向应为借方。"
            ],
            "hint": "先比较两边，再求差额。",
            "errorType": "计算",
            "id": "l2-journal-posting-q2"
          }
        ],
        "english": {
          "summary": "The journal organizes transactions by time; the ledger organizes them by account.",
          "explanation": [
            "Transaction analysis identifies the entity, affected accounts and increases or decreases. The journal records transactions chronologically, giving the date, account names, debit and credit amounts and an explanation. Understanding the economic event before writing the entry is more reliable than memorizing a format.",
            "Posting transfers journal information into the individual ledger accounts. A T-account is a simplified teaching representation with a left and right side. Each entry goes into the accounts it affects, while transaction references make it possible to trace records back.",
            "An account balance nets accumulated debits and credits. Cash with 20,000 of debits and 7,000 of credits has a 13,000 debit balance. Supplementary checking tool: a trial balance summarizes account balances to test debit-credit equality, but equality does not guarantee complete or accurate recording."
          ],
          "rules": [
            "Analyze → journalize → post to the ledger → calculate balances.",
            "A common asset debit balance equals total debits minus total credits; if credits are larger, the balance is a credit."
          ],
          "example": {
            "scenario": "Original learning example: cash debits are 10,000 and 3,000; credits are 4,000 and 1,500.",
            "steps": [
              "Total debits are 13,000.",
              "Total credits are 5,500.",
              "Debit balance = 13,000 − 5,500."
            ],
            "conclusion": "Cash has a debit balance of 7,500."
          },
          "pitfalls": [
            "Posting is not another business event and must not create an extra receipt or revenue."
          ],
          "questions": [
            {
              "id": "l2-journal-posting-q1",
              "explanations": [
                "Posting is not an additional transaction.",
                "Posting does not update the market share price.",
                "Posting is not limited to taxes.",
                "Posting classifies journal information into ledger accounts."
              ],
              "hint": "Chronological order and classification by account are two ways to organize the same records."
            },
            {
              "id": "l2-journal-posting-q2",
              "explanations": [
                "The sides must be netted, not added.",
                "5,500 is total credits, not the balance.",
                "Debits exceed credits by 7,500, leaving a debit balance.",
                "The difference belongs on the debit side."
              ],
              "hint": "Compare the two sides, then calculate the difference."
            }
          ]
        }
      },
      {
        "id": "l2-statements-cycle",
        "title": "账户怎样连成报表与会计循环",
        "en": "Statement links and accounting cycle",
        "pages": [
          15,
          16,
          17,
          18,
          19,
          20,
          82,
          83,
          84,
          85,
          86
        ],
        "prerequisites": [
          "l2-journal-posting",
          "l2-retained-earnings"
        ],
        "summary": "利润接入留存收益，现金流解释现金，期末余额进入资产负债表。",
        "explanation": [
          "先由收入与费用编利润表，得到本期净利润；再用净利润、分红等解释权益变化；期末资产、负债和权益编资产负债表。现金流量表另从经营、投资、融资收付解释现金净变动，其期末现金应与资产负债表一致。",
          "课件维修店案例中，收入10,000、费用2,700，净利润7,300；分红2,100后留存收益5,200；股本50,000加留存收益得权益55,200。资产57,000与应付账款1,800及权益55,200相等，展示了四表之间的连接。",
          "以下为帮助理解后续内容的补充，不是本讲逐页展开的全部流程：期末通常需做调整 Adjustments，让已耗用预付资源、已发生未付款费用等进入正确期间；编调整后报表，再结转 Closing 期间收入、费用和分红，使新期间重新累计，资产负债与权益余额则延续。"
        ],
        "rules": [
          "利润表净利润→权益变动→期末留存收益→资产负债表。",
          "期初现金 + CFO + CFI + CFF = 期末现金，假设无汇率等其他影响。",
          "补充：收入、费用与分红为期间性账户；资产、负债及永久权益账户余额延续。"
        ],
        "example": {
          "scenario": "课件数字的重新推导：维修店经营现金流3,400元、投资现金流−18,000元、融资现金流47,900元，期初现金为0。",
          "steps": [
            "现金净变动=3,400−18,000+47,900=33,300。",
            "权益=股本50,000+净利润7,300−分红2,100=55,200。",
            "资产57,000=负债1,800+权益55,200。"
          ],
          "conclusion": "利润7,300元与现金增加33,300元不同，但各报表仍然相互衔接。"
        },
        "pitfalls": [
          "结转不是把银行账户清零。",
          "调整不等于任意修改利润，而是按正确期间记录。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Revenue is $10,000, expenses are $2,700, and dividends are $2,100. Net income is:",
            "zh": "收入10,000美元，费用2,700美元，分红2,100美元，净利润是多少？",
            "options": [
              "$7,300",
              "$5,200",
              "$10,000",
              "$9,400"
            ],
            "answer": 0,
            "explanations": [
              "10,000−2,700=7,300，分红不进入利润。",
              "5,200是零期初时扣分红后的留存收益。",
              "忽略费用会高估净利润。",
              "9,400未遵循收入减费用关系。"
            ],
            "hint": "先把分红排除出利润计算。",
            "errorType": "计算",
            "id": "l2-statements-cycle-q1"
          },
          {
            "prompt": "Supplementary concept: which account normally carries its balance into the next period rather than being closed as a period account?",
            "zh": "补充概念：哪个账户通常将余额带入下一期，而非作为期间账户结转归零？",
            "options": [
              "Dividends",
              "Cash",
              "Service Revenue",
              "Rent Expense"
            ],
            "answer": 1,
            "explanations": [
              "分红作为期间分配账户，期末结转。",
              "现金是永久性资产账户，余额延续。",
              "服务收入为期间账户，期末结转。",
              "租金费用为期间账户，期末结转。"
            ],
            "hint": "把存量账户与本期活动累计分开。",
            "errorType": "概念混淆",
            "id": "l2-statements-cycle-q2"
          }
        ],
        "english": {
          "summary": "Profit links to retained earnings, cash flows explain cash, and ending balances enter the balance sheet.",
          "explanation": [
            "First use revenue and expenses to prepare the income statement and calculate net income. Then explain equity changes using profit, dividends and other movements. Ending assets, liabilities and equity form the balance sheet. Separately, the cash flow statement explains cash movement through operating, investing and financing receipts and payments. Its ending cash must agree with the balance sheet.",
            "In the lecture’s repair-shop example, revenue of 10,000 less expenses of 2,700 produces net income of 7,300. After dividends of 2,100, retained earnings is 5,200. Adding share capital of 50,000 gives equity of 55,200. Assets of 57,000 equal accounts payable of 1,800 plus equity of 55,200, illustrating the links.",
            "The following is supplementary preparation for later topics, not a complete process developed slide by slide in this lecture. Period-end adjustments normally recognize consumed prepayments and incurred but unpaid expenses in the correct period. After adjusted statements are prepared, closing transfers period revenue, expenses and dividends so the new period begins fresh, while asset, liability and permanent equity balances continue."
          ],
          "rules": [
            "Income statement profit → equity changes → ending retained earnings → balance sheet.",
            "Beginning cash + CFO + CFI + CFF = ending cash, assuming no exchange-rate or other separate effects.",
            "Supplementary: revenue, expenses and dividends are period accounts; assets, liabilities and permanent equity balances carry forward."
          ],
          "example": {
            "scenario": "Reworking the lecture’s figures: the repair shop has operating cash flow of 3,400, investing cash flow of −18,000, financing cash flow of 47,900 and beginning cash of zero.",
            "steps": [
              "Net cash movement = 3,400 − 18,000 + 47,900 = 33,300.",
              "Equity = share capital 50,000 + net income 7,300 − dividends 2,100 = 55,200.",
              "Assets 57,000 = liabilities 1,800 + equity 55,200."
            ],
            "conclusion": "Profit of 7,300 differs from the 33,300 cash increase, yet the statements reconcile."
          },
          "pitfalls": [
            "Closing does not empty the bank account.",
            "Adjustments record the correct period; they are not permission to change profit arbitrarily."
          ],
          "questions": [
            {
              "id": "l2-statements-cycle-q1",
              "explanations": [
                "10,000 − 2,700 = 7,300; dividends are excluded from profit.",
                "5,200 is retained earnings after dividends if its beginning balance is zero.",
                "Ignoring expenses overstates net income.",
                "9,400 does not follow revenue minus expenses."
              ],
              "hint": "Exclude dividends from the profit calculation first."
            },
            {
              "id": "l2-statements-cycle-q2",
              "explanations": [
                "Dividends is a period distribution account closed at period-end.",
                "Cash is a permanent asset account whose balance carries forward.",
                "Service Revenue is a period account closed at period-end.",
                "Rent Expense is a period account closed at period-end."
              ],
              "hint": "Separate balance accounts from accounts accumulating this period’s activity."
            }
          ]
        }
      }
    ],
    "descriptionEn": "Start with account classification and debit-credit rules, translate business events into entries, and connect the financial statements."
  }
];
