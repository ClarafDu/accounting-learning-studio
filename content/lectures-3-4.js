// Original teaching explanations and practice. Source slides are not redistributed.
export const lectures34 = [
  {
    "id": "l3",
    "number": 3,
    "title": "认识财务报表",
    "en": "Getting to know the financial statements",
    "description": "建立三张报表的整体框架，读懂利润、财务状况与现金流之间的联系。",
    "source": "Lecture 3.pdf",
    "pages": 74,
    "nodes": [
      {
        "id": "l3-statements",
        "title": "三张报表分别回答什么",
        "en": "Financial statements",
        "pages": [
          5,
          9,
          10,
          18,
          20,
          22,
          24,
          56
        ],
        "prerequisites": [],
        "summary": "利润表看一段时间的表现，资产负债表看一个时点的状态，现金流量表看现金的来去。",
        "explanation": [
          "想了解一家企业，至少要问三件事：这一段时间赚了多少、此刻拥有什么和欠什么、现金究竟从哪里来又花到哪里。三张报表就是分别回答这些问题的工具。",
          "Income Statement（利润表）和 Statement of Cash Flows（现金流量表）覆盖一个期间，像一段录像；Balance Sheet（资产负债表）对应某一天，像一张照片。题目里的 for the year ended 与 as of 是识别报表的重要线索。",
          "三张表连接着同一家企业。利润会影响留存收益，现金净变化会解释期初和期末现金的差额。单看现金减少，不能判断经营失败：现金也可能用于购买长期设备。"
        ],
        "rules": [
          "资产 = 负债 + 权益",
          "期末现金 = 期初现金 + 本期现金净变化（本例忽略汇率影响）"
        ],
        "example": {
          "scenario": "一家公司的年初现金为20，本年净利润为15，全年现金净流出为4。",
          "steps": [
            "利润15说明按权责发生制衡量的本年盈利。",
            "年末现金为20−4=16，不能用净利润直接推算现金。"
          ],
          "conclusion": "利润为15与现金减少4可以同时成立。"
        },
        "pitfalls": [
          "把资产负债表理解为全年累计收入：它反映期末存量，不是收入流量。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Which statement reports financial position at a specific date?",
            "zh": "哪张报表反映特定日期的财务状况？",
            "options": [
              "Statement of cash flows",
              "Sales budget",
              "Balance sheet",
              "Income statement"
            ],
            "answer": 2,
            "explanations": [
              "现金流量表覆盖一个期间的现金收支。",
              "销售预算是计划，不是这三张财务报表之一。",
              "资产负债表列示某日的资产、负债和权益。",
              "利润表覆盖一个期间的收入和费用。"
            ],
            "hint": "留意 position 和 at a specific date。",
            "errorType": "英文理解",
            "id": "l3-statements-q1"
          },
          {
            "prompt": "Cash fell because equipment was purchased. What can be concluded from this fact alone?",
            "zh": "现金因购买设备而减少，仅凭这一事实能得出什么结论？",
            "options": [
              "Revenue must have decreased",
              "Equity must be zero",
              "The company made a loss",
              "Cash decreased, but profitability is not established"
            ],
            "answer": 3,
            "explanations": [
              "设备采购并不能证明销售收入下降。",
              "没有证据表明权益为零。",
              "购买设备不等于确认同额当期费用。",
              "只知道现金减少，还需要利润表等资料判断盈利。"
            ],
            "hint": "现金变化与盈利是两个问题。",
            "errorType": "概念混淆",
            "id": "l3-statements-q2"
          }
        ],
        "english": {
          "summary": "The income statement measures performance over a period, the balance sheet shows a position at one date, and the cash flow statement explains cash movements.",
          "explanation": [
            "To understand a business, ask at least three questions: How much did it earn during this period? What does it own and owe now? Where did cash come from, and where did it go? The three statements are tools for answering these different questions.",
            "The income statement and statement of cash flows cover a period, like a video. The balance sheet relates to one particular date, like a photograph. In a question, “for the year ended” and “as of” are useful clues for identifying which statement is being described.",
            "The statements describe the same business and connect to one another. Profit affects retained earnings, while the net change in cash explains the difference between beginning and ending cash. A decrease in cash alone does not establish business failure: cash may have been spent on long-term equipment."
          ],
          "rules": [
            "Assets = Liabilities + Equity",
            "Ending cash = Beginning cash + Net change in cash during the period (exchange-rate effects are ignored here)"
          ],
          "example": {
            "scenario": "A company begins the year with cash of 20, earns net income of 15, and has a net cash outflow of 4 for the year.",
            "steps": [
              "Profit of 15 measures this year’s earnings on the accrual basis.",
              "Ending cash is 20 − 4 = 16. Net income cannot be used directly to calculate cash."
            ],
            "conclusion": "Profit of 15 and a decrease in cash of 4 can both be correct."
          },
          "pitfalls": [
            "Do not interpret the balance sheet as total revenue accumulated during the year: it reports balances at the reporting date, rather than a revenue flow."
          ],
          "questions": [
            {
              "explanations": [
                "The cash flow statement covers cash receipts and payments over a period.",
                "A sales budget is a plan, rather than one of these three financial statements.",
                "The balance sheet lists assets, liabilities, and equity at a particular date.",
                "The income statement covers revenue and expenses over a period."
              ],
              "hint": "Notice “position” and “at a specific date”.",
              "id": "l3-statements-q1"
            },
            {
              "explanations": [
                "An equipment purchase does not establish that sales revenue decreased.",
                "There is no evidence that equity is zero.",
                "Purchasing equipment does not mean recognizing an equal amount of expense immediately.",
                "We know only that cash decreased; an income statement and other information are needed to assess profitability."
              ],
              "hint": "Cash movements and profitability answer different questions.",
              "id": "l3-statements-q2"
            }
          ]
        }
      },
      {
        "id": "l3-cash-profit",
        "title": "利润为什么不等于现金",
        "en": "Accrual basis versus cash flows",
        "pages": [
          11,
          12,
          13,
          14,
          15,
          16,
          67,
          70,
          71,
          72
        ],
        "prerequisites": [
          "l3-statements"
        ],
        "summary": "确认收入和费用的时间，与收付款时间可以不同。",
        "explanation": [
          "权责发生制（Accrual basis）关心经济活动何时发生、履约何时完成，而现金流关心钱何时实际收到或付出。两条时间轴可能重合，也可能跨期。",
          "例如先交货后收款：履约完成时确认收入和应收账款，之后收款只是把应收账款换成现金。相反，先买入存货后卖出：采购时可能已经付钱，但成本通常要等对应商品售出才转成销售成本。",
          "工资也可能在员工本月提供服务时确认为费用，下月才付钱。因此不能用银行流水直接替代利润表；也不能把所有现金流出都叫费用。以下例子只讨论销售这一条业务，暂不考虑成本和税。"
        ],
        "rules": [
          "赊销：Dr Accounts receivable；Cr Sales revenue",
          "收回欠款：Dr Cash；Cr Accounts receivable"
        ],
        "example": {
          "scenario": "12月完成一项800元服务，客户次年1月付款。",
          "steps": [
            "12月已履约：收入增加800，应收账款增加800；现金不变。",
            "1月收款：现金增加800，应收账款减少800；不再确认这800元收入。"
          ],
          "conclusion": "收入与收款分别在两个期间确认。"
        },
        "pitfalls": [
          "把收款再次记收入：会使同一项履约的收入重复计算。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "A service is completed in December and paid in January. When is revenue recognized, assuming all recognition conditions are met?",
            "zh": "服务12月完成、1月收款，假定满足确认条件，何时确认收入？",
            "options": [
              "Both months in full",
              "Only when profit is distributed",
              "December",
              "January"
            ],
            "answer": 2,
            "explanations": [
              "两次全额确认会重复收入。",
              "分红不决定收入确认。",
              "收入随履约完成确认，发生在12月。",
              "1月是收回应收款的时间。"
            ],
            "hint": "先找履约时间，再找收款时间。",
            "errorType": "确认时点",
            "id": "l3-cash-profit-q1"
          },
          {
            "prompt": "Collecting an existing receivable normally does what?",
            "zh": "收回已有应收账款通常产生什么影响？",
            "options": [
              "Increases a loan payable",
              "Creates inventory",
              "Increases revenue again",
              "Increases cash and decreases receivables"
            ],
            "answer": 3,
            "explanations": [
              "客户付款不是向银行借款。",
              "收款不产生库存商品。",
              "收入已在原交易履约时确认。",
              "两项资产此增彼减，是收款的核心。"
            ],
            "hint": "想想客户还钱前，企业拥有的是什么权利。",
            "errorType": "账户与借贷",
            "id": "l3-cash-profit-q2"
          }
        ],
        "english": {
          "summary": "Revenue and expense recognition may occur at different times from cash receipts and payments.",
          "explanation": [
            "Accrual accounting focuses on when economic activity takes place and performance is completed; cash flows focus on when money is actually received or paid. These timelines may coincide, or they may fall in different periods.",
            "For example, when goods are delivered before payment, the business recognizes revenue and a receivable when the obligation is satisfied. Later collection exchanges that receivable for cash. Conversely, inventory may be purchased and paid for before it is sold; its cost normally becomes cost of goods sold when the related goods are sold.",
            "Wages may also become an expense when employees provide services this month even though payment occurs next month. Bank transactions therefore cannot replace an income statement, and not every cash payment is an expense. The example below considers only the revenue side of a sale and temporarily ignores costs and tax."
          ],
          "rules": [
            "Credit sale: Dr Accounts receivable; Cr Sales revenue",
            "Collection of a receivable: Dr Cash; Cr Accounts receivable"
          ],
          "example": {
            "scenario": "A business completes an 800 service in December. The customer pays in January of the following year.",
            "steps": [
              "Performance is complete in December: revenue and accounts receivable each increase by 800; cash does not change.",
              "In January, cash increases by 800 and accounts receivable decreases by 800. The same 800 is not recognized as revenue again."
            ],
            "conclusion": "Revenue and cash collection are recorded in two different periods."
          },
          "pitfalls": [
            "Recognizing revenue again upon collection would count the same performance twice."
          ],
          "questions": [
            {
              "explanations": [
                "Full recognition in both months would duplicate revenue.",
                "Dividend distribution does not determine revenue recognition.",
                "Revenue is recognized when the obligation is satisfied, which occurs in December.",
                "January is when the receivable is collected."
              ],
              "hint": "Identify the performance date first, then the cash collection date.",
              "id": "l3-cash-profit-q1"
            },
            {
              "explanations": [
                "A customer’s payment is not borrowing from a bank.",
                "Collection does not create goods in inventory.",
                "Revenue was already recognized when the original transaction was performed.",
                "One asset increases while another decreases: that is the essence of collection."
              ],
              "hint": "Before the customer pays, what right does the business hold?",
              "id": "l3-cash-profit-q2"
            }
          ]
        }
      },
      {
        "id": "l3-sales-cost",
        "title": "收入、销售成本与期间费用",
        "en": "Net sales, COGS and operating expenses",
        "pages": [
          27,
          28,
          29,
          30,
          31,
          34
        ],
        "prerequisites": [
          "l3-cash-profit"
        ],
        "summary": "售出商品的成本进入利润表，尚未售出的成本通常仍在存货中。",
        "explanation": [
          "Sales revenue 是出售商品或提供服务形成的收入；Net sales（销售净额）是在销售额基础上扣除销售退回、折让等调整后的数额。收入不是客户转账金额的别名。",
          "商品在尚未售出时通常是 Inventory（存货），代表未来可出售的资源。售出后，其相应账面成本转为 Cost of Goods Sold（COGS，销售成本）。商品与服务并存的企业也可能使用 Cost of Sales Revenue 等名称。",
          "SG&A 是销售、一般及行政费用；R&D 是研发费用。它们与企业运营有关，但在本讲的多步式利润表中，与直接销售成本分开呈现。判断题目中的成本时，先问资源是否已经被出售或消耗，再问它属于哪个费用类别。"
        ],
        "rules": [
          "销售净额 = 销售额 − 销售退回及折让",
          "毛利 = 销售净额 − 销售成本"
        ],
        "example": {
          "scenario": "店铺采购10件商品，每件成本30元；本期以每件50元售出6件，无退货。",
          "steps": [
            "收入为6×50=300。",
            "销售成本为6×30=180；尚未售出的4件成本120留在存货。"
          ],
          "conclusion": "本期毛利120，期末存货120；毛利与存货恰好相同只是本例的巧合。"
        },
        "pitfalls": [
          "把全部采购额作为本期销售成本：未售出的商品成本仍应留在存货。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Ten units cost $30 each; six are sold. What is COGS?",
            "zh": "10件商品每件成本30，售出6件，销售成本是多少？",
            "options": [
              "$50",
              "$300",
              "$180",
              "$120"
            ],
            "answer": 2,
            "explanations": [
              "50若为单价也不是总销售成本。",
              "300是采购总成本，不是已售出部分。",
              "6×30=180，匹配本期售出商品。",
              "120是4件未售商品的成本。"
            ],
            "hint": "只取已售出数量对应的成本。",
            "errorType": "计算",
            "id": "l3-sales-cost-q1"
          },
          {
            "prompt": "Which item normally remains an asset before sale?",
            "zh": "售出前，哪项通常仍是一项资产？",
            "options": [
              "This period's administrative salaries",
              "A dividend paid",
              "Sales revenue",
              "Unsold inventory"
            ],
            "answer": 3,
            "explanations": [
              "本期已消耗的行政服务通常是费用。",
              "分红是向所有者分配，不是资产存量。",
              "收入是期间成果，不是未售资源。",
              "未售存货通常代表未来经济利益。"
            ],
            "hint": "问这项资源是否还可用于未来销售。",
            "errorType": "概念混淆",
            "id": "l3-sales-cost-q2"
          }
        ],
        "english": {
          "summary": "The cost of goods sold enters the income statement; the cost of goods not yet sold normally remains in inventory.",
          "explanation": [
            "Sales revenue arises from selling goods or providing services. Net sales is the amount after adjustments such as sales returns and allowances. Revenue is not simply another name for the amount transferred by customers.",
            "Goods not yet sold normally remain in inventory, representing resources available for future sale. Once sold, their corresponding carrying cost becomes cost of goods sold (COGS). Businesses selling both goods and services may use a label such as cost of sales revenue.",
            "SG&A means selling, general, and administrative expenses; R&D means research and development expenses. These relate to operations but are presented separately from direct cost of sales in this lecture’s multi-step income statement. First ask whether the resource has been sold or consumed, then determine its expense category."
          ],
          "rules": [
            "Net sales = Sales − Sales returns and allowances",
            "Gross profit = Net sales − Cost of sales"
          ],
          "example": {
            "scenario": "A shop purchases 10 units costing 30 each and sells six this period for 50 each, with no returns.",
            "steps": [
              "Revenue is 6 × 50 = 300.",
              "COGS is 6 × 30 = 180. The remaining four units, costing 120, stay in inventory."
            ],
            "conclusion": "Gross profit is 120 and ending inventory is 120. Their equality is only a coincidence in this example."
          },
          "pitfalls": [
            "Do not expense the entire purchase as current-period COGS: the cost of unsold goods remains in inventory."
          ],
          "questions": [
            {
              "explanations": [
                "Even if 50 is the selling price per unit, it is not total COGS.",
                "300 is the total purchase cost, rather than the cost of the units sold.",
                "6 × 30 = 180 matches the goods sold this period.",
                "120 is the cost of the four unsold units."
              ],
              "hint": "Include only the cost associated with units sold.",
              "id": "l3-sales-cost-q1"
            },
            {
              "explanations": [
                "Administrative services already consumed this period normally create an expense.",
                "A dividend distributes value to owners; it is not an asset balance.",
                "Revenue measures a period’s performance, rather than an unsold resource.",
                "Unsold inventory normally represents a future economic benefit."
              ],
              "hint": "Ask whether the resource is still available for future sale.",
              "id": "l3-sales-cost-q2"
            }
          ]
        }
      },
      {
        "id": "l3-profit-ladder",
        "title": "从毛利走到净利润",
        "en": "Gross profit, operating income and net income",
        "pages": [
          30,
          31,
          32,
          33,
          35,
          36,
          37,
          38,
          40
        ],
        "prerequisites": [
          "l3-sales-cost"
        ],
        "summary": "不同利润小计依次扣除不同费用，不能混用。",
        "explanation": [
          "多步式利润表（Multiple-step income statement）不是一串随意排列的数字，它按层次展示利润如何形成。销售净额扣销售成本得到 Gross profit（毛利），让你先看到销售本身留下多少。",
          "毛利再扣经营费用，得到 Operating income（营业利润）。再考虑本讲表式中的其他收入费用、利息等，得到税前利润；扣所得税费用后得到 Net income（净利润）。每往下一层，回答的问题更完整。",
          "公开公司的报表还会披露 Earnings per Share（EPS，每股收益）。它把归属于普通股股东的收益与股份数量联系起来，不是收入除以人数。不同公司的项目名称和呈现可不同，读题时要以给定表式与范围为准。"
        ],
        "rules": [
          "毛利 = 销售净额 − 销售成本",
          "营业利润 = 毛利 − 本题给定的经营费用",
          "净利润 = 税前利润 − 所得税费用"
        ],
        "example": {
          "scenario": "假设收入1000，销售成本600，经营费用250，利息30，所得税24，无其他项目。",
          "steps": [
            "毛利=1000−600=400。",
            "营业利润=400−250=150；税前利润=150−30=120。",
            "净利润=120−24=96。"
          ],
          "conclusion": "毛利400、营业利润150和净利润96分别代表不同层次。"
        },
        "pitfalls": [
          "把毛利称为最终净赚金额：毛利还没有扣除全部费用。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Sales are $1,000, COGS $600 and operating expenses $250. What is operating income?",
            "zh": "收入1000、销售成本600、经营费用250，营业利润是多少？",
            "options": [
              "$400",
              "$150",
              "$750",
              "$1,000"
            ],
            "answer": 1,
            "explanations": [
              "400是毛利，还没扣经营费用。",
              "1000−600−250=150。",
              "750仅扣了经营费用，漏掉销售成本。",
              "1000是收入。"
            ],
            "hint": "先求毛利，再扣经营费用。",
            "errorType": "计算",
            "id": "l3-profit-ladder-q1"
          },
          {
            "prompt": "Which subtotal is after income tax expense?",
            "zh": "哪个利润小计已经扣除所得税费用？",
            "options": [
              "Net income",
              "Net sales",
              "Gross profit",
              "Operating income"
            ],
            "answer": 0,
            "explanations": [
              "净利润是扣除所得税后的最终利润。",
              "销售净额是收入层面项目。",
              "毛利仅扣销售成本。",
              "营业利润通常尚未扣所得税。"
            ],
            "hint": "从利润表最下面往上找。",
            "errorType": "英文理解",
            "id": "l3-profit-ladder-q2"
          }
        ],
        "english": {
          "summary": "Different profit subtotals deduct different expenses and should not be used interchangeably.",
          "explanation": [
            "A multiple-step income statement is not an arbitrary list of numbers. It shows how profit is formed in stages. Net sales less cost of sales gives gross profit, showing what remains from sales before other expenses.",
            "Gross profit less operating expenses gives operating income. After other income and expenses, interest, and similar items in the lecture’s format, the result is profit before tax. Deducting income tax expense gives net income. Each successive subtotal answers a broader earnings question.",
            "Public companies also disclose earnings per share (EPS). EPS links earnings attributable to ordinary shareholders with the number of shares; it is not revenue divided by a headcount. Companies may use different labels and presentation formats, so follow the format and scope specified in the question."
          ],
          "rules": [
            "Gross profit = Net sales − Cost of sales",
            "Operating income = Gross profit − Operating expenses specified in the question",
            "Net income = Profit before tax − Income tax expense"
          ],
          "example": {
            "scenario": "Assume revenue of 1,000, COGS of 600, operating expenses of 250, interest of 30, and income tax of 24, with no other items.",
            "steps": [
              "Gross profit = 1,000 − 600 = 400.",
              "Operating income = 400 − 250 = 150; profit before tax = 150 − 30 = 120.",
              "Net income = 120 − 24 = 96."
            ],
            "conclusion": "Gross profit of 400, operating income of 150, and net income of 96 represent different earnings levels."
          },
          "pitfalls": [
            "Do not call gross profit the final amount earned: not all expenses have been deducted yet."
          ],
          "questions": [
            {
              "explanations": [
                "400 is gross profit, before operating expenses.",
                "1,000 − 600 − 250 = 150.",
                "750 deducts operating expenses but omits COGS.",
                "1,000 is revenue."
              ],
              "hint": "Calculate gross profit first, then deduct operating expenses.",
              "id": "l3-profit-ladder-q1"
            },
            {
              "explanations": [
                "Net income is the final profit after income tax.",
                "Net sales is a revenue measure.",
                "Gross profit deducts only cost of sales.",
                "Operating income is normally before income tax."
              ],
              "hint": "Work upward from the bottom of the income statement.",
              "id": "l3-profit-ladder-q2"
            }
          ]
        }
      },
      {
        "id": "l3-assets",
        "title": "资产如何分类",
        "en": "Current assets and non-current assets",
        "pages": [
          43,
          44,
          45,
          46,
          49,
          50
        ],
        "prerequisites": [
          "l3-statements"
        ],
        "summary": "资产分类主要看变现、出售或耗用的时间与用途。",
        "explanation": [
          "Current assets（流动资产）通常包括在正常营业周期内变现、出售或消耗的资源，以及符合流动分类的其他短期资产。基础题经常使用一年作为判断界线，但不能因此忽略正常营业周期。",
          "Cash and equivalents 是现金与现金等价物；A/R 是对客户的收款权；Inventory 是待售商品；Prepaid expenses 是已付款但尚未消耗的服务。现金等价物还要求短期、高流动性且价值变化风险很小，不能把所有三个月内到期投资都自动归入。",
          "Non-current assets（非流动资产）支持较长期活动。PP&E 指房屋、机器和设备等有形资产；专利等无形资源则可能归入 Intangible assets。分类不是看金额大小：昂贵存货仍可能是流动资产，低价但长期使用的设备也可能是非流动资产。"
        ],
        "rules": [
          "正常营业周期内出售或耗用的存货通常归流动资产",
          "PP&E 和符合确认条件的长期无形资产通常归非流动资产"
        ],
        "example": {
          "scenario": "一家商店有现金5万、应收款2万、待售商品3万、使用多年的设备8万。",
          "steps": [
            "现金、应收款及正常周期内待售商品共10万，属于流动资产。",
            "设备用于多年经营，8万归非流动资产，而不是待售存货。"
          ],
          "conclusion": "资产分类同时考虑用途与时间。"
        },
        "pitfalls": [
          "“金额大就是非流动”：分类不以金额大小决定。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "A retailer holds goods for sale in its normal operating cycle. They are normally classified as what?",
            "zh": "零售商在正常营业周期内持有待售商品，通常如何分类？",
            "options": [
              "Non-current liabilities",
              "Equity",
              "Revenue",
              "Current assets"
            ],
            "answer": 3,
            "explanations": [
              "不是向外部承担的义务。",
              "存货是资源，不能直接等同权益。",
              "未售商品不是已确认收入。",
              "待售商品是流动资产中的存货。"
            ],
            "hint": "先识别它是存货。",
            "errorType": "概念混淆",
            "id": "l3-assets-q1"
          },
          {
            "prompt": "Which is normally a non-current asset?",
            "zh": "哪项通常属于非流动资产？",
            "options": [
              "Cash on hand",
              "Accounts receivable due next month",
              "A machine used for several years",
              "Inventory for next week's sales"
            ],
            "answer": 2,
            "explanations": [
              "现金通常为流动资产。",
              "下月收回的客户欠款通常为流动资产。",
              "长期使用的机器通常归PP&E。",
              "短期出售存货通常为流动资产。"
            ],
            "hint": "看资源是用于长期经营还是短期周转。",
            "errorType": "概念混淆",
            "id": "l3-assets-q2"
          }
        ],
        "english": {
          "summary": "Asset classification depends mainly on the timing and purpose of realization, sale, or consumption.",
          "explanation": [
            "Current assets normally include resources realized, sold, or consumed within the normal operating cycle, together with other short-term assets that meet current-classification requirements. Basic questions often use one year as a boundary, but the normal operating cycle must not be overlooked.",
            "Cash and equivalents include cash and qualifying cash equivalents; A/R is a right to collect from customers; inventory comprises goods held for sale; prepaid expenses represent services paid for but not yet consumed. Cash equivalents must also be short-term, highly liquid, and subject to an insignificant risk of value changes. An investment is not automatically a cash equivalent merely because it matures within three months.",
            "Non-current assets support longer-term activities. PP&E includes tangible assets such as buildings, machinery, and equipment; resources such as patents may qualify as intangible assets. Classification is not based on size: expensive inventory can still be current, and a cheaper machine used for years can be non-current."
          ],
          "rules": [
            "Inventory sold or consumed within the normal operating cycle is normally a current asset",
            "PP&E and qualifying long-term intangible assets are normally non-current assets"
          ],
          "example": {
            "scenario": "A shop has cash of 50,000, receivables of 20,000, goods held for sale of 30,000, and equipment used for several years of 80,000.",
            "steps": [
              "Cash, receivables, and goods for sale within the normal cycle total 100,000 in current assets.",
              "The equipment supports operations over several years, so its 80,000 is non-current rather than goods held for sale."
            ],
            "conclusion": "Asset classification considers both purpose and timing."
          },
          "pitfalls": [
            "“A large amount means non-current” is incorrect: the amount alone does not determine classification."
          ],
          "questions": [
            {
              "explanations": [
                "They are not obligations owed to outside parties.",
                "Inventory is a resource and cannot simply be equated with equity.",
                "Unsold goods are not recognized revenue.",
                "Goods held for sale are inventory within current assets."
              ],
              "hint": "First identify the item as inventory.",
              "id": "l3-assets-q1"
            },
            {
              "explanations": [
                "Cash is normally a current asset.",
                "A customer receivable due next month is normally current.",
                "A machine used over the long term normally belongs in PP&E.",
                "Inventory to be sold soon is normally current."
              ],
              "hint": "Is the resource for long-term operations or short-term turnover?",
              "id": "l3-assets-q2"
            }
          ]
        }
      },
      {
        "id": "l3-liabilities-equity",
        "title": "欠款、预收款与股东权益",
        "en": "Liabilities and shareholders’ equity",
        "pages": [
          47,
          48,
          51,
          52,
          53,
          54
        ],
        "prerequisites": [
          "l3-assets"
        ],
        "summary": "客户先付款可能形成负债；股东投入和累计留存利润则构成权益的重要部分。",
        "explanation": [
          "Liability（负债）代表企业现有的义务。Accounts payable 是应付供应商款项；Accrued liabilities 是费用已经发生但尚未支付的义务；借款则可能分为短期部分与长期部分。基础分类题通常把一年内到期的义务归为流动负债。",
          "收到客户的钱不一定赚到了收入。如果商品或服务尚未交付，企业仍欠客户履约，这笔预收款通常形成 Deferred revenue 或 Contract liability（递延收入／合同负债）。对客户而言可能是预付款，对供应商而言则是履约义务。",
          "Equity（权益）是扣除负债后的剩余权益。Contributed capital 来自所有者投入；Retained earnings 来自历年利润的累计留存。留存收益不是保险柜里单独存放的一笔现金，企业可能已把资金用于设备或存货。"
        ],
        "rules": [
          "期末留存收益 = 期初留存收益 + 净利润 − 股利（本题无其他调整）",
          "未履约而预收客户款：Dr Cash；Cr Contract liability"
        ],
        "example": {
          "scenario": "年初留存收益40，本年净利润18，向股东分红5；另收到下年服务预付款12。",
          "steps": [
            "留存收益期末为40+18−5=53。",
            "12的预收款尚未履约，应作为负债，不加入本期收入。"
          ],
          "conclusion": "留存收益53；预收服务款形成12的履约义务。"
        },
        "pitfalls": [
          "“收到钱所以负债减少”：客户预付会增加企业尚待履行的义务。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Cash is received for services to be provided next year. What is normally credited now?",
            "zh": "收到下年才提供服务的款项，现在通常贷记什么？",
            "options": [
              "Inventory",
              "Dividend expense",
              "Revenue",
              "Contract liability"
            ],
            "answer": 3,
            "explanations": [
              "收到服务预付款不产生库存商品。",
              "分红不是这项交易，也不是费用。",
              "服务未履约，不能仅因收款确认收入。",
              "预收款对应未来履约义务。"
            ],
            "hint": "企业此时还欠客户什么？",
            "errorType": "账户与借贷",
            "id": "l3-liabilities-equity-q1"
          },
          {
            "prompt": "Beginning retained earnings are $40, profit is $18 and dividends are $5. Ending retained earnings are?",
            "zh": "期初留存收益40、利润18、股利5，期末留存收益是多少？",
            "options": [
              "$18",
              "$63",
              "$53",
              "$23"
            ],
            "answer": 2,
            "explanations": [
              "18只是本期利润。",
              "把股利加上去了；股利应扣减留存收益。",
              "40+18−5=53。",
              "遗漏了期初留存收益的影响。"
            ],
            "hint": "留存收益是累计余额。",
            "errorType": "计算",
            "id": "l3-liabilities-equity-q2"
          }
        ],
        "english": {
          "summary": "Customer advances can create liabilities; owner contributions and accumulated retained profits are important components of equity.",
          "explanation": [
            "A liability represents a present obligation of the business. Accounts payable are amounts owed to suppliers; accrued liabilities arise when expenses have occurred but remain unpaid; borrowings may have both short-term and long-term portions. Basic classification questions normally treat obligations due within one year as current.",
            "Receiving money from customers does not necessarily mean revenue has been earned. If goods or services have not been delivered, the business still owes performance. Such advances normally create deferred revenue or a contract liability. What is a prepayment for the customer can be a performance obligation for the supplier.",
            "Equity is the residual interest after liabilities are deducted from assets. Contributed capital comes from owners’ investments; retained earnings accumulate profits kept in the business over time. Retained earnings is not a separate pile of cash in a safe: funds may already have been used for equipment or inventory."
          ],
          "rules": [
            "Ending retained earnings = Beginning retained earnings + Net income − Dividends (no other adjustments in this question)",
            "Customer advance before performance: Dr Cash; Cr Contract liability"
          ],
          "example": {
            "scenario": "Beginning retained earnings are 40, current-year net income is 18, and dividends are 5. The business also receives 12 for services to be provided next year.",
            "steps": [
              "Ending retained earnings = 40 + 18 − 5 = 53.",
              "The 12 advance relates to unperformed services and is recorded as a liability, not current revenue."
            ],
            "conclusion": "Retained earnings are 53; the service advance creates an obligation of 12."
          },
          "pitfalls": [
            "“Receiving cash must reduce liabilities” is incorrect: customer advances increase obligations that remain to be performed."
          ],
          "questions": [
            {
              "explanations": [
                "A service advance does not create goods in inventory.",
                "A dividend is unrelated to this transaction and is not an expense.",
                "The service has not been performed, so cash receipt alone is insufficient for revenue.",
                "The advance represents a future performance obligation."
              ],
              "hint": "What does the business still owe the customer?",
              "id": "l3-liabilities-equity-q1"
            },
            {
              "explanations": [
                "18 is current-period profit only.",
                "This adds dividends, but dividends should reduce retained earnings.",
                "40 + 18 − 5 = 53.",
                "This omits the effect of beginning retained earnings."
              ],
              "hint": "Retained earnings is an accumulated balance.",
              "id": "l3-liabilities-equity-q2"
            }
          ]
        }
      },
      {
        "id": "l3-depreciation",
        "title": "累计折旧为什么是抵减资产",
        "en": "Depreciation and contra-asset",
        "pages": [
          31,
          50,
          58,
          67
        ],
        "prerequisites": [
          "l3-assets",
          "l3-cash-profit"
        ],
        "summary": "折旧分摊成本，累计折旧抵减资产账面原值，并不是一笔欠款。",
        "explanation": [
          "购买一台能使用多年的机器时，通常先确认资产，而不是立即把全部价格记为当期费用。Depreciation（折旧）把可折旧成本分配到资产受益的期间，体现本期消耗了多少使用能力。",
          "Accumulated depreciation（累计折旧）汇总已经计提的折旧，通常为贷方余额，是 Contra-asset（资产抵减账户）。原值与累计折旧并列展示，让读者同时看到原始成本和已分摊成本；两者相减是净账面金额。",
          "本期确认折旧一般不产生同额现金流出，购买设备时才可能已经支付现金。因此在间接法现金流量表里，需要把已扣减净利润的折旧加回。加回不是创造现金，而是撤销净利润里这笔非现金费用的影响。"
        ],
        "rules": [
          "PP&E净额 = PP&E原值 − 累计折旧",
          "简化直线法年折旧 =（成本 − 残值）÷ 使用年限"
        ],
        "example": {
          "scenario": "补充练习：机器成本12000，预计残值2000，使用5年；无减值、无处置，采用直线法。",
          "steps": [
            "每年折旧=(12000−2000)÷5=2000。",
            "使用2年后累计折旧4000，账面净额8000。"
          ],
          "conclusion": "第二年折旧费用2000与期末累计折旧4000是流量与累计存量的区别。"
        },
        "pitfalls": [
          "累计折旧是负债：它抵减资产，不代表对外偿债义务。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Equipment cost is $12,000 and accumulated depreciation is $4,000. What is its carrying amount?",
            "zh": "设备原值12000、累计折旧4000，账面净额是多少？",
            "options": [
              "$4,000",
              "$16,000",
              "$12,000",
              "$8,000"
            ],
            "answer": 3,
            "explanations": [
              "4000是累计折旧，不是净额。",
              "应减累计折旧而不是加。",
              "原值未扣已分摊部分。",
              "12000−4000=8000。"
            ],
            "hint": "看净额公式。",
            "errorType": "计算",
            "id": "l3-depreciation-q1"
          },
          {
            "prompt": "Why is depreciation added back under the indirect cash flow method?",
            "zh": "为什么间接法要加回折旧？",
            "options": [
              "It increases sales revenue",
              "It is new cash from customers",
              "It reduced profit without a current cash payment",
              "It is a financing inflow"
            ],
            "answer": 2,
            "explanations": [
              "折旧与销售收入增加无关。",
              "加回折旧并没有客户付款。",
              "折旧已扣减利润，但本期计提时未付现金。",
              "折旧不是筹资活动。"
            ],
            "hint": "这是从利润向现金的调整。",
            "errorType": "概念混淆",
            "id": "l3-depreciation-q2"
          }
        ],
        "english": {
          "summary": "Depreciation allocates cost, and accumulated depreciation reduces the recorded asset cost rather than representing a debt.",
          "explanation": [
            "When a machine can be used for several years, its purchase is normally recorded initially as an asset rather than expensed in full immediately. Depreciation allocates depreciable cost to the periods benefiting from the asset, reflecting the use of its service potential during the period.",
            "Accumulated depreciation totals depreciation recorded to date. It normally has a credit balance and is a contra-asset account. Showing cost and accumulated depreciation separately lets readers see both the original amount and the portion already allocated. Their difference is the net carrying amount.",
            "Recording depreciation normally does not cause an equal cash payment at that time; cash may have been paid when the equipment was acquired. The indirect cash flow method therefore adds back depreciation already deducted in net income. The adjustment does not create cash: it removes the effect of a non-cash expense from profit."
          ],
          "rules": [
            "Net PP&E = PP&E at cost − Accumulated depreciation",
            "Simplified annual straight-line depreciation = (Cost − Residual value) ÷ Useful life"
          ],
          "example": {
            "scenario": "Supplementary practice: a machine costs 12,000, has estimated residual value of 2,000, and a useful life of five years. Use straight-line depreciation with no impairment or disposal.",
            "steps": [
              "Annual depreciation = (12,000 − 2,000) ÷ 5 = 2,000.",
              "After two years, accumulated depreciation is 4,000 and the carrying amount is 8,000."
            ],
            "conclusion": "Second-year depreciation expense of 2,000 is a period flow; ending accumulated depreciation of 4,000 is an accumulated balance."
          },
          "pitfalls": [
            "Accumulated depreciation is not a liability. It reduces an asset rather than representing an obligation to repay an outside party."
          ],
          "questions": [
            {
              "explanations": [
                "4,000 is accumulated depreciation, not the carrying amount.",
                "Subtract accumulated depreciation rather than adding it.",
                "Cost has not yet been reduced by the allocated amount.",
                "12,000 − 4,000 = 8,000."
              ],
              "hint": "Use the net carrying amount formula.",
              "id": "l3-depreciation-q1"
            },
            {
              "explanations": [
                "Depreciation does not increase sales revenue.",
                "Adding depreciation back does not involve a customer payment.",
                "Depreciation reduced profit, but recording it did not cause a current cash payment.",
                "Depreciation is not a financing activity."
              ],
              "hint": "This is an adjustment from profit to cash.",
              "id": "l3-depreciation-q2"
            }
          ]
        }
      },
      {
        "id": "l3-cash-flow",
        "title": "现金流分类与报表勾稽",
        "en": "CFO, CFI, CFF and the indirect method",
        "pages": [
          18,
          19,
          20,
          58,
          59,
          62,
          63,
          64,
          65,
          66,
          73,
          74
        ],
        "prerequisites": [
          "l3-depreciation",
          "l3-liabilities-equity"
        ],
        "summary": "先分清经营、投资和筹资，再把利润调整成经营现金流。",
        "explanation": [
          "Cash flows from operating activities（CFO）反映主要经营活动现金收支；Investing（CFI）通常包括购置或出售长期资产；Financing（CFF）涉及股东与债权人提供或收回资金。收到银行借款不是销售收入，支付股利也不是经营费用。",
          "间接法从净利润出发：先调整折旧等非现金项目，再调整经营性资产、负债的变化。在简化条件下，应收账款增加说明已确认收入但还没收到相应现金，要减去；应付账款增加说明费用或采购相关款项尚未付出，要加上。实际报表还需要识别非经营变化等因素，不能机械套符号。",
          "三类现金流相加解释现金净变化，再加期初现金得到期末现金。这个期末现金应与资产负债表对上。以下练习不包含汇率影响、处置损益、减值和其他调整。"
        ],
        "rules": [
          "简化CFO = 净利润 + 非现金费用 − 经营性流动资产增加 + 经营性流动负债增加",
          "期末现金 = 期初现金 + CFO + CFI + CFF（忽略汇率等影响）"
        ],
        "example": {
          "scenario": "净利润100，折旧20，应收账款增加15，应付账款增加5，无其他经营调整；购设备付60，借款收40，期初现金30。",
          "steps": [
            "CFO=100+20−15+5=110。",
            "CFI=−60；CFF=+40；现金净增加90。",
            "期末现金=30+90=120，应与资产负债表现金勾稽。"
          ],
          "conclusion": "利润100、CFO110、现金净增加90，各有不同含义。"
        },
        "pitfalls": [
          "把应收增加当作现金流入：应收增加意味着更多收入尚未变成现金。",
          "利息与股利的现金流分类可能受准则及政策影响；不把某一课件表式当成所有体系的唯一规则。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Cash paid to purchase long-term equipment is normally classified as what?",
            "zh": "支付现金购买长期设备，通常属于什么现金流？",
            "options": [
              "Investing outflow",
              "Financing inflow",
              "Sales revenue",
              "Operating outflow"
            ],
            "answer": 0,
            "explanations": [
              "购置长期资产通常是投资活动现金流出。",
              "没有发生筹资流入。",
              "购买设备不产生销售收入。",
              "设备购置是长期投资而非日常经营付款。"
            ],
            "hint": "看现金用于日常运营、长期资产还是资金筹措。",
            "errorType": "概念混淆",
            "id": "l3-cash-flow-q1"
          },
          {
            "prompt": "Net income is $100; depreciation is $20; receivables rise $15; payables rise $5. With no other adjustments, CFO is?",
            "zh": "净利润100、折旧20、应收增加15、应付增加5，无其他调整，CFO是多少？",
            "options": [
              "$140",
              "$110",
              "$80",
              "$100"
            ],
            "answer": 1,
            "explanations": [
              "应收增加应减，不应加。",
              "100+20−15+5=110。",
              "未正确加回折旧并处理应付变化。",
              "遗漏了非现金与营运资金调整。"
            ],
            "hint": "从利润出发，问哪些钱尚未收、哪些钱尚未付。",
            "errorType": "计算",
            "id": "l3-cash-flow-q2"
          }
        ],
        "english": {
          "summary": "Classify operating, investing, and financing cash flows, then reconcile profit to operating cash flow.",
          "explanation": [
            "Cash flows from operating activities (CFO) reflect cash receipts and payments from principal business operations. Investing activities (CFI) normally include buying and selling long-term assets. Financing activities (CFF) involve funds provided or withdrawn by owners and lenders. A bank loan is not sales revenue, and a dividend is not an operating expense.",
            "The indirect method begins with net income, adjusts for non-cash items such as depreciation, and then adjusts changes in operating assets and liabilities. In a simplified setting, an increase in receivables means revenue has not yet generated corresponding cash and is subtracted. An increase in payables means relevant costs or purchases have not yet been paid and is added. Actual statements also require identifying non-operating changes and other factors; the signs should not be applied mechanically.",
            "The three categories sum to the net change in cash. Adding that change to beginning cash gives ending cash, which should agree with cash on the balance sheet. The following exercise excludes exchange-rate effects, disposal gains or losses, impairment, and other adjustments."
          ],
          "rules": [
            "Simplified CFO = Net income + Non-cash expenses − Increase in operating current assets + Increase in operating current liabilities",
            "Ending cash = Beginning cash + CFO + CFI + CFF (ignoring exchange-rate effects and similar items)"
          ],
          "example": {
            "scenario": "Net income is 100, depreciation 20, receivables increase by 15, and payables increase by 5, with no other operating adjustments. Equipment purchases require cash of 60, borrowings provide 40, and beginning cash is 30.",
            "steps": [
              "CFO = 100 + 20 − 15 + 5 = 110.",
              "CFI = −60; CFF = +40; net cash increase = 90.",
              "Ending cash = 30 + 90 = 120, which should reconcile with balance-sheet cash."
            ],
            "conclusion": "Profit of 100, CFO of 110, and a net cash increase of 90 each have distinct meanings."
          },
          "pitfalls": [
            "Do not treat an increase in receivables as a cash inflow: it means more recognized revenue remains uncollected.",
            "Classification of interest and dividends may depend on accounting standards and policies. A single lecture format is not a universal rule across all reporting frameworks."
          ],
          "questions": [
            {
              "explanations": [
                "Buying a long-term asset normally creates an investing cash outflow.",
                "No financing inflow occurs.",
                "Purchasing equipment does not generate sales revenue.",
                "An equipment purchase is a long-term investment rather than an ordinary operating payment."
              ],
              "hint": "Was cash used in operations, long-term assets, or financing?",
              "id": "l3-cash-flow-q1"
            },
            {
              "explanations": [
                "An increase in receivables should be subtracted, not added.",
                "100 + 20 − 15 + 5 = 110.",
                "This does not correctly add depreciation back and handle the payable change.",
                "This omits non-cash and working-capital adjustments."
              ],
              "hint": "Start with profit; ask what cash remains uncollected or unpaid.",
              "id": "l3-cash-flow-q2"
            }
          ]
        }
      }
    ],
    "descriptionEn": "Build an integrated understanding of the three financial statements and the connections between profit, financial position, and cash flows."
  },
  {
    "id": "l4",
    "number": 4,
    "title": "收入与应收账款",
    "en": "Sales revenue and accounts receivable",
    "description": "贯通赊销与收款，逐步掌握收入五步法、合同资产及确认时点。",
    "source": "Lecture 4.pdf",
    "pages": 61,
    "nodes": [
      {
        "id": "l4-credit-sales",
        "title": "赊销与收款之间的桥梁",
        "en": "Credit sales and accounts receivable",
        "pages": [
          8,
          9,
          10,
          11,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20
        ],
        "prerequisites": [],
        "summary": "应收账款是已履约销售与现金收回之间尚未完成的部分。",
        "explanation": [
          "当企业已满足收入确认条件、允许客户之后付款时，会确认销售收入与应收账款。利润表记录本期间履约形成的收入，资产负债表记录截至期末仍未收回的款项。",
          "之后收款会减少应收账款、增加现金，而不是再增加收入。同一客户可能同时有本年和上年的欠款，因此期末应收余额也可能含以前期间销售形成的款项，不能总说它只是本年收入的一部分。",
          "在没有坏账、退货、汇率及其他变动的简化条件下，可以用应收账款的期初余额，加赊销、减收款，推出期末余额。课件的均匀周销售例子便是在这些假设下理解收款滞后。"
        ],
        "rules": [
          "期末A/R = 期初A/R + 本期赊销 − 本期收款（无其他变化）",
          "本期客户收款 = 本期赊销 − A/R增加（全部销售为赊销且无其他变化）"
        ],
        "example": {
          "scenario": "期初应收200，本期全部赊销1000，本期收回客户款900，无其他变动。",
          "steps": [
            "期末应收=200+1000−900=300。",
            "应收增加100，解释本期收入1000为何比收款900多100。"
          ],
          "conclusion": "利润表收入1000、收款900和期末应收300可以同时正确。"
        },
        "pitfalls": [
          "把期末应收当成本期收入：应收是某日余额，收入是期间流量。"
        ],
        "related": [],
        "lab": "revenue",
        "questions": [
          {
            "prompt": "Beginning A/R is $200, credit sales are $1,000 and collections are $900. Ending A/R is?",
            "zh": "期初应收200、赊销1000、收款900，期末应收是多少？",
            "options": [
              "$100",
              "$300",
              "$900",
              "$1,100"
            ],
            "answer": 1,
            "explanations": [
              "100只是应收增加额。",
              "200+1000−900=300。",
              "900是本期收款。",
              "没有正确减去收款。"
            ],
            "hint": "按应收账户的增加与减少列式。",
            "errorType": "计算",
            "id": "l4-credit-sales-q1"
          },
          {
            "prompt": "A customer pays for a sale recorded last month. Which entry is appropriate?",
            "zh": "客户支付上月已记录销售的款项，应做什么分录？",
            "options": [
              "Dr Cash; Cr A/R",
              "Dr Expense; Cr Cash",
              "Dr Cash; Cr Revenue",
              "Dr A/R; Cr Cash"
            ],
            "answer": 0,
            "explanations": [
              "现金增加，应收减少。",
              "收款不是确认费用。",
              "会重复确认上月收入。",
              "这会增加欠款并减少现金，方向相反。"
            ],
            "hint": "之前已经确认收入，现在只是在收回权利。",
            "errorType": "账户与借贷",
            "id": "l4-credit-sales-q2"
          }
        ],
        "english": {
          "summary": "Receivables bridge revenue from completed credit sales and the cash not yet collected.",
          "explanation": [
            "When revenue recognition conditions have been met and the customer is allowed to pay later, the business recognizes revenue and accounts receivable. The income statement records revenue earned during the period; the balance sheet records the amount still uncollected at the reporting date.",
            "Later collection decreases receivables and increases cash, rather than increasing revenue again. A customer may owe amounts from both this year and prior years. Ending receivables may therefore include older sales and cannot always be described as only a portion of current-year revenue.",
            "With no bad debts, returns, exchange-rate effects, or other changes, beginning receivables plus credit sales less collections equals ending receivables. The lecture’s uniform weekly-sales example uses simplifying assumptions of this kind to explain the collection lag."
          ],
          "rules": [
            "Ending A/R = Beginning A/R + Credit sales − Collections (with no other changes)",
            "Customer collections = Credit sales − Increase in A/R (all sales are on credit and there are no other changes)"
          ],
          "example": {
            "scenario": "Beginning receivables are 200, all current sales of 1,000 are on credit, and customer collections are 900, with no other changes.",
            "steps": [
              "Ending receivables = 200 + 1,000 − 900 = 300.",
              "The increase of 100 in receivables explains why revenue of 1,000 exceeds collections of 900 by 100."
            ],
            "conclusion": "Revenue of 1,000, collections of 900, and ending receivables of 300 can all be correct."
          },
          "pitfalls": [
            "Do not equate ending receivables with current-period revenue: receivables are a balance at a date, while revenue is a flow over a period."
          ],
          "questions": [
            {
              "explanations": [
                "100 is only the increase in receivables.",
                "200 + 1,000 − 900 = 300.",
                "900 is current-period collections.",
                "This does not correctly subtract collections."
              ],
              "hint": "List increases and decreases in the receivables account.",
              "id": "l4-credit-sales-q1"
            },
            {
              "explanations": [
                "Cash increases and receivables decrease.",
                "Collection is not an expense.",
                "This would recognize last month’s revenue a second time.",
                "This increases the debt and reduces cash, reversing the actual effects."
              ],
              "hint": "Revenue was recorded before; now the business is collecting its right.",
              "id": "l4-credit-sales-q2"
            }
          ]
        }
      },
      {
        "id": "l4-receivable-days",
        "title": "应收周转率与收款天数",
        "en": "A/R turnover and collection days",
        "pages": [
          21,
          22,
          23,
          24,
          25,
          26,
          27
        ],
        "prerequisites": [
          "l4-credit-sales"
        ],
        "summary": "用平均应收衡量资金周转，同时结合信用政策解释变化。",
        "explanation": [
          "A/R turnover（应收账款周转率）把一年的销售与平均应收余额比较，帮助理解应收资金一年大约周转几次。课件使用销售收入作分子；补充说明：当资料区分现销与赊销时，应优先使用与应收相匹配的净赊销额。",
          "Average A/R 可用期初与期末余额的平均值近似。Collection days 通常按365除以年周转率计算，表示平均收款时间的估计。它不是每个客户真实付款天数，也不是只用期末余额算出的精确滞后期。",
          "收款变慢可能来自放宽账期、客户支付能力变化或销售结构变化。应收占用的资金也需要由债务或权益支持，具有成本。但不能仅凭天数较短就断定企业更好，要结合行业、季节性和信用政策。"
        ],
        "rules": [
          "平均A/R =（期初A/R + 期末A/R）÷2",
          "A/R周转率 = 年销售收入 ÷ 平均A/R（采用课件口径）",
          "收款天数 = 365 ÷ 年周转率"
        ],
        "example": {
          "scenario": "年销售7300，期初应收600，期末应收860；采用课件销售口径和365天。",
          "steps": [
            "平均应收=(600+860)÷2=730。",
            "周转率=7300÷730=10次；收款天数=365÷10=36.5天。"
          ],
          "conclusion": "平均收款天数估计为36.5天，需要与企业账期比较。"
        },
        "pitfalls": [
          "用期末应收替代平均应收而不说明：会改变指标口径。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Annual sales are $7,300; beginning A/R is $600 and ending A/R $860. Using the lecture formula, turnover is?",
            "zh": "年销售7300、期初应收600、期末860，按课件公式周转率是多少？",
            "options": [
              "36.5 times",
              "8.49 times",
              "12.17 times",
              "10 times"
            ],
            "answer": 3,
            "explanations": [
              "36.5是天数，不是次数。",
              "这是只用期末余额的结果。",
              "这是只用期初余额的结果。",
              "7300÷((600+860)/2)=10。"
            ],
            "hint": "分母使用平均余额。",
            "errorType": "计算",
            "id": "l4-receivable-days-q1"
          },
          {
            "prompt": "Collection days increase sharply. What is the best first interpretation?",
            "zh": "收款天数明显增加，最恰当的初步解释是什么？",
            "options": [
              "All receivables are worthless",
              "Fraud is proven",
              "Credit terms or customer payment behavior may have changed",
              "Revenue must be zero"
            ],
            "answer": 2,
            "explanations": [
              "收款变慢不能证明全部无法收回。",
              "该指标不能单独证明造假。",
              "信用条件或客户付款表现变化都值得核查。",
              "收款速度与收入为零并无必然联系。"
            ],
            "hint": "指标是分析线索，不是唯一结论。",
            "errorType": "概念混淆",
            "id": "l4-receivable-days-q2"
          }
        ],
        "english": {
          "summary": "Use average receivables to assess turnover, and interpret changes alongside credit policies.",
          "explanation": [
            "A/R turnover compares annual sales with the average receivable balance, helping estimate how often receivables turn over during the year. The lecture uses sales revenue in the numerator. Supplementary clarification: when cash and credit sales are separately available, net credit sales better match the receivables being assessed.",
            "Average A/R can be approximated by averaging beginning and ending balances. Collection days is normally 365 divided by annual turnover and estimates average collection time. It is not the actual payment time for every customer, nor a precise lag calculated from ending receivables alone.",
            "Slower collection may reflect more generous credit terms, changes in customers’ ability to pay, or a different sales mix. Receivables also tie up funds that must be supported by debt or equity, which has a cost. Shorter collection days alone do not prove a better business: industry conditions, seasonality, and credit policies also matter."
          ],
          "rules": [
            "Average A/R = (Beginning A/R + Ending A/R) ÷ 2",
            "A/R turnover = Annual sales revenue ÷ Average A/R (using the lecture’s numerator)",
            "Collection days = 365 ÷ Annual turnover"
          ],
          "example": {
            "scenario": "Annual sales are 7,300, beginning receivables 600, and ending receivables 860. Use the lecture’s sales measure and 365 days.",
            "steps": [
              "Average receivables = (600 + 860) ÷ 2 = 730.",
              "Turnover = 7,300 ÷ 730 = 10 times; collection days = 365 ÷ 10 = 36.5 days."
            ],
            "conclusion": "Estimated average collection time is 36.5 days and should be compared with the company’s credit terms."
          },
          "pitfalls": [
            "Using only ending receivables instead of average receivables without saying so changes the metric’s basis."
          ],
          "questions": [
            {
              "explanations": [
                "36.5 is a number of days, not turnover times.",
                "This uses ending receivables alone.",
                "This uses beginning receivables alone.",
                "7,300 ÷ ((600 + 860) / 2) = 10."
              ],
              "hint": "Use the average balance in the denominator.",
              "id": "l4-receivable-days-q1"
            },
            {
              "explanations": [
                "Slower collection does not prove all receivables are uncollectible.",
                "The ratio alone cannot prove fraud.",
                "Changes in credit terms or customer payment behavior warrant investigation.",
                "Slower collection does not imply zero revenue."
              ],
              "hint": "A ratio provides a clue for analysis, not a definitive conclusion.",
              "id": "l4-receivable-days-q2"
            }
          ]
        }
      },
      {
        "id": "l4-step-contract",
        "title": "第一步：识别客户合同",
        "en": "Step 1 — Identify the contract",
        "pages": [
          28,
          29,
          30,
          31,
          32,
          33,
          34
        ],
        "prerequisites": [
          "l4-credit-sales"
        ],
        "summary": "先确定双方约定和交易边界，再讨论收入金额与时间。",
        "explanation": [
          "收入五步法先从 Contract（合同）开始：企业和客户究竟约定交换什么、支付什么？合同把承诺、价格与权利义务连接起来，不能因为看到现金或发票就跳过这一步。",
          "课件的通信套餐把手机和12个月网络服务放在一份安排中。合同总共约定每月支付100，持续12个月；“手机免费”是套餐定价表达，不能直接推断手机在会计上没有收入。",
          "补充基础判断：识别合同需要关注双方认可、可识别的权利和付款条款、商业实质及可收回性等条件。不是每份营销意向或未被接受的报价都能直接作为收入合同。以下题目假定合同有效且客户付款可收回。"
        ],
        "rules": [
          "五步：识别合同 → 识别履约义务 → 确定交易价格 → 分摊价格 → 随履约确认收入"
        ],
        "example": {
          "scenario": "客户签署一年套餐，月付100，包含立即交付的手机及全年网络服务。",
          "steps": [
            "先识别整份客户安排，付款承诺合计1200。",
            "之后再分别判断承诺、分摊价格和履约时间，而不是签约当天确认全部收入。"
          ],
          "conclusion": "签订合同是分析起点，不是完成全部履约。"
        },
        "pitfalls": [
          "签约即确认全部收入：还要完成后面四步并检验履约。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "What is the first step in the revenue recognition model?",
            "zh": "收入五步法的第一步是什么？",
            "options": [
              "Identify the contract with the customer",
              "Allocate profit to shareholders",
              "Measure inventory impairment",
              "Record all cash as revenue"
            ],
            "answer": 0,
            "explanations": [
              "先识别客户合同及其交易边界。",
              "股东分配不是收入五步法。",
              "减值不是本模型第一步。",
              "现金与收入不能直接等同。"
            ],
            "hint": "先确认双方的交易安排。",
            "errorType": "英文理解",
            "id": "l4-step-contract-q1"
          },
          {
            "prompt": "A valid 12-month service contract is signed today. Does signing alone justify recognizing all service revenue today?",
            "zh": "今天签了有效的12个月服务合同，仅签约是否足以今天确认全部服务收入？",
            "options": [
              "Yes, always",
              "No, revenue also depends on satisfying obligations",
              "Yes, if an invoice is printed",
              "Yes, because a contract is cash"
            ],
            "answer": 1,
            "explanations": [
              "签约不代表服务已经全部提供。",
              "还需判断履约义务何时满足。",
              "开票不替代履约。",
              "合同不等于现金。"
            ],
            "hint": "从签约到履约，中间还有分析步骤。",
            "errorType": "确认时点",
            "id": "l4-step-contract-q2"
          }
        ],
        "english": {
          "summary": "First establish the agreed exchange and its boundaries, then analyze the amount and timing of revenue.",
          "explanation": [
            "The five-step revenue model begins with the contract: what have the business and customer agreed to exchange, and what will be paid? A contract connects promises, prices, rights, and obligations. Seeing cash or an invoice is no reason to skip this step.",
            "The lecture’s telecom package combines a phone and 12 months of network service in one arrangement. The customer promises to pay 100 each month for 12 months. Advertising the phone as “free” describes package pricing; it does not establish that no accounting revenue is allocated to the phone.",
            "Supplementary basic criteria: contract identification involves approval by the parties, identifiable rights and payment terms, commercial substance, and collectibility, among other requirements. A marketing intention or an unaccepted quotation cannot automatically be treated as a revenue contract. The questions below assume a valid contract and collectible payments."
          ],
          "rules": [
            "Five steps: Identify the contract → Identify performance obligations → Determine the transaction price → Allocate the price → Recognize revenue as obligations are satisfied"
          ],
          "example": {
            "scenario": "A customer signs a one-year package at 100 per month, including an immediately delivered phone and network service for the year.",
            "steps": [
              "First identify the complete customer arrangement and total promised payments of 1,200.",
              "Then analyze the promises, allocation, and performance timing rather than recognizing all revenue on the signing date."
            ],
            "conclusion": "Signing the contract begins the analysis; it does not complete all performance."
          },
          "pitfalls": [
            "Signing does not justify recognizing all revenue: the remaining four steps and performance conditions must still be assessed."
          ],
          "questions": [
            {
              "explanations": [
                "Begin by identifying the customer contract and the boundaries of the exchange.",
                "Distributions to shareholders are not part of the revenue model.",
                "Impairment is not the first step of this model.",
                "Cash and revenue cannot simply be equated."
              ],
              "hint": "Start with the arrangement agreed between the parties.",
              "id": "l4-step-contract-q1"
            },
            {
              "explanations": [
                "Signing does not mean all service has already been provided.",
                "It is still necessary to determine when the performance obligations are satisfied.",
                "Printing an invoice does not replace performance.",
                "A contract is not cash."
              ],
              "hint": "There are further analytical steps between signing and completing performance.",
              "id": "l4-step-contract-q2"
            }
          ]
        }
      },
      {
        "id": "l4-step-obligations",
        "title": "第二步：拆出履约义务",
        "en": "Step 2 — Performance obligations",
        "pages": [
          33,
          34,
          37,
          38
        ],
        "prerequisites": [
          "l4-step-contract"
        ],
        "summary": "一份套餐可以包含需要分别核算的商品和服务承诺。",
        "explanation": [
          "Performance obligation（履约义务，PO）是企业向客户转移约定商品或服务的承诺。会计分析要找出真正需要分别履行的承诺，不能只按合同份数或发票行数数数。",
          "课件套餐有两个主要部分：交付手机，以及在12个月内持续提供网络服务。两者完成的时间不同，因此先拆开，后面才能分别分配收入并决定确认时点。",
          "补充解释：是否为可明确区分的承诺，要考虑客户能否从商品或服务本身受益，以及它在合同中能否与其他承诺分开识别。实际复杂合同不能见到两个名称就机械认定为两个PO；本套餐按课件假定为两个。"
        ],
        "rules": [
          "先识别PO，再进行交易价格分摊",
          "“免费”或单独开票与否，不决定是否存在履约义务"
        ],
        "example": {
          "scenario": "一年套餐包含手机与网络服务，手机可独立使用，服务也可单独购买；按课件假设分别核算。",
          "steps": [
            "手机交付是一项承诺。",
            "持续网络服务是另一项承诺；其收入随服务提供确认。"
          ],
          "conclusion": "两项PO使套餐收入分成两条确认时间线。"
        },
        "pitfalls": [
          "一份合同只能有一个PO：合同数与PO数不是一回事。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "In the lecture bundle, which are the two performance obligations?",
            "zh": "课件套餐中，两项履约义务是什么？",
            "options": [
              "Invoice and bank account",
              "Revenue and tax",
              "Cash and profit",
              "Phone and network service"
            ],
            "answer": 3,
            "explanations": [
              "发票与账户是结算工具。",
              "收入和税是会计结果或事项。",
              "现金与利润不是商品服务承诺。",
              "手机交付与网络服务分别构成承诺。"
            ],
            "hint": "找企业承诺交给客户的东西或服务。",
            "errorType": "概念混淆",
            "id": "l4-step-obligations-q1"
          },
          {
            "prompt": "A phone is advertised as free in a bundle. What follows?",
            "zh": "套餐宣传手机免费，可以推断什么？",
            "options": [
              "The phone cannot be a performance obligation",
              "Its allocated revenue must be zero",
              "Its accounting treatment still requires obligation identification and allocation",
              "All revenue belongs to the phone"
            ],
            "answer": 2,
            "explanations": [
              "促销措辞不消灭交付承诺。",
              "分摊收入可能大于零。",
              "仍需要拆分承诺并按模型分摊。",
              "不能把服务部分收入全给手机。"
            ],
            "hint": "宣传价格不是会计分摊结论。",
            "errorType": "概念混淆",
            "id": "l4-step-obligations-q2"
          }
        ],
        "english": {
          "summary": "A single package can include distinct promises for goods and services that require separate accounting.",
          "explanation": [
            "A performance obligation (PO) is a promise to transfer agreed goods or services to a customer. Identify the promises that genuinely need to be fulfilled separately, rather than counting contracts or invoice lines.",
            "The lecture’s package contains two main elements: delivery of a phone and provision of network service over 12 months. They are completed at different times, so identifying them separately is necessary before allocating revenue and determining its recognition timing.",
            "Supplementary explanation: assessing whether a promise is distinct involves whether the customer can benefit from the good or service and whether it is separately identifiable from other promises in the contract. Two product names do not mechanically mean two POs in every complex contract. The lecture assumes two POs for this package."
          ],
          "rules": [
            "Identify POs before allocating the transaction price",
            "Whether an item is called “free” or billed separately does not determine whether a performance obligation exists"
          ],
          "example": {
            "scenario": "A one-year package contains a phone and network service. The phone can be used independently and the service can be purchased separately; follow the lecture’s assumption of separate accounting.",
            "steps": [
              "Delivery of the phone is one promise.",
              "Ongoing network service is another promise, with revenue recognized as service is provided."
            ],
            "conclusion": "Two POs create two recognition timelines within the same package."
          },
          "pitfalls": [
            "One contract does not necessarily contain only one PO: the number of contracts and the number of POs are different concepts."
          ],
          "questions": [
            {
              "explanations": [
                "An invoice and a bank account are settlement tools.",
                "Revenue and tax are accounting results or matters, not the two promised services.",
                "Cash and profit are not promises to provide goods or services.",
                "Phone delivery and network service are separate promises."
              ],
              "hint": "Identify the goods or services the business promises to give the customer.",
              "id": "l4-step-obligations-q1"
            },
            {
              "explanations": [
                "Promotional wording does not eliminate the delivery promise.",
                "Allocated revenue can be greater than zero.",
                "The promises must still be identified and the model used for allocation.",
                "The service portion cannot simply be allocated entirely to the phone."
              ],
              "hint": "A promotional price is not an accounting allocation conclusion.",
              "id": "l4-step-obligations-q2"
            }
          ]
        }
      },
      {
        "id": "l4-step-price",
        "title": "第三步：确定交易价格",
        "en": "Step 3 — Transaction price",
        "pages": [
          30,
          32,
          33,
          34,
          36
        ],
        "prerequisites": [
          "l4-step-obligations"
        ],
        "summary": "合同约定的对价与各项商品单卖价格之和是两个数。",
        "explanation": [
          "Transaction price（交易价格，TP）是企业预期因向客户转移商品或服务而有权取得的对价。本讲基础套餐没有复杂价格调整，12个月每月100，总对价就是1200。",
          "Stand-alone selling price（单独售价，SSP）回答“如果单独出售，它值多少”。手机600，网络每月80、全年960，单卖总额1560。1560不是这份合同实际总收入，它用于下一步计算分配权重。",
          "补充边界：真实合同可能包含折扣、退货、可变对价或重大融资因素，需要进一步分析。本节点题目均假设没有这些因素、无税额干扰、合同不变更，因此可以直接用各期固定付款之和确定TP。"
        ],
        "rules": [
          "固定套餐TP = 100×12 = 1200",
          "本例SSP合计 = 600 + 80×12 = 1560"
        ],
        "example": {
          "scenario": "手机单卖600，网络服务单卖每月80；套餐约定每月付100，共12个月。",
          "steps": [
            "合同总对价1200，不能误用1560作为套餐收入总额。",
            "单卖价合计1560用于相对售价分摊。"
          ],
          "conclusion": "TP是1200，SSP合计是1560。"
        },
        "pitfalls": [
          "单卖价之和就是合同收入：套餐折扣使两者可以不同。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "A customer pays $100 per month for 12 months, with no other adjustments. The transaction price is?",
            "zh": "客户每月付100，持续12个月，无其他调整，交易价格是多少？",
            "options": [
              "$1,560",
              "$100",
              "$960",
              "$1,200"
            ],
            "answer": 3,
            "explanations": [
              "1560是手机加网络的单卖价总和。",
              "100只是一月付款。",
              "960是本例全年网络单卖价。",
              "100×12=1200。"
            ],
            "hint": "看合同总共约定付多少。",
            "errorType": "计算",
            "id": "l4-step-price-q1"
          },
          {
            "prompt": "What is the role of stand-alone selling prices in the basic bundle model?",
            "zh": "基础套餐模型中，单独售价的作用是什么？",
            "options": [
              "They prove all obligations are fulfilled",
              "They replace the contract price",
              "They provide allocation weights",
              "They determine cash already collected"
            ],
            "answer": 2,
            "explanations": [
              "售价不能证明履约完成。",
              "合同总对价不会被单卖价合计替代。",
              "相对SSP形成分摊权重。",
              "单卖报价不反映实际收款。"
            ],
            "hint": "区分“总蛋糕大小”与“如何分蛋糕”。",
            "errorType": "概念混淆",
            "id": "l4-step-price-q2"
          }
        ],
        "english": {
          "summary": "The consideration agreed in the contract differs from the sum of prices for selling each item separately.",
          "explanation": [
            "The transaction price (TP) is the consideration the business expects to be entitled to in exchange for transferring goods or services to a customer. The lecture’s basic package has no complex price adjustments: 100 per month for 12 months gives total consideration of 1,200.",
            "A stand-alone selling price (SSP) answers: “What would this item sell for separately?” The phone is 600 and network service is 80 per month, or 960 for the year. Their total of 1,560 is not the total revenue under this contract. It supplies the allocation weights for the next step.",
            "Supplementary boundaries: actual contracts may involve discounts, returns, variable consideration, or a significant financing component requiring further analysis. This node assumes none of those factors, no tax complications, and no contract modifications. TP can therefore be calculated by summing the fixed payments."
          ],
          "rules": [
            "Fixed package TP = 100 × 12 = 1,200",
            "Combined SSP in this example = 600 + 80 × 12 = 1,560"
          ],
          "example": {
            "scenario": "The phone sells separately for 600 and service for 80 per month. The package requires 100 per month for 12 months.",
            "steps": [
              "Total contractual consideration is 1,200; do not use 1,560 as the package’s total revenue.",
              "The combined SSP of 1,560 is used to calculate relative allocation weights."
            ],
            "conclusion": "TP is 1,200; combined SSP is 1,560."
          },
          "pitfalls": [
            "The sum of stand-alone prices is not necessarily contract revenue: a package discount can make the totals differ."
          ],
          "questions": [
            {
              "explanations": [
                "1,560 is the combined phone and service SSP.",
                "100 is only one monthly payment.",
                "960 is the annual service SSP in this example.",
                "100 × 12 = 1,200."
              ],
              "hint": "Look at the total amount promised under the contract.",
              "id": "l4-step-price-q1"
            },
            {
              "explanations": [
                "A price does not prove performance is complete.",
                "The combined SSP does not replace the contractual consideration.",
                "Relative SSPs provide allocation weights.",
                "Separate selling prices do not measure actual collections."
              ],
              "hint": "Distinguish the size of the total from how it is divided.",
              "id": "l4-step-price-q2"
            }
          ]
        }
      },
      {
        "id": "l4-step-allocation",
        "title": "第四步：按相对单独售价分摊",
        "en": "Step 4 — Relative stand-alone selling prices",
        "pages": [
          35,
          36,
          39
        ],
        "prerequisites": [
          "l4-step-price"
        ],
        "summary": "套餐折扣按相对单卖价分配，“赠品”也可能分到收入。",
        "explanation": [
          "确定TP后，要把同一份合同的总对价分给各项PO。基础方法是相对单独售价分摊：某项SSP占全部SSP的比例，就是它取得TP的比例。",
          "本例手机600，全年服务960，总SSP1560。手机占600/1560，因此分到1200×600/1560≈461.54；服务分到约738.46，每月约61.54。两项合计仍为1200。",
          "课件用整数手机462和服务738、每月61.5展示逻辑。这是教学四舍五入：若后续分录按38.5×12冲减合同资产，恰好归零。这里明确区分精确比例与课件简化值，实际记账需要统一舍入与尾差处理。"
        ],
        "rules": [
          "某PO分摊额 = TP × 该PO的SSP ÷ 全部PO的SSP合计",
          "分摊总额必须等于合同TP"
        ],
        "example": {
          "scenario": "假设设备SSP300，全年服务SSP900，套餐总价960，无需特殊折扣分配。",
          "steps": [
            "设备权重300/1200=25%，分摊960×25%=240。",
            "服务权重75%，分摊720；若均匀提供12个月，每月60。"
          ],
          "conclusion": "设备240、服务720，合计960，不能按开票名称分配。"
        },
        "pitfalls": [
          "“手机免费，所以手机收入为0”：应按分摊规则判断，而不是按广告词。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "A device has SSP $300, service SSP $900 and bundle price $960. Allocated device revenue is?",
            "zh": "设备单卖价300、服务900、套餐价960，分摊给设备多少？",
            "options": [
              "$240",
              "$300",
              "$960",
              "$0"
            ],
            "answer": 0,
            "explanations": [
              "960×300/(300+900)=240。",
              "300是SSP，不是分摊结果。",
              "960是整份合同价格。",
              "赠品也可能分得收入。"
            ],
            "hint": "先算设备所占单卖价比例。",
            "errorType": "计算",
            "id": "l4-step-allocation-q1"
          },
          {
            "prompt": "After allocation, the sum assigned to all obligations should equal what?",
            "zh": "分摊后，各项PO金额合计应等于什么？",
            "options": [
              "Net profit",
              "Total transaction price",
              "Total stand-alone selling prices",
              "Cash collected today only"
            ],
            "answer": 1,
            "explanations": [
              "收入分摊还未扣成本，不能等于利润。",
              "分摊只拆分合同对价，不改变总额。",
              "SSP合计用于权重，不必等于TP。",
              "收款时点不决定分摊总额。"
            ],
            "hint": "分蛋糕不会改变蛋糕总大小。",
            "errorType": "概念混淆",
            "id": "l4-step-allocation-q2"
          }
        ],
        "english": {
          "summary": "Allocate a package discount using relative stand-alone prices; an advertised gift may still receive revenue.",
          "explanation": [
            "After determining TP, allocate the contract’s total consideration to the POs. The basic method uses relative stand-alone selling prices: an item receives the same proportion of TP as its SSP bears to total SSP.",
            "Here the phone SSP is 600, annual service SSP is 960, and total SSP is 1,560. The phone receives 1,200 × 600 / 1,560 ≈ 461.54. Service receives about 738.46, or about 61.54 per month. The two allocations still total 1,200.",
            "The lecture simplifies the phone amount to 462 and service to 738, or 61.5 per month. This is teaching rounding: subsequent entries reduce the contract asset by 38.5 × 12, exactly clearing 462. Keep the exact proportions separate from these lecture-rounded values. Actual bookkeeping requires consistent rounding and handling of any final difference."
          ],
          "rules": [
            "Allocation to a PO = TP × That PO’s SSP ÷ Total SSP of all POs",
            "The allocated amounts must sum to the contract TP"
          ],
          "example": {
            "scenario": "Assume a device SSP of 300, annual service SSP of 900, and package price of 960, with no special discount allocation.",
            "steps": [
              "The device weight is 300 / 1,200 = 25%; its allocation is 960 × 25% = 240.",
              "Service receives 75%, or 720. If provided evenly for 12 months, revenue is 60 per month."
            ],
            "conclusion": "Device allocation is 240 and service allocation is 720, totaling 960. Invoice labels do not determine allocation."
          },
          "pitfalls": [
            "“The phone is free, so phone revenue is zero” is incorrect: apply the allocation model rather than advertising language."
          ],
          "questions": [
            {
              "explanations": [
                "960 × 300 / (300 + 900) = 240.",
                "300 is the SSP, not the allocation.",
                "960 is the price of the entire contract.",
                "A promotional gift can still receive allocated revenue."
              ],
              "hint": "First calculate the device’s share of combined SSP.",
              "id": "l4-step-allocation-q1"
            },
            {
              "explanations": [
                "Costs have not been deducted, so revenue allocation is not profit.",
                "Allocation divides contractual consideration without changing its total.",
                "Combined SSP supplies weights and need not equal TP.",
                "Collection timing does not determine the allocation total."
              ],
              "hint": "Dividing a total does not change its overall size.",
              "id": "l4-step-allocation-q2"
            }
          ]
        }
      },
      {
        "id": "l4-step-control",
        "title": "第五步：随控制权转移确认",
        "en": "Step 5 — Transfer of control",
        "pages": [
          37,
          38,
          49,
          50,
          53
        ],
        "prerequisites": [
          "l4-step-allocation"
        ],
        "summary": "收入随履约满足而确认，关键是客户何时获得控制。",
        "explanation": [
          "五步法最后才回答“什么时候确认收入”。核心是企业通过转移商品或服务满足履约义务。Control（控制）关注客户能否主导该资产的使用并获得其剩余利益，而不仅是企业何时收钱或开票。",
          "课件中的手机通常在控制权转给客户的时点确认；网络服务则随着持续提供而确认。即使两项收入来自同一合同、按同一张月账单收费，也不代表确认时间相同。",
          "运输条款、退货权和价格可变等可能影响判断。FOB shipping point 或 destination 是运输风险和交付安排的线索，但复杂交易仍须看合同事实与控制权，不能只背一个词。先判断能否在一段时间内确认；不满足条件时，确定具体转移时点。"
        ],
        "rules": [
          "满足PO → 确认该PO对应分摊收入",
          "收款、签约与开票均不能单独替代履约判断"
        ],
        "example": {
          "scenario": "沿用课件简化值：12月1日交付手机，分摊462；12月均匀提供一个月网络服务，分摊61.5。",
          "steps": [
            "12月1日手机控制权已转移，确认462。",
            "12月服务完成一个月，确认61.5；不确认剩余11个月服务收入。"
          ],
          "conclusion": "本例12月总收入523.5，而当月账单可能仅100。"
        },
        "pitfalls": [
          "收入必须等于当月账单：账单安排与分摊、履约时间可以不同。"
        ],
        "related": [],
        "lab": "revenue",
        "questions": [
          {
            "prompt": "Using lecture-rounded amounts, phone revenue is $462 and one month of service is $61.5. December revenue is?",
            "zh": "采用课件舍入值，手机462、一个月服务61.5，12月收入是多少？",
            "options": [
              "$1,200",
              "$100",
              "$462",
              "$523.5"
            ],
            "answer": 3,
            "explanations": [
              "全年服务尚未全部履约。",
              "100是本例月账单，不是12月收入。",
              "漏掉本月已提供服务。",
              "462+61.5=523.5。"
            ],
            "hint": "分别处理已经完成的两项承诺。",
            "errorType": "计算",
            "id": "l4-step-control-q1"
          },
          {
            "prompt": "What is the central basis for recognizing revenue under step 5?",
            "zh": "第五步确认收入的核心依据是什么？",
            "options": [
              "Management's profit target",
              "Printing an invoice",
              "Transferring promised goods or services to satisfy obligations",
              "Receiving any bank deposit"
            ],
            "answer": 2,
            "explanations": [
              "利润目标不能决定收入时间。",
              "发票不是充分条件。",
              "通过转移商品或服务满足履约义务才是核心。",
              "银行入账也可能是借款或预收款。"
            ],
            "hint": "找客户是否已得到承诺的利益。",
            "errorType": "确认时点",
            "id": "l4-step-control-q2"
          }
        ],
        "english": {
          "summary": "Recognize revenue as performance obligations are satisfied; the key is when the customer obtains control.",
          "explanation": [
            "Only the final step answers when to recognize revenue. The business satisfies a PO by transferring a promised good or service. Control focuses on the customer’s ability to direct use of the asset and obtain its remaining benefits, rather than merely on when cash is received or an invoice is issued.",
            "The lecture’s phone normally generates revenue at the point when control transfers to the customer. Network-service revenue is recognized as ongoing service is provided. A shared contract and monthly bill do not make the two recognition timelines identical.",
            "Shipping terms, return rights, and variable prices can affect the assessment. FOB shipping point or destination provides evidence about transport and delivery arrangements, but complex transactions still require analysis of contract facts and control rather than memorizing a single label. Assess over-time eligibility first; otherwise identify the point when control transfers."
          ],
          "rules": [
            "Satisfaction of a PO → Recognition of the revenue allocated to that PO",
            "Collection, contract signing, and invoicing cannot individually replace the performance assessment"
          ],
          "example": {
            "scenario": "Use lecture-rounded amounts: a phone allocated 462 is delivered on December 1, and one month of evenly provided network service is allocated 61.5 for December.",
            "steps": [
              "Control of the phone transfers on December 1, so recognize 462.",
              "One month of service is performed in December, so recognize 61.5, rather than the remaining 11 months of service revenue."
            ],
            "conclusion": "December revenue is 523.5 even though the monthly bill may be only 100."
          },
          "pitfalls": [
            "Revenue need not equal the monthly bill: billing arrangements can differ from allocation and performance timing."
          ],
          "questions": [
            {
              "explanations": [
                "The entire year of service has not yet been performed.",
                "100 is the monthly bill, not December revenue in this example.",
                "This omits service already provided during the month.",
                "462 + 61.5 = 523.5."
              ],
              "hint": "Analyze the completed parts of each promise separately.",
              "id": "l4-step-control-q1"
            },
            {
              "explanations": [
                "A profit target cannot determine recognition timing.",
                "An invoice alone is insufficient.",
                "Transferring goods or services to satisfy a PO is the central basis.",
                "A deposit can also be a loan or customer advance."
              ],
              "hint": "Has the customer received the promised benefits?",
              "id": "l4-step-control-q2"
            }
          ]
        }
      },
      {
        "id": "l4-contract-asset",
        "title": "合同资产与应收账款怎么区分",
        "en": "Contract asset versus receivable",
        "pages": [
          40,
          41,
          42,
          44,
          45,
          46,
          47,
          48
        ],
        "prerequisites": [
          "l4-step-control"
        ],
        "summary": "已履约但收款权仍有额外条件是合同资产，只剩时间条件则是应收款。",
        "explanation": [
          "合同资产和应收账款都可能代表未来收款权，但条件不同。Contract asset 的收款权还取决于继续完成其他义务；Receivable 的收款权已无条件，通常只需等待付款到期。",
          "课件通信套餐假定：手机已经交付，但收取该部分对价还取决于继续履行网络服务。因此交付时借记合同资产、贷记收入。以后每月完成服务、形成无条件100账款，其中一部分是当月服务收入，另一部分把先前合同资产转成应收。",
          "采用课件舍入值，每月借应收100，贷服务收入61.5、贷合同资产38.5；12个月共冲减462。若客户立即付款，再借现金、贷应收。手机的销售成本也应在售出时处理，此处为了看清收入与收款权，未设成本数值。"
        ],
        "rules": [
          "课件简化分录：Dr A/R 100；Cr Revenue 61.5；Cr Contract asset 38.5",
          "合同资产转应收并不再次确认已确认的手机收入"
        ],
        "example": {
          "scenario": "手机交付时确认合同资产462；月底服务已提供，当月产生无条件收款权100。",
          "steps": [
            "先前合同资产462是已确认手机收入对应的有条件权利。",
            "月底分录确认新服务收入61.5，同时把38.5合同资产转入应收。"
          ],
          "conclusion": "月底合同资产423.5、应收100；后续收款仅结清应收。"
        },
        "pitfalls": [
          "合同资产就是客户拖欠款：关键在收款条件，而不只是尚未收到现金。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "A right to payment still depends on completing further service. It is generally what?",
            "zh": "收款权仍取决于完成后续服务，通常是什么？",
            "options": [
              "A contract asset",
              "An unconditional receivable",
              "A contract liability",
              "Cash"
            ],
            "answer": 0,
            "explanations": [
              "条件尚未解除，符合合同资产思路。",
              "无条件收款权才是应收款。",
              "合同负债代表欠客户履约，与收款权不同。",
              "没有实际收到现金。"
            ],
            "hint": "问除了等待时间，是否还要做别的事情。",
            "errorType": "概念混淆",
            "id": "l4-contract-asset-q1"
          },
          {
            "prompt": "Under the rounded bundle example, A/R rises $100 and service revenue rises $61.5. Contract assets should change by?",
            "zh": "课件舍入套餐中，应收增加100、服务收入增加61.5，合同资产变化多少？",
            "options": [
              "Increase $38.5",
              "Decrease $38.5",
              "Decrease $61.5",
              "Increase $100"
            ],
            "answer": 1,
            "explanations": [
              "转出合同资产应减少而不是增加。",
              "100−61.5=38.5从合同资产转入应收。",
              "61.5是新增服务收入。",
              "100是无条件应收总额。"
            ],
            "hint": "区分新收入与原有权利的转分类。",
            "errorType": "账户与借贷",
            "id": "l4-contract-asset-q2"
          }
        ],
        "english": {
          "summary": "A performed obligation creates a contract asset if the payment right remains conditional; a receivable remains subject only to time.",
          "explanation": [
            "Both contract assets and receivables can represent future collection rights, but their conditions differ. A contract asset depends on satisfying additional obligations. A receivable is an unconditional right, normally requiring only the passage of time until payment is due.",
            "The lecture assumes that, after phone delivery, the right to that consideration still depends on continued network service. Delivery therefore debits contract assets and credits revenue. Each month, service performance creates an unconditional receivable of 100; part is current service revenue and the rest transfers a previously recognized contract asset into receivables.",
            "Using the lecture’s rounded amounts, each month debit A/R 100, credit service revenue 61.5, and credit contract assets 38.5. Twelve months clear 462. If the customer pays immediately, also debit cash and credit A/R. Phone COGS should be recorded when sold; no cost amount is provided here so the focus remains on revenue and payment rights."
          ],
          "rules": [
            "Lecture-rounded entry: Dr A/R 100; Cr Revenue 61.5; Cr Contract asset 38.5",
            "Transferring a contract asset into a receivable does not recognize phone revenue a second time"
          ],
          "example": {
            "scenario": "Phone delivery creates a contract asset of 462. At month-end, service has been provided and an unconditional right to 100 arises.",
            "steps": [
              "The existing contract asset of 462 is a conditional right associated with phone revenue already recognized.",
              "The month-end entry recognizes new service revenue of 61.5 and transfers 38.5 from contract assets into A/R."
            ],
            "conclusion": "Month-end contract assets are 423.5 and A/R is 100. Later collection simply settles the receivable."
          },
          "pitfalls": [
            "A contract asset is not merely an overdue customer debt: the distinction concerns conditions on the right to payment, not just an absence of cash."
          ],
          "questions": [
            {
              "explanations": [
                "The right remains conditional, consistent with a contract asset.",
                "An unconditional payment right is a receivable.",
                "A contract liability represents performance owed to a customer, not a collection right.",
                "No cash has yet been received."
              ],
              "hint": "Other than waiting, must the business still do something to obtain payment?",
              "id": "l4-contract-asset-q1"
            },
            {
              "explanations": [
                "A transfer out should decrease, not increase, the contract asset.",
                "100 − 61.5 = 38.5 moves from contract assets into receivables.",
                "61.5 is new service revenue.",
                "100 is the total unconditional receivable created."
              ],
              "hint": "Separate new revenue from reclassification of an existing right.",
              "id": "l4-contract-asset-q2"
            }
          ]
        }
      },
      {
        "id": "l4-contract-liability",
        "title": "先收款为什么形成合同负债",
        "en": "Contract liability and advance receipts",
        "pages": [
          49,
          56,
          59,
          60
        ],
        "prerequisites": [
          "l4-contract-asset"
        ],
        "summary": "先收款但尚未履约，增加的是向客户交付的义务。",
        "explanation": [
          "客户预付时，企业拿到现金，也承担未来交付义务。这时通常借记现金、贷记合同负债。负债不是只包括向银行还钱，也包括已经收钱却还欠客户商品或服务的义务。",
          "以后控制权转移，才把相应合同负债转成收入：借合同负债、贷收入。因此确认收入可能表现为资产增加，也可能表现为负债减少，不能只在“现金或应收增加”的模式里理解收入。",
          "合同负债与合同资产方向不同：前者是客户先付、企业还欠履约；后者是企业已履约、但收款权仍附条件。这里使用简单预收销售情境，不考虑税费、退款权和合同净额列报等复杂事项。"
        ],
        "rules": [
          "预收：Dr Cash；Cr Contract liability",
          "履约：Dr Contract liability；Cr Revenue"
        ],
        "example": {
          "scenario": "客户为尚未交付的商品预付500；次月商品控制权转给客户，无其他条件。",
          "steps": [
            "收款日：现金+500，合同负债+500，收入为0。",
            "交付日：合同负债−500，收入+500；此时不再次收到现金。"
          ],
          "conclusion": "收钱与赚取收入在不同日期完成。"
        },
        "pitfalls": [
          "负债只有借款：欠交商品或服务也可以形成负债。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Before delivery, a $500 customer advance normally causes what?",
            "zh": "交付前收到客户预付款500，通常怎样变化？",
            "options": [
              "Cash and revenue rise",
              "Cash and contract liabilities rise",
              "A/R and revenue rise",
              "Cash falls and expense rises"
            ],
            "answer": 1,
            "explanations": [
              "尚未履约，不能确认收入。",
              "现金增加，同时增加履约义务。",
              "已经收到钱，不是先确认应收收入。",
              "现金方向相反且无费用消耗。"
            ],
            "hint": "企业拿到钱后还要履行承诺。",
            "errorType": "账户与借贷",
            "id": "l4-contract-liability-q1"
          },
          {
            "prompt": "When prepaid goods are delivered and control passes, the basic revenue entry is?",
            "zh": "预付商品交付且控制权转移时，基本收入分录是什么？",
            "options": [
              "Dr Contract liability; Cr Revenue",
              "Dr Revenue; Cr Contract liability",
              "Dr Contract asset; Cr Cash",
              "Dr Cash; Cr Revenue again"
            ],
            "answer": 0,
            "explanations": [
              "履约后减少原义务并确认收入。",
              "这会减少收入、增加负债，方向相反。",
              "没有解释履约与收入确认。",
              "原来已经收过现金，不能再虚增一次。"
            ],
            "hint": "这次履约消除了哪项原来的义务？",
            "errorType": "账户与借贷",
            "id": "l4-contract-liability-q2"
          }
        ],
        "english": {
          "summary": "Cash received before performance increases the obligation to deliver goods or services to the customer.",
          "explanation": [
            "When a customer prepays, the business receives cash and also takes on an obligation to perform in the future. The normal entry is debit cash, credit contract liability. Liabilities include more than bank repayments: owing goods or services after receiving payment can also be a liability.",
            "When control later transfers, the relevant contract liability becomes revenue: debit contract liability, credit revenue. Revenue recognition can therefore involve either an increase in assets or a decrease in liabilities. It should not be understood only through situations where cash or receivables increase.",
            "Contract liabilities and contract assets point in different directions: the former means the customer has paid first and the business still owes performance; the latter means the business has performed but the payment right remains conditional. This node uses a simple advance-sale situation and excludes tax, refund rights, contract net presentation, and other complexities."
          ],
          "rules": [
            "Advance receipt: Dr Cash; Cr Contract liability",
            "Performance: Dr Contract liability; Cr Revenue"
          ],
          "example": {
            "scenario": "A customer prepays 500 for goods not yet delivered. Control transfers the following month, with no other conditions.",
            "steps": [
              "On receipt: cash +500, contract liability +500, and revenue is zero.",
              "On delivery: contract liability −500 and revenue +500; cash is not received again at this point."
            ],
            "conclusion": "Receiving cash and earning revenue occur on different dates."
          },
          "pitfalls": [
            "Liabilities are not limited to borrowings: an obligation to deliver goods or services can also create a liability."
          ],
          "questions": [
            {
              "explanations": [
                "Without performance, revenue cannot be recognized yet.",
                "Cash increases and so does the obligation to perform.",
                "Cash has been received; this is not a credit sale creating revenue and A/R.",
                "Cash moves in the opposite direction and no expense consumption is given."
              ],
              "hint": "After receiving payment, the business still has a promise to fulfill.",
              "id": "l4-contract-liability-q1"
            },
            {
              "explanations": [
                "Performance reduces the existing obligation and creates revenue.",
                "This reduces revenue and increases the liability, reversing the actual effects.",
                "This does not account for performance and revenue recognition.",
                "Cash was collected previously, so recording another receipt would overstate it."
              ],
              "hint": "Which existing obligation has this delivery extinguished?",
              "id": "l4-contract-liability-q2"
            }
          ]
        }
      },
      {
        "id": "l4-over-time",
        "title": "时点确认还是时段确认",
        "en": "Point-in-time versus over-time",
        "pages": [
          50,
          51,
          52,
          53
        ],
        "prerequisites": [
          "l4-step-control"
        ],
        "summary": "符合三类条件之一才按时段确认，否则确定控制权转移的时点。",
        "explanation": [
          "持续时间长，不自动代表可以逐步确认收入。需要先检查 Over-time（时段）确认条件。只要满足三类条件中的任何一类，才按履约进度确认；否则采用 Point-in-time（时点）确认。",
          "第一类：客户在企业履约时同时取得并消耗利益，例如持续网络服务。第二类：客户在资产建造过程中就控制该资产，例如在客户控制的土地上建造资产，但仍需结合合同事实判断。",
          "第三类同时要求两个条件：资产对企业没有其他用途，并且企业对截至目前已完成的履约拥有可强制执行的收款权。“定制产品”本身不够，“分期付款”也不够。评估后，再讨论合适的进度计量方法。"
        ],
        "rules": [
          "时段条件1或2或3任一满足即可",
          "条件3 = 无替代用途 AND 对已完成履约有可强制执行收款权",
          "三类均不满足 → 按时点确认"
        ],
        "example": {
          "scenario": "企业制造专用设备，合同限制改售他人；若客户终止，企业仍依法有权收取已完成部分的合理对价。",
          "steps": [
            "设备无替代用途满足第三类的第一部分。",
            "可执行的已完成履约收款权满足第二部分，因此在本假设下可时段确认。"
          ],
          "conclusion": "关键是两项条件同时成立，而不是只看设备是否定制。"
        },
        "pitfalls": [
          "工程做了一半就能确认一半收入：必须先满足时段确认条件。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "Which combination supports the third over-time criterion?",
            "zh": "哪一组合支持第三类时段确认条件？",
            "options": [
              "Long production only",
              "No alternative use and an enforceable right to payment for work completed",
              "A large customer deposit only",
              "A manager's estimate only"
            ],
            "answer": 1,
            "explanations": [
              "生产时间长不充分。",
              "无替代用途与对已完成履约的可执行收款权必须同时具备。",
              "预收款不等于满足履约条件。",
              "管理层估计不能替代合同条件。"
            ],
            "hint": "第三类是两个条件的交集。",
            "errorType": "概念混淆",
            "id": "l4-over-time-q1"
          },
          {
            "prompt": "If none of the over-time criteria is met, revenue is recognized how?",
            "zh": "如果不满足任何时段确认条件，应怎样确认收入？",
            "options": [
              "At a point in time when control transfers",
              "Evenly from contract signing",
              "Whenever management wants",
              "Only after dividends are paid"
            ],
            "answer": 0,
            "explanations": [
              "应确定控制权转移的具体时点。",
              "签约并不自动启动按时间均摊。",
              "不能任意选择。",
              "分红与履约确认没有这种关系。"
            ],
            "hint": "时点与时段是先判断条件后的结果。",
            "errorType": "确认时点",
            "id": "l4-over-time-q2"
          }
        ],
        "english": {
          "summary": "Recognize over time only if at least one of three criteria is met; otherwise identify the point when control transfers.",
          "explanation": [
            "A long duration does not automatically permit gradual revenue recognition. First assess the over-time criteria. If any one of the three categories is met, revenue is recognized using a measure of progress; otherwise, recognition is at a point in time.",
            "The first criterion is that the customer simultaneously receives and consumes benefits as the business performs, as with ongoing network service. The second is that the customer controls the asset as it is created, for example construction on land controlled by the customer, still subject to the specific contract facts.",
            "The third criterion requires both that the asset has no alternative use to the business and that the business has an enforceable right to payment for performance completed to date. A “customized product” alone is insufficient, and installment billing alone is also insufficient. Only after this assessment should a suitable progress measure be considered."
          ],
          "rules": [
            "Meeting criterion 1 OR 2 OR 3 is sufficient for over-time recognition",
            "Criterion 3 = No alternative use AND an enforceable right to payment for performance completed to date",
            "If none of the three is met → Recognize at a point in time"
          ],
          "example": {
            "scenario": "A business makes specialized equipment that the contract restricts from being sold to others. If the customer cancels, the business has an enforceable right to reasonable payment for work completed.",
            "steps": [
              "The lack of alternative use meets the first element of the third criterion.",
              "The enforceable payment right for completed work meets its second element. Under these assumptions, over-time recognition is appropriate."
            ],
            "conclusion": "Both elements must hold; customization alone does not decide the answer."
          },
          "pitfalls": [
            "Being halfway through construction does not automatically justify recognizing half the revenue: over-time eligibility must be established first."
          ],
          "questions": [
            {
              "explanations": [
                "Long production time alone is insufficient.",
                "No alternative use and an enforceable right to payment for completed performance must both hold.",
                "An advance does not by itself satisfy performance conditions.",
                "A management estimate cannot replace contractual conditions."
              ],
              "hint": "The third criterion is an intersection of two requirements.",
              "id": "l4-over-time-q1"
            },
            {
              "explanations": [
                "Identify the particular point when control transfers.",
                "Signing does not automatically start straight-line recognition.",
                "Recognition is not discretionary.",
                "Dividends have no such relationship with performance recognition."
              ],
              "hint": "Point-in-time versus over-time recognition follows the criteria assessment.",
              "id": "l4-over-time-q2"
            }
          ]
        }
      },
      {
        "id": "l4-progress",
        "title": "投入法、产出法与履约进度",
        "en": "Input and output measures of progress",
        "pages": [
          52,
          53,
          54,
          55
        ],
        "prerequisites": [
          "l4-over-time"
        ],
        "summary": "先满足时段条件，再选择能如实反映履约的进度方法。",
        "explanation": [
          "Output method（产出法）看已经向客户转移的成果，例如实际交付单位、客户确认的里程碑。Input method（投入法）看已使用资源占预计总资源的比例，例如成本或工时。方法名称并不是固定等于某个指标：关键在指标实际衡量的是成果还是投入。",
          "课件培训例子按已交付培训小时衡量产出，按已发生与预计总成本之比衡量投入。二者算出的收入不同，并不意味着企业可以每期选利润更高的方法；应选择能恰当反映履约、并一致应用的方法。",
          "如果满足时段确认条件但进度无法合理计量，课件说明可在预计成本能够收回时，按可收回已发生成本金额确认收入，暂不确认利润。发生的成本也不一定都代表有效进度，例如异常浪费不能简单用来加快收入确认。"
        ],
        "rules": [
          "产出进度 = 已交付成果 ÷ 预计总成果",
          "投入进度 = 适当的累计投入 ÷ 预计总投入",
          "本期收入 = 累计应确认收入 − 以前期间已确认收入"
        ],
        "example": {
          "scenario": "合同500万元、总培训400小时、预计总成本250万元；本年交付120小时、发生成本100万元，前期未确认收入。",
          "steps": [
            "按课件产出法：120/400=30%，收入500×30%=150万元。",
            "按课件投入法：100/250=40%，收入500×40%=200万元。",
            "两种结果用于比较计量基础，实际需选择恰当且一致的方法。"
          ],
          "conclusion": "产出法150万元，投入法200万元；不是任选较大值。"
        },
        "pitfalls": [
          "把合同经过月份比例直接当履约进度：只有时间能恰当反映服务转移时才适合直线确认。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "A $5m training contract delivers 120 of 400 hours. Using delivered hours as output, revenue to date is?",
            "zh": "500万元培训合同已交付120/400小时，以交付小时为产出，累计收入多少？",
            "options": [
              "$1.5m",
              "$2m",
              "$5m",
              "$1m"
            ],
            "answer": 0,
            "explanations": [
              "500×120/400=150万元。",
              "200万元是按成本投入法计算。",
              "尚未全部履约。",
              "100万元是本例已发生成本。"
            ],
            "hint": "先求交付比例，再乘合同对价。",
            "errorType": "计算",
            "id": "l4-progress-q1"
          },
          {
            "prompt": "An over-time contract has no reasonably measurable progress, but incurred costs are expected to be recovered. The lecture approach recognizes revenue up to what?",
            "zh": "符合时段条件但进度无法合理计量，已发生成本预计可收回，按课件应确认收入到什么程度？",
            "options": [
              "The full contract price",
              "Recoverable costs incurred, with no profit",
              "Zero costs and full profit",
              "The highest possible estimate"
            ],
            "answer": 1,
            "explanations": [
              "不能因难以计量就一次确认全部。",
              "按可收回已发生成本确认收入，暂不确认利润。",
              "该处理不允许凭空确认利润。",
              "不能选择最乐观估计。"
            ],
            "hint": "谨慎处理计量困难，不把未证实利润提前确认。",
            "errorType": "确认时点",
            "id": "l4-progress-q2"
          }
        ],
        "english": {
          "summary": "Establish over-time eligibility first, then choose a progress measure that faithfully depicts performance.",
          "explanation": [
            "An output method measures results already transferred to the customer, such as delivered units or customer-approved milestones. An input method measures resources used relative to total expected resources, such as costs or labor hours. Labels are not tied mechanically to a particular indicator: what matters is whether it measures results or resources.",
            "The lecture’s training example treats delivered training hours as output and incurred costs relative to total estimated costs as input. Different revenue amounts do not permit choosing whichever produces higher profit each period. Select a method that appropriately depicts performance and apply it consistently.",
            "If an obligation qualifies for over-time recognition but progress cannot reasonably be measured, the lecture permits revenue only to the extent of incurred costs expected to be recovered, with no profit. Not all costs represent effective progress: abnormal waste, for example, cannot simply accelerate revenue recognition."
          ],
          "rules": [
            "Output progress = Results delivered ÷ Total expected results",
            "Input progress = Appropriate cumulative inputs ÷ Total expected inputs",
            "Current-period revenue = Cumulative revenue to be recognized − Revenue recognized in earlier periods"
          ],
          "example": {
            "scenario": "The contract price is 5 million, with 400 total training hours and estimated total cost of 2.5 million. This year, 120 hours are delivered and costs of 1 million are incurred; no revenue was recognized previously.",
            "steps": [
              "Lecture output method: 120 / 400 = 30%; revenue = 5 × 30% = 1.5 million.",
              "Lecture input method: 1 / 2.5 = 40%; revenue = 5 × 40% = 2 million.",
              "The two results compare measurement bases. In practice, an appropriate method must be selected and used consistently."
            ],
            "conclusion": "Output gives 1.5 million and input gives 2 million; choosing the larger amount is not the rule."
          },
          "pitfalls": [
            "Do not automatically treat elapsed contract months as performance progress: straight-line recognition is appropriate only when time faithfully depicts service transfer."
          ],
          "questions": [
            {
              "explanations": [
                "5 million × 120 / 400 = 1.5 million.",
                "2 million is the result under the cost-input method.",
                "The full obligation has not yet been satisfied.",
                "1 million is the incurred cost in this example."
              ],
              "hint": "Calculate the delivered proportion, then multiply by contractual consideration.",
              "id": "l4-progress-q1"
            },
            {
              "explanations": [
                "Measurement difficulty does not justify full recognition.",
                "Recognize revenue to the extent of recoverable incurred costs, with no profit for now.",
                "This treatment does not permit unsupported profit.",
                "The most optimistic estimate is not a permitted selection rule."
              ],
              "hint": "Handle measurement uncertainty without recognizing unsubstantiated profit early.",
              "id": "l4-progress-q2"
            }
          ]
        }
      },
      {
        "id": "l4-premature-revenue",
        "title": "提前确认收入怎样扭曲报表",
        "en": "Premature recognition — historical course case",
        "pages": [
          56,
          57,
          59,
          60
        ],
        "prerequisites": [
          "l4-contract-liability",
          "l4-progress"
        ],
        "summary": "真实收款也不能证明收入时点正确；提前消除履约义务会虚增利润和权益。",
        "explanation": [
          "本节点仅用老师提供的恒大历史阅读材料解释会计机制，不描述企业当前状况。案例的关键是房屋尚未完成或交付，却把原来预收形成的合同负债转成收入。交易与收款可能是真实的，错误仍然发生在确认期间。",
          "正确的预收处理保留合同负债，直到满足适用的收入确认要求。若提前借合同负债、贷收入，负债就被过早消除；同时把未交付房屋成本从存货转出，会进一步扭曲资产与费用。即使分录借贷相等，报表仍可失真。",
          "阅读材料不同段落的债券金额、组合分录与权益表述存在不一致，因此这里不沿用这些争议数字，也不作监管结论扩展。下面用独立小数值练习说明方向，忽略税费：提前收入100、提前成本70，会使利润与权益高估30、存货低估70、合同负债低估100。",
          "复核收入截止时间（cut-off）应关注真实的履约与交付证据。现金到账、合同签署或借贷平衡都不是足够证明；时段确认也必须先满足条件，不能用“项目在施工”来自动合理化收入。"
        ],
        "rules": [
          "本简化例：虚增利润 = 提前收入100 − 提前成本70 = 30",
          "资产低估70 = 负债低估100 + 权益高估30",
          "案例补充来源：Reading-Evergrande Revenue Recognition.pdf，第2–7页；不引用其中不一致的金额"
        ],
        "example": {
          "scenario": "独立教学例：客户预付100，房屋尚未交付；企业错误转收入100并转销售成本70，忽略全部税费。",
          "steps": [
            "原本应保留合同负债100，存货成本70继续作为资产。",
            "错误确认使合同负债减少100、存货减少70、利润增加30。",
            "纠正时恢复合同负债与存货，并撤销提前利润；具体历史重述处理不在此练习范围。"
          ],
          "conclusion": "账面仍可平衡，但资产、负债、利润与权益都可能不真实。"
        },
        "pitfalls": [
          "“现金是真的，所以收入一定是真的”：现金真实性与收入期间正确性是不同审查问题。"
        ],
        "related": [],
        "lab": null,
        "questions": [
          {
            "prompt": "A customer prepays for an undelivered property. Why is cash collection alone insufficient to recognize revenue?",
            "zh": "客户已预付未交付房屋款，为什么仅收款不足以确认收入？",
            "options": [
              "Cash never matters",
              "The performance obligation may still be unsatisfied",
              "Prepayments are always equity",
              "Revenue is determined by audit fees"
            ],
            "answer": 1,
            "explanations": [
              "现金重要，但不能替代履约证据。",
              "尚未满足履约要求就不能因收款提前确认。",
              "预收通常是负债，不是股东投入。",
              "审计收费不决定收入。"
            ],
            "hint": "区分真实现金与正确确认时点。",
            "errorType": "确认时点",
            "id": "l4-premature-revenue-q1"
          },
          {
            "prompt": "Ignoring tax, premature revenue of $100 and premature COGS of $70 overstate profit by how much?",
            "zh": "忽略税费，提前确认收入100、销售成本70，利润高估多少？",
            "options": [
              "$30",
              "$170",
              "$100",
              "$70"
            ],
            "answer": 0,
            "explanations": [
              "100−70=30。",
              "利润不是收入加成本。",
              "100只考虑收入，遗漏成本。",
              "70是成本金额。"
            ],
            "hint": "利润影响要同时考虑错误收入与错误费用。",
            "errorType": "计算",
            "id": "l4-premature-revenue-q2"
          }
        ],
        "english": {
          "summary": "Genuine cash does not prove correct revenue timing; eliminating performance obligations too early can overstate profit and equity.",
          "explanation": [
            "This node uses only the historical Evergrande reading provided for the course to explain accounting mechanics, not to describe the company’s current condition. The central issue is transferring advance receipts from contract liabilities into revenue before homes were completed or delivered. Transactions and cash receipts may be real while the recognition period is still wrong.",
            "Correct advance accounting retains the contract liability until applicable revenue recognition requirements are satisfied. Prematurely debiting contract liabilities and crediting revenue removes obligations too soon. Releasing undelivered property costs from inventory further distorts assets and expenses. Statements can be misstated even when every journal entry balances.",
            "Different parts of the reading contain inconsistent bond amounts, composite-entry descriptions, and equity explanations. Those disputed figures are not reproduced here, and no broader regulatory conclusions are added. Instead, an independent numerical example ignores tax: early revenue of 100 and early cost of 70 overstate profit and equity by 30, understate inventory by 70, and understate contract liabilities by 100.",
            "Revenue cut-off review should examine genuine performance and delivery evidence. Bank receipts, signed contracts, and balanced entries are not sufficient proof. Over-time recognition also requires the criteria to be met first; “the project is under construction” does not automatically justify revenue."
          ],
          "rules": [
            "Simplified example: Profit overstatement = Early revenue 100 − Early cost 70 = 30",
            "Assets understated by 70 = Liabilities understated by 100 + Equity overstated by 30",
            "Supplementary case source: Reading-Evergrande Revenue Recognition.pdf, pages 2–7; inconsistent amounts in that reading are not used"
          ],
          "example": {
            "scenario": "Independent teaching example: a customer prepays 100 for an undelivered home. The business incorrectly records revenue of 100 and COGS of 70. Ignore all taxes.",
            "steps": [
              "The correct treatment would retain the contract liability of 100 and inventory cost of 70 as an asset.",
              "The incorrect entries reduce contract liabilities by 100 and inventory by 70, while increasing profit by 30.",
              "Correction restores the contract liability and inventory and reverses the early profit. Detailed historical-restatement accounting is outside this exercise."
            ],
            "conclusion": "The accounts may still balance even though assets, liabilities, profit, and equity are misstated."
          },
          "pitfalls": [
            "“The cash is real, so the revenue must be correct” is false: cash authenticity and correct revenue timing are separate questions."
          ],
          "questions": [
            {
              "explanations": [
                "Cash matters, but it cannot replace evidence of performance.",
                "An unsatisfied obligation cannot be treated as performed simply because payment was received.",
                "An advance is normally a liability, not an owner contribution.",
                "Audit fees do not determine revenue."
              ],
              "hint": "Distinguish genuine cash from correct recognition timing.",
              "id": "l4-premature-revenue-q1"
            },
            {
              "explanations": [
                "100 − 70 = 30.",
                "Profit is not revenue plus cost.",
                "100 considers only revenue and omits the cost effect.",
                "70 is the cost amount."
              ],
              "hint": "Include the effects of both incorrect revenue and incorrect expense.",
              "id": "l4-premature-revenue-q2"
            }
          ]
        }
      }
    ],
    "descriptionEn": "Connect credit sales with collections, then learn the revenue five-step model, contract assets, and recognition timing."
  }
];
