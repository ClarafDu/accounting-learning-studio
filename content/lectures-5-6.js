// Original teaching explanations and practice. Source slides are not redistributed.
export const lectures56 = [
  {
    "id": "l5",
    "number": 5,
    "title": "存货、成本与现金周转",
    "en": "Inventory, Cost of Sales and Cash Conversion",
    "description": "把采购、存货、销售成本、供应商账期和现金回流连成一条完整经营链。",
    "source": "Lecture 5.pdf",
    "pages": 55,
    "nodes": [
      {
        "id": "l5-inventory",
        "title": "卖出前是资产，卖出后是成本",
        "en": "Inventory and Cost of Goods Sold",
        "pages": [
          8,
          9,
          10,
          15
        ],
        "prerequisites": [],
        "summary": "商品成本先作为存货保留，商品售出时才转入销售成本。",
        "explanation": [
          "买来商品并不意味着立刻发生销售成本。商品还在企业手里、能够用于未来销售时，其成本代表尚未消耗的经济资源，记录为存货（Inventory）这一资产。这里记录的是成本，不是准备卖给客户的价格。",
          "卖出商品后，与已售部分对应的账面成本转为销售成本（Cost of Goods Sold, COGS）。商品和服务并存时，课件使用更宽的 Cost of Sales Revenue（COSR）。出售商品的收入与商品成本要分开记录，两个金额通常不同。",
          "因此，一次销售有两条线：按售价记录收入和现金或应收账款；按成本减少存货、增加销售成本。商品去年买入但今年卖出，成本仍属于今年的销售成本。"
        ],
        "rules": [
          "采购时：Dr Inventory / Cr Cash 或 Accounts Payable。",
          "销售时成本部分：Dr COGS / Cr Inventory。",
          "Gross profit = Sales revenue − COGS（只考虑商品业务）。"
        ],
        "example": {
          "scenario": "商店以每件¥60买入10件商品，本月以每件¥100卖出6件，忽略税费、退货和损耗。",
          "steps": [
            "采购形成存货10 × 60 = ¥600。",
            "收入按售价计算：6 × 100 = ¥600；成本按进货成本计算：6 × 60 = ¥360。",
            "留下4件，期末存货为4 × 60 = ¥240。"
          ],
          "conclusion": "本月毛利¥240，期末存货¥240；两者数值相同只是本例巧合。"
        },
        "pitfalls": [
          "销售额不是销售成本；同一销售要分别按售价与成本记录。",
          "本期采购不等于本期销售成本，未售部分仍可能是资产。"
        ],
        "related": [
          "l5-cost-flow",
          "l5-turnover"
        ],
        "lab": "inventory",
        "questions": [
          {
            "id": "l5-inventory-q1",
            "prompt": "Goods costing $80 are sold for $120. What is the cost entry?",
            "zh": "成本$80的商品以$120售出，成本分录是什么？",
            "options": [
              "Dr COGS 80; Cr Inventory 80",
              "Dr Cash 120; Cr Inventory 120",
              "Dr Inventory 80; Cr COGS 80",
              "Dr COGS 120; Cr Cash 120"
            ],
            "answer": 0,
            "explanations": [
              "正确：已售商品的账面成本从资产转成费用。",
              "收款和收入另记，存货不按售价减少。",
              "这会增加存货，与出售后的变化相反。",
              "费用按成本80确认，现金120属于收入收款部分。"
            ],
            "hint": "把售价与商品自身的成本分成两条线。",
            "errorType": "账户与借贷"
          },
          {
            "id": "l5-inventory-q2",
            "prompt": "Which amount remains an asset after a partial sale?",
            "zh": "部分售出后，哪个金额仍是资产？",
            "options": [
              "Selling price of all goods",
              "Cost of unsold goods",
              "Revenue less cash collected",
              "Cost of all goods purchased"
            ],
            "answer": 1,
            "explanations": [
              "售价是潜在收入，不是存货账面成本。",
              "正确：未售商品成本保留为存货。",
              "这通常指向应收账款，不是存货。",
              "已售部分不能继续全部留在存货。"
            ],
            "hint": "问自己：哪些资源还在企业手中？",
            "errorType": "概念混淆"
          }
        ],
        "english": {
          "summary": "Product costs remain in inventory until the goods are sold, when they become cost of goods sold.",
          "explanation": [
            "Buying goods does not immediately create cost of goods sold. While the business still holds goods for future sale, their cost represents an economic resource that has not yet been consumed and is recorded as an asset called inventory. The recorded amount is cost, not the price the business plans to charge customers.",
            "Once goods are sold, the carrying cost of the units sold becomes cost of goods sold (COGS). For businesses providing both goods and services, the slides use the broader term cost of sales revenue (COSR). Sales revenue and the cost of the goods must be recorded separately; the two amounts are usually different.",
            "A sale therefore has two accounting tracks: record revenue and cash or accounts receivable at the selling price; reduce inventory and increase COGS at cost. If goods were purchased last year but sold this year, their cost still belongs in this year’s COGS."
          ],
          "rules": [
            "On purchase: Dr Inventory / Cr Cash or Accounts Payable.",
            "Cost entry on sale: Dr COGS / Cr Inventory.",
            "Gross profit = Sales revenue − COGS (for the goods business considered here)."
          ],
          "example": {
            "scenario": "A shop purchases 10 units at ¥60 each and sells 6 this month at ¥100 each. Ignore taxes, returns and losses.",
            "steps": [
              "The purchase creates inventory of 10 × 60 = ¥600.",
              "Revenue uses selling price: 6 × 100 = ¥600; COGS uses purchase cost: 6 × 60 = ¥360.",
              "Four units remain, so ending inventory is 4 × 60 = ¥240."
            ],
            "conclusion": "Gross profit is ¥240 and ending inventory is ¥240. Their equality is only a coincidence in this example."
          },
          "pitfalls": [
            "Sales revenue is not COGS. The same sale requires separate entries at selling price and at cost.",
            "Current purchases are not necessarily current COGS; unsold goods may remain an asset."
          ],
          "questions": [
            {
              "id": "l5-inventory-q1",
              "explanations": [
                "Correct: the carrying cost of goods sold moves from an asset to an expense.",
                "Cash collection and revenue require a separate entry; inventory is not reduced at selling price.",
                "This increases inventory, the opposite of what happens on a sale.",
                "Expense is recognised at the $80 cost; the $120 cash belongs to the sales and collection entry."
              ],
              "hint": "Separate the selling price from the cost of the goods."
            },
            {
              "id": "l5-inventory-q2",
              "explanations": [
                "Selling price represents potential revenue, not inventory’s carrying cost.",
                "Correct: the cost of unsold goods remains in inventory.",
                "This generally points to accounts receivable, not inventory.",
                "The cost of units already sold cannot all remain in inventory."
              ],
              "hint": "Ask which resources the business still holds."
            }
          ]
        }
      },
      {
        "id": "l5-product-cost",
        "title": "商品成本与制造成本怎样形成",
        "en": "Product Cost and Manufacturing Cost",
        "pages": [
          21,
          22,
          23
        ],
        "prerequisites": [
          "l5-inventory"
        ],
        "summary": "把为产品形成所需的成本归集到存货，再在售出时转为费用。",
        "explanation": [
          "零售商买进商品再转卖，理解存货可先从采购成本开始。制造商则要把材料加工成产品，因此成本会经过原材料（Raw Materials）、在产品（Work in Process）和产成品（Finished Goods）三个阶段。三个名称描述完成程度，不是三种不同的利润。",
          "直接成本（Direct Costs）可以直接追踪到产品，例如某产品消耗的材料和制造工人工时。间接制造成本（Manufacturing Overhead）不能经济地逐件追踪，例如工厂电费、生产设备折旧，需要按合理基础分配。间接并不意味着不属于产品成本。",
          "本课的入门思路是材料、直接人工及合理分配的制造间接费用形成产品成本。销售部门的广告、总部管理等通常属于期间费用，不能只因希望未来有收益就塞进存货。实际计量还受相关准则限制，本例忽略异常浪费等问题。"
        ],
        "rules": [
          "简化制造成本 = Direct materials + Direct labor + Allocated manufacturing overhead。",
          "生产设备折旧可能进入制造成本；办公设备折旧的用途不同。"
        ],
        "example": {
          "scenario": "生产100件产品，材料¥3,000、直接人工¥2,000、合理分配工厂间接费用¥1,000；另有销售广告费¥800。",
          "steps": [
            "归集产品成本3,000 + 2,000 + 1,000 = ¥6,000。",
            "单位成本6,000 ÷ 100 = ¥60。",
            "广告费不加入这批产品的成本，在符合确认条件的期间计入费用。"
          ],
          "conclusion": "这批产品成本¥6,000，单位¥60；不是把所有企业支出平均到产品上。"
        },
        "pitfalls": [
          "Direct 是可直接追踪，不等于现金支付；Indirect 也不是自动排除在存货之外。",
          "在产品虽然未完工，也可能属于存货资产。"
        ],
        "related": [
          "l5-inventory",
          "l5-cost-flow"
        ],
        "lab": null,
        "questions": [
          {
            "id": "l5-product-cost-q1",
            "prompt": "Which item is manufacturing overhead?",
            "zh": "哪项属于制造间接费用？",
            "options": [
              "Customer receivable",
              "Head-office entertainment",
              "Sales commission",
              "Factory electricity shared by products"
            ],
            "answer": 3,
            "explanations": [
              "应收账款是资产，不是制造成本。",
              "总部招待费通常属于期间费用。",
              "销售佣金通常是销售费用，不是生产间接费。",
              "正确：共同的工厂用电通常需要分配给产品。"
            ],
            "hint": "先看用途是否在生产，再看能否直接追踪。",
            "errorType": "概念混淆"
          },
          {
            "id": "l5-product-cost-q2",
            "prompt": "Materials are $30, labor $20 and allocated factory overhead $10 per unit. What is product cost?",
            "zh": "单位材料30、人工20、分配制造间接费用10，单位产品成本多少？",
            "options": [
              "$30",
              "$50",
              "$60",
              "$10"
            ],
            "answer": 2,
            "explanations": [
              "只包括材料，遗漏人工和间接费。",
              "遗漏合理分配的制造间接费。",
              "正确：30 + 20 + 10 = 60。",
              "只计算了间接费。"
            ],
            "hint": "三种制造成本应一起归集。",
            "errorType": "计算"
          }
        ],
        "english": {
          "summary": "Accumulate the costs needed to produce goods in inventory, then expense them when the goods are sold.",
          "explanation": [
            "A retailer purchases goods for resale, so purchase cost provides a useful starting point for inventory. A manufacturer turns materials into products, and costs pass through raw materials, work in process and finished goods. These names describe stages of completion, not three different types of profit.",
            "Direct costs can be traced directly to a product, such as materials consumed by that product and manufacturing workers’ time. Manufacturing overhead cannot be economically traced unit by unit, such as shared factory electricity and production-equipment depreciation; it must be allocated on a reasonable basis. Indirect does not mean excluded from product cost.",
            "The introductory approach here combines materials, direct labour and reasonably allocated manufacturing overhead into product cost. Advertising by the sales department and head-office administration are generally period expenses. They cannot be put into inventory merely because future benefits are hoped for. Actual measurement is also constrained by applicable standards; this example ignores issues such as abnormal waste."
          ],
          "rules": [
            "Simplified manufacturing cost = Direct materials + Direct labour + Allocated manufacturing overhead.",
            "Production-equipment depreciation may enter manufacturing cost; office-equipment depreciation serves a different purpose."
          ],
          "example": {
            "scenario": "Producing 100 units requires ¥3,000 of materials, ¥2,000 of direct labour and ¥1,000 of reasonably allocated factory overhead. Sales advertising costs an additional ¥800.",
            "steps": [
              "Total product cost is 3,000 + 2,000 + 1,000 = ¥6,000.",
              "Unit cost is 6,000 ÷ 100 = ¥60.",
              "Advertising is excluded from the cost of this batch and expensed in the period meeting the recognition criteria."
            ],
            "conclusion": "The batch costs ¥6,000, or ¥60 per unit. This does not mean spreading every business expenditure over products."
          },
          "pitfalls": [
            "Direct means directly traceable, not paid in cash. Indirect costs are not automatically excluded from inventory.",
            "Work in process can be inventory even though production is incomplete."
          ],
          "questions": [
            {
              "id": "l5-product-cost-q1",
              "explanations": [
                "A customer receivable is an asset, not manufacturing cost.",
                "Head-office entertainment is usually a period expense.",
                "Sales commissions are usually selling expenses, not factory overhead.",
                "Correct: shared factory electricity normally needs allocation to products."
              ],
              "hint": "First identify whether the use is manufacturing, then whether the cost is directly traceable."
            },
            {
              "id": "l5-product-cost-q2",
              "explanations": [
                "This includes only materials and omits labour and overhead.",
                "This omits reasonably allocated factory overhead.",
                "Correct: 30 + 20 + 10 = 60.",
                "This includes only overhead."
              ],
              "hint": "Accumulate all three manufacturing cost components."
            }
          ]
        }
      },
      {
        "id": "l5-cost-flow",
        "title": "存货如何结转，FIFO与平均成本",
        "en": "Inventory Roll-forward and Cost Flow Assumptions",
        "pages": [
          11,
          12,
          13,
          14,
          15,
          31,
          32,
          33,
          34,
          35
        ],
        "prerequisites": [
          "l5-inventory",
          "l5-product-cost"
        ],
        "summary": "先用成本流量守恒核对存货，再按题目给定的方法分配已售与未售成本。",
        "explanation": [
          "期初存货加本期购入或生产完成的成本，构成可供销售的商品成本。这些成本最终分到已售商品和期末未售商品。在没有减值、损失、退货等其他变动的简化情况下，两边必须相等。",
          "不同批次价格不同，就需要成本流转假设。先进先出（FIFO）把较早批次的成本先分给已售商品；加权平均法把可供销售成本分摊到总数量；个别计价（Specific Identification）追踪实际指定商品。成本假设不必等于实物搬运次序。",
          "课件也介绍后进先出（LIFO），即后购入成本先转出。但方法是否允许使用取决于适用准则，不能把所有方法当成在所有地区都可选。以下加权平均使用期间一次计算；移动平均需要按每次采购重新计算。"
        ],
        "rules": [
          "无其他变动时：COGS = Beginning inventory + Purchases − Ending inventory。",
          "期间加权平均单位成本 = 可供销售总成本 ÷ 可供销售总数量。",
          "FIFO：最早成本先进入COGS；LIFO：最新成本先进入COGS。"
        ],
        "example": {
          "scenario": "先买10件，每件¥10；再买10件，每件¥14；期间卖出12件，无其他变动。",
          "steps": [
            "可供销售20件，总成本100 + 140 = ¥240。",
            "FIFO成本为10 × 10 + 2 × 14 = ¥128，期末8件成本¥112。",
            "期间加权平均成本240 ÷ 20 = ¥12，COGS为12 × 12 = ¥144，期末¥96。"
          ],
          "conclusion": "两种方法的总成本均为¥240，区别在本期费用和期末资产之间如何分配。"
        },
        "pitfalls": [
          "FIFO并不是用最早批次售价计算成本。",
          "存在减值等其他变动时，应单列变动，不能机械用最简公式解释全部差额。"
        ],
        "related": [
          "l5-write-down",
          "l5-turnover"
        ],
        "lab": "inventory",
        "questions": [
          {
            "id": "l5-cost-flow-q1",
            "prompt": "Beginning inventory is $100, purchases $500 and ending inventory $150. With no other changes, COGS is:",
            "zh": "期初100、采购500、期末150，无其他变动时COGS为多少？",
            "options": [
              "$450",
              "$550",
              "$650",
              "$150"
            ],
            "answer": 0,
            "explanations": [
              "正确：100 + 500 − 150 = 450。",
              "期末存货需要减去，不是加50。",
              "这是加上期末存货，重复计算未售部分。",
              "这是期末资产，不是已售成本。"
            ],
            "hint": "把可供销售成本分成已售与未售两部分。",
            "errorType": "计算"
          },
          {
            "id": "l5-cost-flow-q2",
            "prompt": "Under FIFO, which costs enter COGS first?",
            "zh": "FIFO下哪些成本先进入COGS？",
            "options": [
              "The latest purchase costs",
              "The earliest inventory costs",
              "An arbitrary average",
              "The highest selling prices"
            ],
            "answer": 1,
            "explanations": [
              "这是LIFO的逻辑。",
              "正确：First-in对应较早取得的成本。",
              "平均法与FIFO不同。",
              "售价不决定存货成本流转。"
            ],
            "hint": "First-in, first-out中的in指成本批次进入。",
            "errorType": "英文理解"
          }
        ],
        "english": {
          "summary": "Reconcile inventory using the cost roll-forward, then allocate sold and unsold costs using the method specified.",
          "explanation": [
            "Beginning inventory plus the cost purchased or completed during the period gives the cost of goods available for sale. That cost is ultimately divided between goods sold and unsold ending inventory. With no write-downs, losses, returns or other movements, the two sides must reconcile.",
            "When different batches have different prices, a cost flow assumption is needed. FIFO assigns the earliest inventory costs to goods sold first; weighted average divides total available cost over total units; specific identification traces the actual designated goods. The cost assumption need not match the physical movement of goods.",
            "The slides also introduce LIFO, which assigns the latest purchase costs to goods sold first. Whether a method is permitted depends on the applicable standards, so the methods are not all freely available in every jurisdiction. The weighted-average example below calculates one average for the period; a moving average is recalculated after each purchase."
          ],
          "rules": [
            "With no other changes: COGS = Beginning inventory + Purchases − Ending inventory.",
            "Periodic weighted-average unit cost = Total cost available for sale ÷ Total units available for sale.",
            "FIFO assigns earliest costs to COGS first; LIFO assigns latest costs first."
          ],
          "example": {
            "scenario": "Buy 10 units at ¥10, then 10 at ¥14, and sell 12 during the period. There are no other changes.",
            "steps": [
              "There are 20 units available, costing 100 + 140 = ¥240.",
              "FIFO COGS is 10 × 10 + 2 × 14 = ¥128; the remaining 8 units cost ¥112.",
              "Periodic average unit cost is 240 ÷ 20 = ¥12. COGS is 12 × 12 = ¥144, leaving ¥96 in inventory."
            ],
            "conclusion": "Both methods allocate the same ¥240 total cost. They differ in the split between this period’s expense and ending assets."
          },
          "pitfalls": [
            "FIFO does not use the selling prices of the earliest batch.",
            "When write-downs or other movements exist, show them separately instead of using the simplest formula to explain the entire difference."
          ],
          "questions": [
            {
              "id": "l5-cost-flow-q1",
              "explanations": [
                "Correct: 100 + 500 − 150 = 450.",
                "Ending inventory must be deducted; this is not an addition of 50.",
                "This adds ending inventory and double-counts unsold cost.",
                "This is the ending asset, not the cost sold."
              ],
              "hint": "Divide cost available for sale between sold and unsold goods."
            },
            {
              "id": "l5-cost-flow-q2",
              "explanations": [
                "That describes LIFO.",
                "Correct: first-in refers to costs acquired earlier.",
                "An average method differs from FIFO.",
                "Selling prices do not determine inventory cost flow."
              ],
              "hint": "In first-in, first-out, “in” refers to the order of cost batches."
            }
          ]
        }
      },
      {
        "id": "l5-write-down",
        "title": "存货跌价与可变现净值",
        "en": "Lower of Cost and Net Realisable Value",
        "pages": [
          25,
          26,
          27,
          28,
          29,
          30
        ],
        "prerequisites": [
          "l5-inventory"
        ],
        "summary": "存货价值下降时及时确认损失，不能仅凭预期涨价把存货调到高于成本。",
        "explanation": [
          "商品还没卖出也可能已经不值原来的成本：损坏、过时、滞销或售价下降都会影响能收回的金额。继续按无法收回的成本列报，会把资产和利润报得过高，因此期末要检查减值。",
          "可变现净值（Net Realisable Value, NRV）是预计售价减去预计完工和销售所需成本。它不是不加调整的市场售价。课件采用成本与NRV孰低的逻辑，低于账面成本的部分确认为损失，并降低存货。",
          "课件“不要调增”的入门结论应理解为不能因涨价把未曾减值的存货升到成本之上。已减值存货以后能否转回、限额多少，要看适用准则；有的体系允许一定范围转回，有的限制更严格。本节不把一个简化结论推广成所有准则共同规则。"
        ],
        "rules": [
          "NRV = Estimated selling price − Costs to complete and sell。",
          "简化跌价损失 = max(0, Cost − NRV)。",
          "减值分录：Dr Inventory impairment loss / Cr Inventory（或备抵账户）。"
        ],
        "example": {
          "scenario": "一批存货成本¥1,000，预计售价¥880，完工及销售还需¥50。",
          "steps": [
            "计算NRV：880 − 50 = ¥830。",
            "比较成本1,000与NRV830，采用较低的830。",
            "确认跌价损失1,000 − 830 = ¥170；忽略税，资产和本期利润均减少170。"
          ],
          "conclusion": "存货列报¥830；这笔损失不要求当期再支付¥170现金。"
        },
        "pitfalls": [
          "NRV不是销售收入，也不是售价本身。",
          "减值损失减少利润并不表示立刻等额现金流出。",
          "正常预付或存货余额本身不构成舞弊证据。"
        ],
        "related": [
          "l5-cost-flow",
          "l6-capitalization"
        ],
        "lab": null,
        "questions": [
          {
            "id": "l5-write-down-q1",
            "prompt": "Inventory costs $900. Expected selling price is $850 and selling costs are $50. What is NRV?",
            "zh": "存货成本900，预计售价850，销售成本50，NRV多少？",
            "options": [
              "$800",
              "$100",
              "$900",
              "$850"
            ],
            "answer": 0,
            "explanations": [
              "正确：850 − 50 = 800。",
              "这是成本与NRV差额，即本例减值额。",
              "这是历史成本。",
              "还没有扣销售所需成本。"
            ],
            "hint": "先求净回收金额，再和成本比较。",
            "errorType": "计算"
          },
          {
            "id": "l5-write-down-q2",
            "prompt": "Ignoring tax, an inventory write-down immediately causes:",
            "zh": "忽略税，存货减值立即导致什么？",
            "options": [
              "Higher inventory and higher profit",
              "Lower inventory and lower profit",
              "Lower cash and unchanged profit",
              "Higher revenue"
            ],
            "answer": 1,
            "explanations": [
              "减值方向相反。",
              "正确：资产减少，损失使利润下降。",
              "确认减值无需当期现金支付，且会影响利润。",
              "减值不产生销售收入。"
            ],
            "hint": "区分资产计量变动与现金支付。",
            "errorType": "概念混淆"
          }
        ],
        "english": {
          "summary": "Recognise losses when inventory value declines; an expected price rise does not justify marking inventory above cost.",
          "explanation": [
            "Goods can lose value before they are sold: damage, obsolescence, slow movement or falling selling prices may reduce the amount recoverable. Keeping an unrecoverable cost on the balance sheet overstates assets and profit, so inventory needs review at period-end.",
            "Net realisable value (NRV) is estimated selling price less estimated costs to complete and sell. It is not an unadjusted market selling price. The slides apply lower of cost and NRV: the shortfall below carrying cost is recognised as a loss and reduces inventory.",
            "The introductory “no write-up” statement means that a price rise does not justify increasing inventory that has never been written down above its cost. Whether a previous write-down can later be reversed, and within what limit, depends on applicable standards. Some frameworks allow limited reversal and others impose stricter restrictions. This section does not generalise the simplified statement into a universal rule."
          ],
          "rules": [
            "NRV = Estimated selling price − Costs to complete and sell.",
            "Simplified write-down loss = max(0, Cost − NRV).",
            "Write-down entry: Dr Inventory impairment loss / Cr Inventory (or an allowance account)."
          ],
          "example": {
            "scenario": "A batch costs ¥1,000. Its estimated selling price is ¥880, and completion and selling will cost another ¥50.",
            "steps": [
              "NRV is 880 − 50 = ¥830.",
              "Compare cost of 1,000 with NRV of 830 and use the lower amount, 830.",
              "Recognise a write-down of 1,000 − 830 = ¥170. Ignoring tax, both assets and current profit fall by 170."
            ],
            "conclusion": "Inventory is reported at ¥830. Recognising the loss does not require a further ¥170 cash payment now."
          },
          "pitfalls": [
            "NRV is neither sales revenue nor the selling price alone.",
            "A loss reducing profit does not necessarily cause an equal immediate cash outflow.",
            "A normal prepaid or inventory balance is not in itself evidence of fraud."
          ],
          "questions": [
            {
              "id": "l5-write-down-q1",
              "explanations": [
                "Correct: 850 − 50 = 800.",
                "This is the difference between cost and NRV: the write-down in this example.",
                "This is historical cost.",
                "Completion and selling costs have not yet been deducted."
              ],
              "hint": "Calculate net recovery first, then compare it with cost."
            },
            {
              "id": "l5-write-down-q2",
              "explanations": [
                "A write-down moves both in the opposite direction.",
                "Correct: the asset declines, and the loss reduces profit.",
                "A write-down needs no current cash payment and does affect profit.",
                "A write-down creates no sales revenue."
              ],
              "hint": "Distinguish asset measurement from cash payment."
            }
          ]
        }
      },
      {
        "id": "l5-turnover",
        "title": "存货周转率与持有天数",
        "en": "Inventory Turnover and Days Inventory Outstanding",
        "pages": [
          16,
          17,
          18,
          19,
          20
        ],
        "prerequisites": [
          "l5-inventory",
          "l5-cost-flow"
        ],
        "summary": "用销售成本与平均存货衡量成本周转速度，同时警惕缺货与行业差异。",
        "explanation": [
          "销售成本是一段期间已经流出的商品成本，存货是某个时点还留着的成本。为了让期间流量和存量更可比，课件用期初与期末余额的平均数作为平均存货。",
          "周转率（Inventory Turnover）表示本期销售成本相当于平均存货的多少倍。持有天数（Days Inventory Outstanding, DIO）把它转换成便于理解的天数：一年按365天时，用365除以周转率。它是估计的平均速度，并不是追踪每一件商品的实际年龄。",
          "天数较长可能说明资本积压、滞销或备货增加；过短也可能意味着缺货、失去销售机会。因此课件强调适量库存。比较时保持期间、成本口径和行业背景一致，季节性明显时两点平均可能不够代表全年。"
        ],
        "rules": [
          "Average inventory = (Beginning inventory + Ending inventory) ÷ 2。",
          "Inventory turnover = COGS ÷ Average inventory。",
          "DIO = 365 ÷ Inventory turnover（年度数据）。"
        ],
        "example": {
          "scenario": "期初存货¥200，期末¥300，年度COGS为¥1,000。",
          "steps": [
            "平均存货(200 + 300) ÷ 2 = ¥250。",
            "周转率1,000 ÷ 250 = 4次。",
            "持有天数365 ÷ 4 = 91.25天。"
          ],
          "conclusion": "平均成本约每91天周转一次；单凭这一数字不能判断经营一定优于同行。"
        },
        "pitfalls": [
          "分子用COGS而非售价口径的收入，避免售价与成本混配。",
          "周转率是倍数，持有期是天数，方向相反。"
        ],
        "related": [
          "l5-payable-days",
          "l5-ccc"
        ],
        "lab": null,
        "questions": [
          {
            "id": "l5-turnover-q1",
            "prompt": "Annual COGS is $1,200 and average inventory is $300. Inventory turnover is:",
            "zh": "年度COGS1200，平均存货300，周转率多少？",
            "options": [
              "0.25 times",
              "4 times",
              "300 days",
              "1,500 times"
            ],
            "answer": 1,
            "explanations": [
              "倒置了分子和分母。",
              "正确：1,200 ÷ 300 = 4次。",
              "单位也不对，题目问倍数。",
              "成本和存货不能相加得到周转率。"
            ],
            "hint": "问一年流出的成本相当于多少份平均库存。",
            "errorType": "计算"
          },
          {
            "id": "l5-turnover-q2",
            "prompt": "A very short inventory holding period may indicate:",
            "zh": "存货持有期极短可能表示什么？",
            "options": [
              "Efficient turnover, but possible stockout risk",
              "Guaranteed higher profit",
              "No risk of stockouts",
              "Only poor collection of receivables"
            ],
            "answer": 0,
            "explanations": [
              "正确：较快周转的同时应检查供货保障。",
              "利润还受到毛利率、费用等因素影响。",
              "库存过少反而可能缺货。",
              "应收回收与存货持有是不同环节。"
            ],
            "hint": "快并不代表在所有情境下都最好。",
            "errorType": "概念混淆"
          }
        ],
        "english": {
          "summary": "Compare COGS with average inventory to measure turnover while considering stockout risk and industry context.",
          "explanation": [
            "COGS is a flow of goods cost out of the business during a period; inventory is the cost still held at a point in time. To make the period flow and stock more comparable, the slides use the average of opening and closing inventory.",
            "Inventory turnover expresses how many times the period’s COGS covers average inventory. Days inventory outstanding (DIO) converts that into days: for a 365-day year, divide 365 by turnover. It estimates average speed rather than tracking the actual age of every item.",
            "Longer days may indicate tied-up capital, slow-moving goods or increased stocking. Very short days can also cause stockouts and lost sales, so the slides emphasise an appropriate inventory level. Compare consistent periods, cost definitions and industry settings; with strong seasonality, a two-point average may not represent the year well."
          ],
          "rules": [
            "Average inventory = (Beginning inventory + Ending inventory) ÷ 2.",
            "Inventory turnover = COGS ÷ Average inventory.",
            "DIO = 365 ÷ Inventory turnover (using annual figures)."
          ],
          "example": {
            "scenario": "Beginning inventory is ¥200, ending inventory ¥300 and annual COGS ¥1,000.",
            "steps": [
              "Average inventory is (200 + 300) ÷ 2 = ¥250.",
              "Turnover is 1,000 ÷ 250 = 4 times.",
              "Holding period is 365 ÷ 4 = 91.25 days."
            ],
            "conclusion": "On average, inventory cost turns over about every 91 days. That figure alone does not prove performance is better than competitors."
          },
          "pitfalls": [
            "Use COGS rather than sales revenue in the numerator to avoid mixing selling-price and cost bases.",
            "Turnover is a multiple; holding period is measured in days. They move in opposite directions."
          ],
          "questions": [
            {
              "id": "l5-turnover-q1",
              "explanations": [
                "The numerator and denominator have been reversed.",
                "Correct: 1,200 ÷ 300 = 4 times.",
                "The unit is wrong; the question asks for a multiple.",
                "Adding COGS and inventory does not calculate turnover."
              ],
              "hint": "Ask how many average inventories equal the cost sold during the year."
            },
            {
              "id": "l5-turnover-q2",
              "explanations": [
                "Correct: rapid turnover should be assessed alongside supply reliability.",
                "Profit also depends on margins, expenses and other factors.",
                "Too little inventory can actually increase stockout risk.",
                "Receivables collection and inventory holding are separate stages."
              ],
              "hint": "Faster does not mean best in every situation."
            }
          ]
        }
      },
      {
        "id": "l5-payables",
        "title": "赊购与偿还应付账款",
        "en": "Trade Accounts Payable",
        "pages": [
          36,
          38,
          40,
          41,
          42
        ],
        "prerequisites": [
          "l5-inventory"
        ],
        "summary": "赊购先增加资产和负债，付款时清偿负债，不重复确认成本。",
        "explanation": [
          "供应商先交货，企业后付款，就产生应付账款（Accounts Payable, A/P）。课件以短期、通常不计息的供应商欠款说明这一科目；它可以来自存货采购，也可以来自已经接受的服务。",
          "买入存货时，企业已经控制商品，但尚未付钱：借记存货、贷记应付账款。以后支付供应商时，借记应付账款、贷记现金。付款减少已有债务，不是此时才发生采购，更不是第二次确认费用。",
          "期末应付余额记录尚未清偿的欠款，并不等于全部未售存货。企业可能已经售出商品但还没到付款日，也可能付清货款但商品仍未卖出。课件按库存周数估计应付的例子依赖均匀采购和特定期限假设。"
        ],
        "rules": [
          "赊购商品：Dr Inventory / Cr Accounts Payable。",
          "偿还供应商：Dr Accounts Payable / Cr Cash。",
          "无其他变动时：Ending A/P = Beginning A/P + Credit purchases − Payments。"
        ],
        "example": {
          "scenario": "企业赊购¥1,000材料，之后向供应商支付¥700，无期初余额和其他变动。",
          "steps": [
            "赊购：存货增加1,000，应付账款增加1,000。",
            "付款：应付账款减少700，现金减少700。",
            "欠供应商余额为1,000 − 700 = ¥300。"
          ],
          "conclusion": "余额¥300是未付金额；材料是否已使用或售出需要另查。"
        },
        "pitfalls": [
          "Payable是欠别人，Receivable是别人欠你。",
          "支付应付账款通常不再产生费用，因为相关资产或费用已在之前确认。"
        ],
        "related": [
          "l5-payable-days",
          "l6-expense-payable"
        ],
        "lab": null,
        "questions": [
          {
            "id": "l5-payables-q1",
            "prompt": "A company pays $400 of an existing supplier balance. Which entry is correct?",
            "zh": "支付已有供应商欠款400，哪条分录正确？",
            "options": [
              "Dr Cash; Cr Accounts Payable",
              "Dr Inventory; Cr Revenue",
              "Dr COGS; Cr Cash",
              "Dr Accounts Payable; Cr Cash"
            ],
            "answer": 3,
            "explanations": [
              "这是增加欠款和现金，方向相反。",
              "付款不产生收入。",
              "清偿旧债不自动再次形成COGS。",
              "正确：借记减少负债，贷记减少现金。"
            ],
            "hint": "先问欠款是否已经在账上。",
            "errorType": "账户与借贷"
          },
          {
            "id": "l5-payables-q2",
            "prompt": "Accounts payable may arise from:",
            "zh": "应付账款可能来自什么？",
            "options": [
              "Only unsold goods",
              "Only bank borrowing",
              "Inventory purchases or supplier services on credit",
              "Only customer advances"
            ],
            "answer": 2,
            "explanations": [
              "已售商品采购也可能尚欠款。",
              "银行借款通常单独列为借款，不是贸易应付。",
              "正确：采购商品与接受供应商服务都可产生应付。",
              "客户预付款通常形成合同负债或递延收入。"
            ],
            "hint": "看企业欠的是供应商还是客户、银行。",
            "errorType": "概念混淆"
          }
        ],
        "english": {
          "summary": "Credit purchases initially increase an asset and a liability; later payment settles the liability without recording cost twice.",
          "explanation": [
            "When a supplier delivers first and the business pays later, accounts payable (A/P) arise. The slides describe short-term supplier obligations that are normally non-interest-bearing. They may arise from inventory purchases or from services already received.",
            "On purchasing inventory, the business controls goods but has not paid: debit inventory and credit accounts payable. When the supplier is later paid, debit accounts payable and credit cash. Payment reduces an existing debt; it is not a second purchase or a second expense.",
            "Ending A/P represents unpaid obligations, not all unsold inventory. Goods may already have been sold while payment is not yet due, or paid for while still unsold. The slides’ estimate based on inventory weeks relies on uniform purchasing and specified payment-term assumptions."
          ],
          "rules": [
            "Credit purchase of goods: Dr Inventory / Cr Accounts Payable.",
            "Payment to supplier: Dr Accounts Payable / Cr Cash.",
            "With no other movements: Ending A/P = Beginning A/P + Credit purchases − Payments."
          ],
          "example": {
            "scenario": "A business purchases ¥1,000 of materials on credit, then pays the supplier ¥700. There is no opening balance or other movement.",
            "steps": [
              "The purchase increases inventory and accounts payable by 1,000.",
              "Payment reduces accounts payable and cash by 700.",
              "The supplier balance is 1,000 − 700 = ¥300."
            ],
            "conclusion": "The ¥300 is unpaid debt. Whether the materials have been used or sold must be checked separately."
          },
          "pitfalls": [
            "Payable means the business owes others; receivable means others owe the business.",
            "Paying A/P normally creates no new expense because the related asset or expense was already recognised."
          ],
          "questions": [
            {
              "id": "l5-payables-q1",
              "explanations": [
                "This increases both cash and the debt, the opposite direction.",
                "Payment does not generate revenue.",
                "Settling an old debt does not automatically create COGS again.",
                "Correct: a debit reduces the liability and a credit reduces cash."
              ],
              "hint": "Ask whether the liability was already recorded before payment."
            },
            {
              "id": "l5-payables-q2",
              "explanations": [
                "Purchases of goods already sold can also remain unpaid.",
                "Bank borrowing is normally reported separately from trade payables.",
                "Correct: goods and supplier services can both create A/P when obtained on credit.",
                "Customer advances generally create a contract liability or deferred revenue."
              ],
              "hint": "Identify whether the counterparty is a supplier, customer or bank."
            }
          ]
        }
      },
      {
        "id": "l5-payable-days",
        "title": "付款期为什么能缓解资金占用",
        "en": "Days Payable Outstanding",
        "pages": [
          40,
          42,
          43
        ],
        "prerequisites": [
          "l5-payables",
          "l5-turnover"
        ],
        "summary": "应付持有期估计供应商给予企业多长付款缓冲，但计算要匹配口径。",
        "explanation": [
          "买货后多久付款决定企业需要多早拿出现金。付款期越长，供应商暂时替企业承担的资金越多，这也是应付账款与营运资金相联系的原因。",
          "课件用平均应付账款除以COSR再乘365估计应付持有期（Days Payable Outstanding, DPO），并给出它和存货天数的关系。应付与成本应尽量属于同一业务；如果应付含大量服务欠款而分母只用商品COGS，解释会失真。",
          "严格采购分析也可能使用赊购额作分母。考试先遵循题目和课件口径，并说明简化假设。付款期上升可以来自议价能力，也可能来自资金紧张、逾期欠款，不能只看天数越大越好。"
        ],
        "rules": [
          "Average A/P = (Beginning A/P + Ending A/P) ÷ 2。",
          "课件近似：DPO = Average A/P ÷ COSR × 365。",
          "相同口径下：DPO = Average A/P ÷ Average inventory × DIO。"
        ],
        "example": {
          "scenario": "年度商品COGS为¥730,000，相关平均A/P为¥100,000；按课件近似、全年365天。",
          "steps": [
            "每天平均销售成本730,000 ÷ 365 = ¥2,000。",
            "应付余额相当于100,000 ÷ 2,000 = 50天的成本。",
            "若使用采购额或其他业务应付，须重新确认分母和余额口径。"
          ],
          "conclusion": "近似付款期50天，不意味着所有发票都恰好第50天支付。"
        },
        "pitfalls": [
          "期末余额不能在所有题目中代替平均余额。",
          "延长付款期不是免费且无限的收益，还要考虑信用、折扣和供应关系。"
        ],
        "related": [
          "l5-ccc"
        ],
        "lab": null,
        "questions": [
          {
            "id": "l5-payable-days-q1",
            "prompt": "Using the lecture approximation, average A/P is $200 and annual COSR is $1,460. DPO equals:",
            "zh": "按课件近似，平均应付200、年度COSR1460，DPO多少？",
            "options": [
              "50 days",
              "7.3 days",
              "200 days",
              "5 days"
            ],
            "answer": 0,
            "explanations": [
              "正确：200 ÷ 1,460 × 365 = 50天。",
              "7.3是1460÷200，不是天数。",
              "余额本身不具有天数单位。",
              "遗漏或误用了年度换算。"
            ],
            "hint": "先求每天成本，再看应付能覆盖多少天。",
            "errorType": "计算"
          },
          {
            "id": "l5-payable-days-q2",
            "prompt": "A rise in DPO always proves that a firm is healthier. This statement is:",
            "zh": "DPO上升总能证明企业更健康，这句话怎样？",
            "options": [
              "True, because profits must rise",
              "False, because it may reflect financial distress",
              "False, because A/P is an asset",
              "True, because delaying payment has no cost"
            ],
            "answer": 1,
            "explanations": [
              "付款时点不直接保证利润上升。",
              "正确：议价能力和支付困难都可能拉长付款期。",
              "A/P是负债，不能用错误理由否定。",
              "延迟可能损失折扣和信用。"
            ],
            "hint": "区分主动争取账期与被迫逾期。",
            "errorType": "概念混淆"
          }
        ],
        "english": {
          "summary": "Days payable estimates how long suppliers finance the business, but the calculation needs consistent definitions.",
          "explanation": [
            "How soon goods are paid for determines how early the business needs cash. Longer payment terms mean suppliers temporarily fund more of the operating cycle, connecting A/P with working-capital needs.",
            "The slides estimate days payable outstanding (DPO) as average A/P divided by COSR and multiplied by 365, and relate it to inventory days. The payables and costs should relate to the same business. If A/P contains substantial service balances while the denominator includes only goods COGS, interpretation is distorted.",
            "A more purchase-focused calculation may use credit purchases as the denominator. For exams, follow the question’s and slides’ definition and state the simplifications. Rising DPO can reflect bargaining power, but also financial distress or overdue bills; higher is not automatically better."
          ],
          "rules": [
            "Average A/P = (Beginning A/P + Ending A/P) ÷ 2.",
            "Lecture approximation: DPO = Average A/P ÷ COSR × 365.",
            "With consistent definitions: DPO = Average A/P ÷ Average inventory × DIO."
          ],
          "example": {
            "scenario": "Annual goods COGS is ¥730,000 and related average A/P is ¥100,000. Use the lecture approximation and a 365-day year.",
            "steps": [
              "Average daily COGS is 730,000 ÷ 365 = ¥2,000.",
              "A/P represents 100,000 ÷ 2,000 = 50 days of cost.",
              "If using purchases or payables from another business, recheck the definitions of the denominator and balances."
            ],
            "conclusion": "The estimated payment period is 50 days. This does not mean every invoice is paid on exactly day 50."
          },
          "pitfalls": [
            "Ending balances cannot replace average balances in every question.",
            "Extending payment terms is not a costless, unlimited benefit; consider credit, discounts and supplier relationships."
          ],
          "questions": [
            {
              "id": "l5-payable-days-q1",
              "explanations": [
                "Correct: 200 ÷ 1,460 × 365 = 50 days.",
                "7.3 is 1,460 ÷ 200, not a number of days.",
                "The balance itself has no unit of days.",
                "The annual-to-daily conversion has been omitted or misused."
              ],
              "hint": "Calculate daily cost, then determine how many days A/P covers."
            },
            {
              "id": "l5-payable-days-q2",
              "explanations": [
                "Payment timing does not directly guarantee higher profit.",
                "Correct: bargaining power and payment difficulties can both lengthen DPO.",
                "A/P is a liability; a false reason does not justify the conclusion.",
                "Delay may cost discounts and creditworthiness."
              ],
              "hint": "Distinguish negotiated terms from forced overdue payment."
            }
          ]
        }
      },
      {
        "id": "l5-ccc",
        "title": "现金转换周期与营运资金",
        "en": "Cash Conversion Cycle and Working Capital",
        "pages": [
          44,
          45,
          46,
          47,
          48,
          49,
          50,
          51,
          52,
          53,
          55
        ],
        "prerequisites": [
          "l5-turnover",
          "l5-payable-days"
        ],
        "summary": "把库存、收款和付款连成时间轴，理解经营需要垫付资金多久。",
        "explanation": [
          "企业先买货，持有存货，再销售给客户，最后收钱。如果采购也能赊账，就不必从买货当天立即垫资。现金转换周期（Cash Conversion Cycle, CCC）衡量现金付给供应商到现金从客户回来的时间间隔。",
          "把存货天数DIO加应收回收天数DSO，再减应付付款天数DPO，就得到CCC。负CCC表示在这一平均经营循环下，企业可以先收到客户现金，再向供应商付款，并不是公式出错或利润为负。",
          "营运资金（Working Capital）通常定义为流动资产减流动负债，是一个金额；CCC是天数，两者有关但不是同一指标。较短CCC通常减少资金占用，但要结合缺货、信用政策和付款风险。课件还用研究说明其经济意义；历史样本关联不等于任何企业或投资必然获得特定收益。"
        ],
        "rules": [
          "CCC = DIO + DSO − DPO。",
          "Working capital = Current assets − Current liabilities。",
          "在同口径简化时间轴中，CCC为负意味着平均收款早于付给供应商。"
        ],
        "example": {
          "scenario": "企业平均存货20天，销售后10天收款，采购后45天付款。",
          "steps": [
            "从采购到客户回款为20 + 10 = 30天。",
            "供应商在第45天才收到款。",
            "CCC = 20 + 10 − 45 = −15天。"
          ],
          "conclusion": "企业平均先收款15天再付款；仍需检查其他支出及经营风险。"
        },
        "pitfalls": [
          "CCC不是销售到收款的天数，后者只是DSO。",
          "负CCC不是负利润；流动资金余额也不能直接当作现金余额。"
        ],
        "related": [
          "l5-payables",
          "l6-accruals"
        ],
        "lab": null,
        "questions": [
          {
            "id": "l5-ccc-q1",
            "prompt": "DIO is 40, DSO is 20 and DPO is 35 days. What is CCC?",
            "zh": "DIO40、DSO20、DPO35天，CCC多少？",
            "options": [
              "55 days",
              "25 days",
              "−25 days",
              "95 days"
            ],
            "answer": 1,
            "explanations": [
              "忽略了库存环节或符号错误。",
              "正确：40 + 20 − 35 = 25。",
              "公式方向被颠倒了。",
              "应减去供应商提供的账期。"
            ],
            "hint": "库存和应收占资金，应付提供缓冲。",
            "errorType": "计算"
          },
          {
            "id": "l5-ccc-q2",
            "prompt": "A negative CCC can mean that a firm:",
            "zh": "负CCC可能意味着什么？",
            "options": [
              "Collects from customers before paying suppliers",
              "Must have negative net income",
              "Has no operating expenses",
              "Has no liabilities"
            ],
            "answer": 0,
            "explanations": [
              "正确：在平均周期下先回款、后付款。",
              "现金时点与利润正负不同。",
              "负CCC不消除工资等其他费用。",
              "应付账期恰可能是负CCC的重要原因。"
            ],
            "hint": "画采购、销售、收款、付款四个时点。",
            "errorType": "概念混淆"
          }
        ],
        "english": {
          "summary": "Connect inventory, collection and payment on a timeline to understand how long operating funds are tied up.",
          "explanation": [
            "A business buys goods, holds inventory, sells to customers and finally collects cash. If purchases are also on credit, cash need not be advanced on the purchase date. The cash conversion cycle (CCC) measures the interval from paying suppliers to receiving cash from customers.",
            "Add inventory days (DIO) and receivables collection days (DSO), then subtract payment days (DPO). A negative CCC means that, on this average operating cycle, customer cash can arrive before suppliers are paid. It does not mean the formula is wrong or that profit is negative.",
            "Working capital is commonly current assets minus current liabilities, a monetary amount; CCC is measured in days. They are related but different. A shorter CCC generally reduces funding needs, but stockouts, credit policy and payment risks matter. The slides also use research to illustrate economic relevance; historical sample associations do not guarantee a specified return for any company or investment."
          ],
          "rules": [
            "CCC = DIO + DSO − DPO.",
            "Working capital = Current assets − Current liabilities.",
            "On the simplified consistent timeline, negative CCC means average customer collection precedes supplier payment."
          ],
          "example": {
            "scenario": "Inventory is held for 20 days, customers pay 10 days after sale, and suppliers are paid 45 days after purchase.",
            "steps": [
              "Purchase to customer collection takes 20 + 10 = 30 days.",
              "The supplier receives payment on day 45.",
              "CCC = 20 + 10 − 45 = −15 days."
            ],
            "conclusion": "The business receives cash an average of 15 days before paying suppliers. Other expenditures and operating risks still need review."
          },
          "pitfalls": [
            "CCC is not simply sale-to-collection time; that is only DSO.",
            "Negative CCC is not negative profit. Working capital is also not the same as the cash balance."
          ],
          "questions": [
            {
              "id": "l5-ccc-q1",
              "explanations": [
                "This omits an operating stage or misuses the signs.",
                "Correct: 40 + 20 − 35 = 25.",
                "The direction of the formula has been reversed.",
                "Subtract the financing period supplied by trade creditors."
              ],
              "hint": "Inventory and receivables tie up funds; payables provide a buffer."
            },
            {
              "id": "l5-ccc-q2",
              "explanations": [
                "Correct: in the average cycle, cash is collected before suppliers are paid.",
                "Cash timing is different from the sign of profit.",
                "Negative CCC does not eliminate wages or other operating expenses.",
                "Supplier payment terms may be a major reason for negative CCC."
              ],
              "hint": "Draw purchase, sale, collection and payment as four points in time."
            }
          ]
        }
      }
    ],
    "descriptionEn": "Connect purchases, inventory, cost of sales, supplier payment terms and cash collection into a complete operating cycle."
  },
  {
    "id": "l6",
    "number": 6,
    "title": "经营费用、预付与应计负债",
    "en": "Operating Expenses, Prepayments and Accruals",
    "description": "区分付款、服务消耗和费用确认的时间，并理解估计、资产化与披露。",
    "source": "Lecture 6.pdf",
    "pages": 43,
    "nodes": [
      {
        "id": "l6-operating-expenses",
        "title": "经营费用如何分类",
        "en": "Operating Expenses, SG&A and R&D",
        "pages": [
          5,
          6,
          8,
          9,
          36,
          40,
          41
        ],
        "prerequisites": [],
        "summary": "费用按业务用途分类，课件中Operating expenses的简写口径需要结合上下文。",
        "explanation": [
          "收入并不是最终利润。企业为销售、管理和研发等活动消耗资源，会产生费用。SG&A是Selling, General and Administrative的缩写，常见项目包括销售人员薪酬、办公租金、营销服务和行政支出。",
          "同一种支出名称不一定永远属于同一个报表项目。广告公司的创意人员直接为客户制作广告，其薪酬可属于服务成本；制造企业销售人员的工资则通常属于销售费用。判断依据是这项资源服务于什么活动。",
          "本讲为讲解预付和应计关系，有时把SG&A、R&D甚至服务COSR统称为Operating expenses。读题应确认具体口径，不能把这种简写当作所有报表唯一格式。R&D列为本课费用类别，也不代表所有准则下任何研发支出都必须立即费用化。"
        ],
        "rules": [
          "Gross profit = Revenue − COSR。",
          "按本课示例格式：Operating income = Gross profit − SG&A − R&D − D&A（避免重复扣除）。",
          "分类要结合活动用途、报表格式及适用政策。"
        ],
        "example": {
          "scenario": "公司收入¥1,000，销售成本¥400，SG&A¥200，R&D¥100，另列折旧摊销¥50，项目之间无重复。",
          "steps": [
            "毛利为1,000 − 400 = ¥600。",
            "扣除其余经营费用200 + 100 + 50 = ¥350。",
            "营业利润为600 − 350 = ¥250，尚未扣利息及所得税。"
          ],
          "conclusion": "营业利润¥250；把毛利当成最终利润会漏掉经营费用。"
        },
        "pitfalls": [
          "科目名称相同不代表用途相同，应先识别生产、交付服务、销售或管理活动。",
          "不能把已包含在某类费用中的折旧再次扣除。"
        ],
        "related": [
          "l6-prepaid",
          "l6-accruals"
        ],
        "lab": null,
        "questions": [
          {
            "id": "l6-operating-expenses-q1",
            "prompt": "Which item is normally SG&A for a retailer?",
            "zh": "对零售商，哪项通常属于SG&A？",
            "options": [
              "Supplier loan principal",
              "Cost of goods sold",
              "Salary of the sales manager",
              "Customer receivable"
            ],
            "answer": 2,
            "explanations": [
              "偿还本金通常不是费用。",
              "商品销售成本通常单独列为COSR。",
              "正确：销售管理人员薪酬属于销售管理活动。",
              "应收账款是资产。"
            ],
            "hint": "用用途分类，不要只看是否支付现金。",
            "errorType": "概念混淆"
          },
          {
            "id": "l6-operating-expenses-q2",
            "prompt": "Revenue is $900, COSR $400 and other operating expenses $300. Operating income is:",
            "zh": "收入900、COSR400、其他经营费用300，营业利润多少？",
            "options": [
              "$300",
              "$900",
              "$500",
              "$200"
            ],
            "answer": 3,
            "explanations": [
              "这是给出的费用金额。",
              "收入尚未扣任何成本费用。",
              "这是毛利，尚未扣其他经营费用。",
              "正确：900 − 400 − 300 = 200。"
            ],
            "hint": "先算毛利，再扣未计入COSR的经营费用。",
            "errorType": "计算"
          }
        ],
        "english": {
          "summary": "Classify expenses by their business purpose and read the slides’ shorthand use of operating expenses in context.",
          "explanation": [
            "Revenue is not final profit. Resources consumed in selling, administration and research activities create expenses. SG&A stands for Selling, General and Administrative; examples include sales staff compensation, office rent, marketing services and administrative spending.",
            "The same expenditure name does not always belong to the same financial statement category. Creative staff in an advertising agency directly producing client campaigns may form part of service cost, whereas a manufacturer’s sales staff wages usually form selling expenses. Classification depends on the activity supported.",
            "To explain prepayments and accruals, this lecture sometimes uses operating expenses as shorthand for SG&A, R&D and even service COSR. Check the scope in each question rather than treating the shorthand as the only reporting format. Listing R&D as an expense category here also does not mean every research or development expenditure must be expensed immediately under every accounting framework."
          ],
          "rules": [
            "Gross profit = Revenue − COSR.",
            "For the example statement format: Operating income = Gross profit − SG&A − R&D − D&A (without double-counting).",
            "Classification depends on activity, statement presentation and applicable accounting policy."
          ],
          "example": {
            "scenario": "A company has revenue ¥1,000, COSR ¥400, SG&A ¥200, R&D ¥100 and separately presented depreciation and amortisation ¥50. These categories do not overlap.",
            "steps": [
              "Gross profit is 1,000 − 400 = ¥600.",
              "Other operating expenses total 200 + 100 + 50 = ¥350.",
              "Operating income is 600 − 350 = ¥250, before interest and income tax."
            ],
            "conclusion": "Operating income is ¥250. Treating gross profit as final profit omits operating expenses."
          },
          "pitfalls": [
            "Identical account names need not have identical purposes. Identify manufacturing, service delivery, selling or administration first.",
            "Do not deduct depreciation twice if already included in another expense category."
          ],
          "questions": [
            {
              "id": "l6-operating-expenses-q1",
              "explanations": [
                "Repayment of principal is normally not an expense.",
                "COGS is normally reported separately as COSR.",
                "Correct: sales management compensation supports selling and administration.",
                "Accounts receivable is an asset."
              ],
              "hint": "Classify by purpose, not merely whether cash was paid."
            },
            {
              "id": "l6-operating-expenses-q2",
              "explanations": [
                "This is the stated expense amount.",
                "Revenue has not yet been reduced by costs or expenses.",
                "This is gross profit before other operating expenses.",
                "Correct: 900 − 400 − 300 = 200."
              ],
              "hint": "Calculate gross profit, then deduct operating expenses not already included in COSR."
            }
          ]
        }
      },
      {
        "id": "l6-prepaid",
        "title": "预付费用为什么是资产",
        "en": "Prepaid Expenses",
        "pages": [
          10,
          11,
          12,
          13,
          14
        ],
        "prerequisites": [
          "l6-operating-expenses"
        ],
        "summary": "预付费用代表已经付款但尚未消耗的服务权利，使用后才转成费用。",
        "explanation": [
          "提前交租金或保险费，现金虽然已经减少，但企业换到了未来使用房屋或获得保障的权利。只要这部分服务尚未消耗且符合资产条件，它是预付资产（Prepaid Expense），不是因为英文含expense就立刻全部计入利润表。",
          "服务逐渐被使用时，未来权利减少，同时形成当期费用。确认费用的依据是本期获得或消耗了多少服务，不是收据日期或付款日期。本课均匀受益的例子可按月平均分摊，实际合同未必都适合平均处理。",
          "在期末，预付余额回答“还有多少服务留给以后”，费用回答“本期用了多少”。资产负债表与利润表因此通过同一笔预付款联系起来。预付不一定一直留到年底，使用完毕也可以在年内归零。"
        ],
        "rules": [
          "预付款：Dr Prepaid expense / Cr Cash。",
          "消耗服务：Dr Relevant expense / Cr Prepaid expense。",
          "无其他变动时：期末预付 = 期初预付 + 新预付 − 本期转入费用。"
        ],
        "example": {
          "scenario": "1月1日付¥6,000购买从当天开始的6个月服务，各月均匀受益。",
          "steps": [
            "付款时确认预付资产6,000，同时减少现金6,000。",
            "每月费用6,000 ÷ 6 = ¥1,000。",
            "到2月底已使用两个月：累计费用2,000，剩余预付4,000。"
          ],
          "conclusion": "2月底预付资产¥4,000，不是因为尚未付款，而是服务尚未使用。"
        },
        "pitfalls": [
          "Prepaid expense是资产科目名称，不表示全部当期费用。",
          "付款先后顺序不改变费用应归属的受益期间。"
        ],
        "related": [
          "l6-insurance-timeline",
          "l6-capitalization"
        ],
        "lab": "prepaid",
        "questions": [
          {
            "id": "l6-prepaid-q1",
            "prompt": "A payment for next year’s insurance is initially recorded as:",
            "zh": "为明年保险支付款项，初始记录为何？",
            "options": [
              "Current insurance expense in full",
              "Revenue",
              "A prepaid asset",
              "An account receivable from customers"
            ],
            "answer": 2,
            "explanations": [
              "付款时尚未受益，不应全额计入当前费用。",
              "购买保障不会产生销售收入。",
              "正确：尚未使用的保障权利先作为预付资产。",
              "不是客户欠企业的钱。"
            ],
            "hint": "现金换来了什么尚未消耗的权利？",
            "errorType": "概念混淆"
          },
          {
            "id": "l6-prepaid-q2",
            "prompt": "As prepaid rent is used, which entry is appropriate?",
            "zh": "预付租金被使用时，应如何记录？",
            "options": [
              "Dr Prepaid rent; Cr Revenue",
              "Dr Cash; Cr Rent expense",
              "Dr Accounts payable; Cr Prepaid rent",
              "Dr Rent expense; Cr Prepaid rent"
            ],
            "answer": 3,
            "explanations": [
              "这会凭空增加资产和收入。",
              "使用预付服务不需要再收到现金。",
              "没有题目信息表明是在结清已有应付款。",
              "正确：费用增加，未使用的租赁权利减少。"
            ],
            "hint": "从未来服务权利转为当期消耗。",
            "errorType": "账户与借贷"
          }
        ],
        "english": {
          "summary": "A prepayment is a right to services already paid for but not yet consumed; it becomes expense as the services are used.",
          "explanation": [
            "Paying rent or insurance in advance reduces cash, but obtains a right to use premises or receive protection in the future. While that service remains unused and asset recognition conditions are met, it is a prepaid asset. The word expense in prepaid expense does not mean the entire amount immediately belongs in profit or loss.",
            "As services are used, the remaining future right declines and current expense arises. Expense recognition depends on how much service is received or consumed in the period, not on the receipt date or payment date. The evenly provided benefits in this course can be spread equally by month; actual contracts do not always justify equal allocation.",
            "At period-end, the prepaid balance answers how much service remains for the future, while expense answers how much was used this period. The same payment thus links the balance sheet and income statement. A prepayment need not remain until year-end; it may be fully used during the year."
          ],
          "rules": [
            "Initial payment: Dr Prepaid expense / Cr Cash.",
            "Service consumption: Dr Relevant expense / Cr Prepaid expense.",
            "With no other changes: Ending prepaid = Beginning prepaid + New prepayments − Amount expensed this period."
          ],
          "example": {
            "scenario": "On January 1, pay ¥6,000 for six months of service starting that day. Benefits are received evenly each month.",
            "steps": [
              "On payment, recognise a prepaid asset of 6,000 and reduce cash by 6,000.",
              "Monthly expense is 6,000 ÷ 6 = ¥1,000.",
              "By the end of February, two months have been used: accumulated expense is 2,000 and remaining prepaid is 4,000."
            ],
            "conclusion": "The ¥4,000 asset at February-end exists because services are unused, not because payment remains outstanding."
          },
          "pitfalls": [
            "Prepaid expense names an asset account; it does not mean the entire amount is a current expense.",
            "Payment sequence does not change the period to which the consumed benefit belongs."
          ],
          "questions": [
            {
              "id": "l6-prepaid-q1",
              "explanations": [
                "The benefit has not yet been received, so it should not be fully expensed now.",
                "Purchasing protection creates no sales revenue.",
                "Correct: unused insurance rights are initially a prepaid asset.",
                "It is not an amount owed by customers."
              ],
              "hint": "What unused right has the cash purchased?"
            },
            {
              "id": "l6-prepaid-q2",
              "explanations": [
                "This creates an asset and revenue without basis.",
                "Using prepaid services does not require receiving cash again.",
                "Nothing indicates the settlement of an existing payable.",
                "Correct: expense increases as the unused rental right decreases."
              ],
              "hint": "Move from a future service right to current consumption."
            }
          ]
        }
      },
      {
        "id": "l6-insurance-timeline",
        "title": "保险时间轴：付款日不等于生效日",
        "en": "Insurance Timing and Adjusting Entries",
        "pages": [
          12,
          13,
          14
        ],
        "prerequisites": [
          "l6-prepaid"
        ],
        "summary": "先确定保障开始和结束时间，再把每个期间已经使用的部分确认为费用。",
        "explanation": [
          "课件特意把9月15日付款与10月1日生效分开：这两周现金已经付出，但保障期尚未开始。因此不能从付款当月就机械扣一整月保险费用。",
          "一年保费¥1,200，在均匀提供保障、按整月分摊的简化条件下，每个月费用¥100。10月底、11月底、12月底分别减少预付100并增加保险费100，期间不需要再付款。",
          "12月31日应累计确认三个月费用¥300，预付余额¥900。下一年还剩九个月保障。资产转费用并不要求原付款和本期费用同时出现，调整分录正是把这类时间差放到正确期间。"
        ],
        "rules": [
          "本例每月保险费 = 1,200 ÷ 12 = 100。",
          "9月15日付款；10月1日起受益；12月31日已受益3个月。",
          "忽略税费、保单变更和日数差异，按整月均匀确认。"
        ],
        "example": {
          "scenario": "9月15日预付一年保险¥1,200，保障从10月1日开始，企业12月31日结账。",
          "steps": [
            "9月15日：Dr Prepaid insurance 1,200 / Cr Cash 1,200。",
            "10—12月：每月Dr Insurance expense 100 / Cr Prepaid insurance 100。",
            "期末预付1,200 − 300 = ¥900，本年费用¥300。"
          ],
          "conclusion": "本年现金支付¥1,200，本年保险费用仅¥300，两者都正确但回答不同问题。"
        },
        "pitfalls": [
          "不能把9月付款当成9月已经开始获得保险保障。",
          "期末剩余900是资产，不是需要再补交900的负债。"
        ],
        "related": [
          "l6-expense-payable",
          "l6-accruals"
        ],
        "lab": "prepaid",
        "questions": [
          {
            "id": "l6-insurance-timeline-q1",
            "prompt": "A $1,200 annual policy is paid on September 15 and starts October 1. Insurance expense by December 31 is:",
            "zh": "9月15日付1200，一年保险10月1日生效，到12月31日费用多少？",
            "options": [
              "$400",
              "$1,200",
              "$100",
              "$300"
            ],
            "answer": 3,
            "explanations": [
              "误从9月开始计入四个月。",
              "这是现金付款额，不是当年受益额。",
              "只算了一个月，漏了另外两个月。",
              "正确：10、11、12月共3 × 100 = 300。"
            ],
            "hint": "从生效日开始数已使用月份。",
            "errorType": "确认时点"
          },
          {
            "id": "l6-insurance-timeline-q2",
            "prompt": "For the same policy, prepaid insurance at December 31 is:",
            "zh": "同一保单12月31日预付余额多少？",
            "options": [
              "$0",
              "$300",
              "$900",
              "$1,200"
            ],
            "answer": 2,
            "explanations": [
              "保障尚有九个月，不能全部费用化。",
              "这是已使用部分的费用。",
              "正确：1,200 − 300 = 900。",
              "忽略了已经消耗的三个月。"
            ],
            "hint": "原预付款减去已经使用的服务。",
            "errorType": "计算"
          }
        ],
        "english": {
          "summary": "Identify when insurance protection starts and ends, then expense the part used in each period.",
          "explanation": [
            "The slides deliberately distinguish payment on September 15 from coverage starting October 1. Cash is paid during those two weeks, but coverage has not begun. Therefore one full month of insurance expense should not automatically start in the payment month.",
            "Annual premium of ¥1,200 gives monthly expense of ¥100 under the simplified assumptions of uniform protection and whole-month allocation. At the end of October, November and December, reduce prepaid insurance by 100 and increase insurance expense by 100; no further payment is needed.",
            "By December 31, three months’ expense of ¥300 should be recognised and ¥900 remains prepaid. Nine months of protection remain in the following year. The original payment and current expense need not occur together; adjusting entries allocate this timing difference to the correct periods."
          ],
          "rules": [
            "Monthly insurance expense in this example = 1,200 ÷ 12 = 100.",
            "Pay September 15; benefit starts October 1; three months have been used by December 31.",
            "Ignore tax, policy changes and day-count differences, and allocate evenly by full month."
          ],
          "example": {
            "scenario": "Pay ¥1,200 for one year of insurance on September 15. Coverage begins October 1 and the business closes its books on December 31.",
            "steps": [
              "September 15: Dr Prepaid insurance 1,200 / Cr Cash 1,200.",
              "October–December: each month Dr Insurance expense 100 / Cr Prepaid insurance 100.",
              "Ending prepaid is 1,200 − 300 = ¥900; current-year expense is ¥300."
            ],
            "conclusion": "Current-year cash payment is ¥1,200 but insurance expense is only ¥300. Both are correct because they answer different questions."
          },
          "pitfalls": [
            "September payment does not mean insurance protection started in September.",
            "The remaining 900 is an asset, not a liability requiring another payment of 900."
          ],
          "questions": [
            {
              "id": "l6-insurance-timeline-q1",
              "explanations": [
                "This incorrectly starts expense in September and counts four months.",
                "This is cash paid, not the current-year benefit consumed.",
                "This counts only one month, omitting two others.",
                "Correct: October, November and December give 3 × 100 = 300."
              ],
              "hint": "Count months used starting from the coverage start date."
            },
            {
              "id": "l6-insurance-timeline-q2",
              "explanations": [
                "Nine months of coverage remain, so not everything can be expensed.",
                "This is the expense for the portion already used.",
                "Correct: 1,200 − 300 = 900.",
                "This ignores three months of consumed coverage."
              ],
              "hint": "Subtract services already consumed from the original prepayment."
            }
          ]
        }
      },
      {
        "id": "l6-capitalization",
        "title": "费用化与资本化：利润如何被提前",
        "en": "Expensing, Capitalisation and Earnings Manipulation",
        "pages": [
          15,
          16,
          17,
          18,
          19,
          20,
          21
        ],
        "prerequisites": [
          "l6-prepaid"
        ],
        "summary": "资本化要有真实且符合条件的未来资源，不能为抬高利润把已消耗费用藏进资产。",
        "explanation": [
          "费用化（Expensing）把符合条件的支出计入当期费用；资本化（Capitalisation）先把符合资产条件的成本记录为资产，再在以后使用或减值时进入费用。判断不是“哪种让利润好看”，而是报告日还有没有符合确认条件的未来资源。",
          "如果广告服务已经完成，却仍把成本挂在预付资产中，就少记了本期费用，同时多记了资产和利润。本讲用Zale与沈阳化工相关案例提醒这种双重影响。这里学习的是课件案例的机制，不据此推断其他企业的所有预付款都有问题。",
          "正常预付租金、保险等本来就应该先确认为资产。会计估计与判断也不自动等于舞弊；是否不当要结合合同、服务履行证据、适用准则和披露。研发等项目的具体资本化条件还依准则而异，不能泛化成“所有研发都费用化”或“所有未来受益都可资本化”。"
        ],
        "rules": [
          "把已消耗的100错误留作资产：忽略税时，资产高估100、费用低估100、利润高估100。",
          "同一笔现金支出不会因改用资产科目就消失。",
          "判断依据：未来资源是否存在、是否符合确认条件、服务是否已经使用。"
        ],
        "example": {
          "scenario": "企业已经收到并使用¥500广告服务，却把全部金额列为预付广告，其他记录正确且忽略税。",
          "steps": [
            "真实情况：应确认广告费用500，相关服务已无剩余权利。",
            "错误处理把费用减少500、预付资产增加500。",
            "纠正时Dr Advertising expense 500 / Cr Prepaid advertising 500。"
          ],
          "conclusion": "纠正会使资产和利润均下降¥500，现金不因纠正分录再次变化。"
        },
        "pitfalls": [
          "有预付款不是舞弊证据，关键是剩余权利真实存在且处理合规。",
          "资本化不创造现金，也不是无需以后确认费用。"
        ],
        "related": [
          "l5-write-down",
          "l6-insurance-timeline"
        ],
        "lab": null,
        "questions": [
          {
            "id": "l6-capitalization-q1",
            "prompt": "An already consumed $200 service is incorrectly kept as a prepaid asset. Ignoring tax, profit is:",
            "zh": "已经消耗的200服务错误留作预付资产，忽略税，利润怎样？",
            "options": [
              "Unchanged",
              "Lower by the cash payment only",
              "Understated by $200",
              "Overstated by $200"
            ],
            "answer": 3,
            "explanations": [
              "资产与费用错分会影响利润。",
              "现金付款与利润确认不能直接等同。",
              "少记费用会多记利润，方向相反。",
              "正确：费用少200，所以利润高200。"
            ],
            "hint": "想一想本应进入费用的金额有没有进入。",
            "errorType": "概念混淆"
          },
          {
            "id": "l6-capitalization-q2",
            "prompt": "Which statement about capitalisation is most appropriate?",
            "zh": "关于资本化，哪句话最合适？",
            "options": [
              "Every cost with a hoped-for benefit is an asset",
              "All prepaid assets are fraud",
              "Recognition depends on genuine rights and applicable criteria",
              "Capitalisation eliminates the cash payment"
            ],
            "answer": 2,
            "explanations": [
              "希望产生收益不等于符合资产确认。",
              "真实未来服务权利可构成正常预付资产。",
              "正确：需要资源和确认条件支持。",
              "科目分类不改变已支付的现金。"
            ],
            "hint": "先判断剩余权利和准则条件，再讨论利润影响。",
            "errorType": "概念混淆"
          }
        ],
        "english": {
          "summary": "Capitalisation requires a genuine qualifying future resource; consumed costs cannot be hidden in assets to inflate profit.",
          "explanation": [
            "Expensing records a qualifying cost as current expense; capitalisation initially records a cost meeting asset criteria as an asset, then expenses it through later use or impairment. The decision is not which treatment makes profit look better, but whether a qualifying future resource remains at the reporting date.",
            "If advertising services have already been delivered but their cost remains in prepaid assets, current expense is understated while assets and profit are overstated. This lecture uses cases involving Zale and Shenyang Chemical to illustrate the double effect. The lesson concerns the mechanism described in those course cases, not an inference that every other company’s prepayment is improper.",
            "Normal prepaid rent and insurance should initially be assets. Estimates and judgement are not automatically fraud either; the assessment requires contracts, evidence of service performance, applicable standards and disclosure. Specific capitalisation rules for development and other items also vary by framework. Neither all R&D must be expensed nor every future benefit can be capitalised is a universal rule."
          ],
          "rules": [
            "Incorrectly retaining a consumed cost of 100 as an asset, ignoring tax: assets overstated 100, expense understated 100 and profit overstated 100.",
            "A cash outflow does not disappear because an asset account is used.",
            "Check whether a future resource exists, whether recognition conditions are met and whether the service has already been consumed."
          ],
          "example": {
            "scenario": "A business has received and used ¥500 of advertising services but records the full amount as prepaid advertising. All other entries are correct; ignore tax.",
            "steps": [
              "Correct treatment: recognise advertising expense of 500 because no service right remains.",
              "The incorrect treatment reduces expense by 500 and increases prepaid assets by 500.",
              "Correct with Dr Advertising expense 500 / Cr Prepaid advertising 500."
            ],
            "conclusion": "The correction reduces both assets and profit by ¥500. Cash does not move again because of the correcting entry."
          },
          "pitfalls": [
            "A prepayment is not evidence of fraud by itself; the remaining right must genuinely exist and the treatment must comply with rules.",
            "Capitalisation creates no cash and does not mean the cost will never be expensed."
          ],
          "questions": [
            {
              "id": "l6-capitalization-q1",
              "explanations": [
                "Misclassifying asset and expense can affect profit.",
                "Cash payment cannot be directly equated with profit recognition.",
                "Omitting expense increases profit; the stated direction is reversed.",
                "Correct: expense is understated by 200, so profit is overstated by 200."
              ],
              "hint": "Check whether the amount that should have entered expense actually did."
            },
            {
              "id": "l6-capitalization-q2",
              "explanations": [
                "A hoped-for benefit does not establish asset recognition.",
                "Real future service rights can create valid prepaid assets.",
                "Correct: a genuine resource and recognition criteria must support capitalisation.",
                "Account classification does not change cash already paid."
              ],
              "hint": "Assess remaining rights and recognition criteria before considering profit effects."
            }
          ]
        }
      },
      {
        "id": "l6-expense-payable",
        "title": "服务已收到，账单未支付",
        "en": "Operating Expenses and Accounts Payable",
        "pages": [
          22,
          23,
          24,
          26,
          27,
          28
        ],
        "prerequisites": [
          "l6-operating-expenses"
        ],
        "summary": "已获得的服务应在所属期间确认费用，即使供应商账单要以后才支付。",
        "explanation": [
          "律师11月已经为企业提供服务，11月底开来账单，企业约定1月付款。服务已经使用，因此11月应确认法律费用；未付款意味着还欠供应商，并不意味着费用尚未发生。",
          "本讲把已开账单、尚未支付的供应商服务记录在Accounts Payable中：借记相关费用、贷记应付账款。与赊购存货相比，贷方负债相同，借方取决于得到的是尚未出售商品还是已经使用的服务。",
          "1月支付时，只减少应付账款和现金，不能再次确认同一笔法律费用。若12月底仍未付，资产负债表保留应付余额，利润表上的费用已在11月影响当期利润。"
        ],
        "rules": [
          "服务已用且账单未付：Dr Relevant expense / Cr Accounts Payable。",
          "支付旧账单：Dr Accounts Payable / Cr Cash。",
          "应付可对应资产采购，也可对应费用，取决于业务实质。"
        ],
        "example": {
          "scenario": "11月30日收到本月法律服务账单¥700，次年1月支付。",
          "steps": [
            "11月：Dr Legal expense 700 / Cr Accounts Payable 700。",
            "12月底未付，负债中仍有700，本年费用已包括700。",
            "1月付款：Dr Accounts Payable 700 / Cr Cash 700。"
          ],
          "conclusion": "费用归11月，现金支付归1月；付款时不重复扣减利润。"
        },
        "pitfalls": [
          "不是看到Cr Accounts Payable就一定借记Inventory。",
          "不能等付款才确认费用，也不能在付款时再确认一次。"
        ],
        "related": [
          "l6-accruals"
        ],
        "lab": null,
        "questions": [
          {
            "id": "l6-expense-payable-q1",
            "prompt": "Legal services are received and billed in November, paid in January. Expense is recognised in:",
            "zh": "11月收到并取得法律服务账单，1月付款，费用何时确认？",
            "options": [
              "The month chosen to maximise profit",
              "January only",
              "November",
              "December only"
            ],
            "answer": 2,
            "explanations": [
              "确认依据交易事实，不是目标利润。",
              "付款日不是服务消耗的归属期。",
              "正确：服务在11月提供并使用。",
              "结账日不是延后一个月确认的理由。"
            ],
            "hint": "先确定服务何时已提供。",
            "errorType": "确认时点"
          },
          {
            "id": "l6-expense-payable-q2",
            "prompt": "When the legal bill is paid in January, what happens?",
            "zh": "1月支付上述法律账单，发生什么？",
            "options": [
              "Higher A/P and higher cash",
              "Higher revenue and lower cash",
              "New expense and lower cash",
              "Lower A/P and lower cash"
            ],
            "answer": 3,
            "explanations": [
              "借贷方向相反。",
              "付款不产生收入。",
              "费用此前已确认，再记会重复。",
              "正确：支付清偿已有负债。"
            ],
            "hint": "找出付款前账上已经存在的负债。",
            "errorType": "账户与借贷"
          }
        ],
        "english": {
          "summary": "Recognise services already consumed in their proper period even if the supplier invoice is paid later.",
          "explanation": [
            "A lawyer provides services in November and sends an invoice at November-end, with payment agreed for January. The services have already been consumed, so legal expense belongs in November. Being unpaid means the supplier is still owed, not that the expense has not occurred.",
            "This lecture records invoiced but unpaid supplier services as accounts payable: debit the relevant expense and credit A/P. Compared with a credit inventory purchase, the credit liability is the same; the debit depends on whether the business received unsold goods or already-used services.",
            "Payment in January reduces only A/P and cash; the same legal expense must not be recognised a second time. If it remains unpaid at December-end, the balance sheet retains the payable while the expense has already affected profit for the period containing November."
          ],
          "rules": [
            "Services consumed and invoice unpaid: Dr Relevant expense / Cr Accounts Payable.",
            "Paying an existing invoice: Dr Accounts Payable / Cr Cash.",
            "Payables may correspond to an asset purchase or an expense, depending on the transaction."
          ],
          "example": {
            "scenario": "On November 30, receive a ¥700 invoice for legal services provided that month. Pay it in January of the following year.",
            "steps": [
              "November: Dr Legal expense 700 / Cr Accounts Payable 700.",
              "At December-end, 700 remains a liability and the current-year expenses already include 700.",
              "January payment: Dr Accounts Payable 700 / Cr Cash 700."
            ],
            "conclusion": "The expense belongs to November and cash payment to January. Payment does not reduce profit a second time."
          },
          "pitfalls": [
            "A credit to A/P does not always require a debit to Inventory.",
            "Do not wait for payment to recognise expense or recognise it again when paid."
          ],
          "questions": [
            {
              "id": "l6-expense-payable-q1",
              "explanations": [
                "Transaction facts, not target profit, determine recognition.",
                "Payment date is not the period when the service was consumed.",
                "Correct: the service was provided and used in November.",
                "Year-end is no reason to postpone recognition by one month."
              ],
              "hint": "Identify when the service was already provided."
            },
            {
              "id": "l6-expense-payable-q2",
              "explanations": [
                "The debit and credit directions are reversed.",
                "Payment does not create revenue.",
                "The expense was already recognised; this would duplicate it.",
                "Correct: payment settles an existing liability."
              ],
              "hint": "Find the liability already on the books before payment."
            }
          ]
        }
      },
      {
        "id": "l6-accruals",
        "title": "没有账单，也可能已经欠款",
        "en": "Accrued Expenses and Accrued Liabilities",
        "pages": [
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43
        ],
        "prerequisites": [
          "l6-operating-expenses",
          "l6-expense-payable"
        ],
        "summary": "期末检查已发生而未记录、未支付的费用，不能以尚未收到账单为由遗漏负债。",
        "explanation": [
          "员工已经完成12月工作，工资或佣金可能1月才支付；电已经用过，账单还没寄来。费用和支付义务会随服务提供而累积（Accrue），账单缺席不代表企业没有负债。",
          "期末需要识别这些未记录项目，借记费用、贷记应计负债或具体应付科目，如Salaries Payable。估计金额要基于已经发生的活动，而不是为以后尚未发生的任意计划提前提费用。",
          "课件用“已开账单的A/P”和“未开账单的Accrued Liabilities”帮助理解；这不是所有企业或准则统一适用的硬性命名规则。课件也指出实际报表常把两者合并列示。拿到题目时按其定义判断，但不要以为有合同就永远不能有应计负债。"
        ],
        "rules": [
          "期末应计：Dr Relevant expense / Cr Accrued liability（或具体Payable）。",
          "以后支付：Dr Liability / Cr Cash。",
          "忽略税时，遗漏应计费用会使负债低估、费用低估、利润高估。"
        ],
        "example": {
          "scenario": "12月员工销售佣金¥1,000已赚取，尚未记录也未支付，1月支付。",
          "steps": [
            "12月31日借记Sales commission expense 1,000，贷记Sales commission payable 1,000。",
            "本年利润因费用减少1,000，期末负债增加1,000，现金不变。",
            "1月支付时减少应付款和现金，不再重复确认佣金费用。"
          ],
          "conclusion": "无账单并不能推迟确认12月已经产生的义务。"
        },
        "pitfalls": [
          "应计不是现金准备金，也不要求先把现金转到另一个银行账户。",
          "Accrued liabilities与A/P可能合并列示，分类标签不能代替业务判断。"
        ],
        "related": [
          "l6-warranties",
          "l6-prepaid"
        ],
        "lab": null,
        "questions": [
          {
            "id": "l6-accruals-q1",
            "prompt": "December wages are unpaid and unrecorded at year-end. The adjusting entry is:",
            "zh": "12月工资期末尚未付也未入账，调整分录是什么？",
            "options": [
              "No entry until cash is paid",
              "Dr Wage expense; Cr Wages payable",
              "Dr Cash; Cr Wage revenue",
              "Dr Wages payable; Cr Wage expense"
            ],
            "answer": 1,
            "explanations": [
              "收付实现思路会漏记本期费用。",
              "正确：记录本期费用和已产生的支付义务。",
              "员工工作不让雇主获得工资收入。",
              "方向相反，会减少费用和负债。"
            ],
            "hint": "本月劳动已经消耗，付款只是以后结算。",
            "errorType": "账户与借贷"
          },
          {
            "id": "l6-accruals-q2",
            "prompt": "If an accrued expense is omitted, ignoring tax, which result follows?",
            "zh": "漏记应计费用，忽略税，结果如何？",
            "options": [
              "Liabilities understated and profit overstated",
              "Cash overstated by the same amount",
              "Revenue understated",
              "Liabilities overstated and profit understated"
            ],
            "answer": 0,
            "explanations": [
              "正确：少记费用抬高利润，并漏掉支付义务。",
              "应计调整通常不涉及现金，不能说现金也错同额。",
              "这通常不是漏记收入。",
              "真实方向是少记负债与费用。"
            ],
            "hint": "分开检查费用、负债和现金三个账户。",
            "errorType": "概念混淆"
          }
        ],
        "english": {
          "summary": "At period-end, identify expenses already incurred but unrecorded and unpaid; a missing invoice does not eliminate the liability.",
          "explanation": [
            "Employees may complete December work while wages or commissions are paid in January; electricity may be used before the invoice arrives. Expense and payment obligations can accrue as services are provided. The absence of an invoice does not mean the business has no liability.",
            "At period-end, identify these unrecorded items, debit expense and credit an accrued liability or a specific payable such as Salaries Payable. Estimated amounts must reflect activities already performed, rather than arbitrary provisions for future plans that have not yet occurred.",
            "The slides distinguish invoiced A/P from uninvoiced accrued liabilities as a teaching aid. This is not a universally binding naming rule for every business or framework. They also note that actual financial statements often combine the two. Follow the question’s definitions without assuming that the existence of a contract always rules out an accrued liability."
          ],
          "rules": [
            "Period-end accrual: Dr Relevant expense / Cr Accrued liability (or a specific payable).",
            "Later payment: Dr Liability / Cr Cash.",
            "Ignoring tax, omitting an accrued expense understates liabilities and expense and overstates profit."
          ],
          "example": {
            "scenario": "December sales commissions of ¥1,000 have been earned but remain unrecorded and unpaid. They will be paid in January.",
            "steps": [
              "December 31: debit Sales commission expense 1,000 and credit Sales commission payable 1,000.",
              "Current-year profit falls by 1,000 and the ending liability rises by 1,000; cash is unchanged.",
              "January payment reduces the payable and cash without recognising commission expense again."
            ],
            "conclusion": "No invoice is needed to establish that a December obligation already incurred must be recognised."
          },
          "pitfalls": [
            "An accrual is not a cash reserve and requires no initial cash transfer to another bank account.",
            "Accrued liabilities and A/P may be presented together; a label cannot replace analysis of the transaction."
          ],
          "questions": [
            {
              "id": "l6-accruals-q1",
              "explanations": [
                "Waiting for cash payment omits current-period expense.",
                "Correct: recognise current expense and the payment obligation already incurred.",
                "Employee work does not create wage revenue for the employer.",
                "This reverses the required direction by reducing expense and liability."
              ],
              "hint": "This month’s labour has been consumed; payment is later settlement."
            },
            {
              "id": "l6-accruals-q2",
              "explanations": [
                "Correct: omitted expense inflates profit and omits the payment obligation.",
                "Accrual adjustments normally do not affect cash, so cash is not necessarily wrong by the same amount.",
                "This is generally not an omission of revenue.",
                "The actual omission understates liabilities and expenses."
              ],
              "hint": "Check expense, liability and cash separately."
            }
          ]
        }
      },
      {
        "id": "l6-warranties",
        "title": "保修为什么在销售时估计",
        "en": "Warranty Expense and Estimated Obligations",
        "pages": [
          37,
          38
        ],
        "prerequisites": [
          "l6-accruals"
        ],
        "summary": "满足确认条件的保证型保修义务，需要随相关销售估计费用，而非等每次维修付款。",
        "explanation": [
          "销售商品并承诺基本质量保修，可能同时带来未来维修义务。客户虽然以后才来修，义务却可能由本期销售触发；因此不能只因为维修尚未付现就忽略。课件把保修列为应计费用的例子。",
          "本节作一个明确简化：普通保证型保修满足相关确认条件，企业能合理估计成本。按销售形成费用和预计负债；以后实际维修使用这项负债。估计会按新证据更新，不是一次计算永远不变。",
          "单独出售的延长保修服务可能涉及单独履约义务与递延收入，不能直接照搬同一分录。这里练习的是费用与已形成义务的联系，具体会计处理以合同性质及适用准则为准。"
        ],
        "rules": [
          "简化预计保修成本 = Relevant sales × Estimated warranty cost rate。",
          "确认时：Dr Warranty expense / Cr Warranty liability。",
          "履约维修时：Dr Warranty liability / Cr Cash、Inventory等（按实际资源）。"
        ],
        "example": {
          "scenario": "本期销售¥100,000，普通保证型保修预计成本为销售额的2%，满足确认条件；以后维修付现¥500。",
          "steps": [
            "销售对应预计保修费用100,000 × 2% = ¥2,000。",
            "确认Warranty expense与Warranty liability各2,000。",
            "付现维修500，负债减少500；无其他调整时剩余负债1,500。"
          ],
          "conclusion": "费用最初为¥2,000，不是只确认本次维修的¥500，也不再重复确认同一预计费用。"
        },
        "pitfalls": [
          "预计负债不是指每个客户一定提出索赔，而是按适用条件估计义务。",
          "单独出售的服务型保修不能与保证型保修混为一谈。"
        ],
        "related": [
          "l6-accruals"
        ],
        "lab": null,
        "questions": [
          {
            "id": "l6-warranties-q1",
            "prompt": "Assurance-type warranty cost is reliably estimated at 3% of $50,000 sales and recognition criteria are met. Expense is:",
            "zh": "满足确认条件的保证型保修，预计为销售50000的3%，费用多少？",
            "options": [
              "$50,000",
              "$0 until cash is paid",
              "$150",
              "$1,500"
            ],
            "answer": 3,
            "explanations": [
              "销售金额不是预计保修成本。",
              "满足条件时不能仅因未付现就不确认。",
              "百分比换算少了一位。",
              "正确：50,000 × 3% = 1,500。"
            ],
            "hint": "将预计成本率作用于相关销售基数。",
            "errorType": "计算"
          },
          {
            "id": "l6-warranties-q2",
            "prompt": "A later repair is charged against a previously recognised warranty liability. It normally:",
            "zh": "以后维修冲减已确认保修负债，通常会怎样？",
            "options": [
              "Increases prepaid insurance",
              "Recognises the same expense again",
              "Reduces the liability and resources used",
              "Creates sales revenue"
            ],
            "answer": 2,
            "explanations": [
              "与预付保险无关。",
              "同一预计义务的结算不应重复计费。",
              "正确：偿付义务使负债和现金或材料减少。",
              "履行既有保证不凭空产生销售收入。"
            ],
            "hint": "区分确认义务与以后结算义务。",
            "errorType": "账户与借贷"
          }
        ],
        "english": {
          "summary": "When recognition conditions are met, estimate assurance-type warranty expense with the related sale rather than waiting for repair payments.",
          "explanation": [
            "Selling goods with basic quality assurance may also create a future repair obligation. Although customers may request repairs later, the obligation may be triggered by this period’s sale, so a lack of cash payment does not justify ignoring it. The slides list warranties as an example of accrued expense.",
            "This section makes an explicit simplification: ordinary assurance-type warranties meet the relevant recognition criteria and costs can be reasonably estimated. Record expense and a liability in connection with the sale, then use the liability for later repairs. Estimates are updated with new evidence, not fixed forever after the first calculation.",
            "A separately sold extended warranty service may involve a separate performance obligation and deferred revenue, so the same entries cannot automatically be reused. The exercise links expense with an obligation already created; actual treatment depends on contract substance and applicable standards."
          ],
          "rules": [
            "Simplified estimated warranty cost = Relevant sales × Estimated warranty cost rate.",
            "Initial recognition: Dr Warranty expense / Cr Warranty liability.",
            "Repair fulfilment: Dr Warranty liability / Cr Cash, Inventory or other resources actually used."
          ],
          "example": {
            "scenario": "Current sales are ¥100,000. Ordinary assurance-type warranties are expected to cost 2% of sales and meet recognition criteria. A later repair costs ¥500 cash.",
            "steps": [
              "Estimated expense related to the sales is 100,000 × 2% = ¥2,000.",
              "Recognise Warranty expense and Warranty liability of 2,000 each.",
              "Cash repair of 500 reduces the liability by 500; with no other adjustments, 1,500 remains."
            ],
            "conclusion": "The initial expense is ¥2,000, not just the ¥500 repair payment. The same estimated expense is not recorded twice."
          },
          "pitfalls": [
            "A warranty liability does not mean every customer will claim; it estimates an obligation under applicable criteria.",
            "Separately sold service warranties must not be confused with assurance-type warranties."
          ],
          "questions": [
            {
              "id": "l6-warranties-q1",
              "explanations": [
                "Sales are not the estimated warranty cost.",
                "Once recognition conditions are met, lack of cash payment is not a reason to record nothing.",
                "The percentage conversion is off by one decimal place.",
                "Correct: 50,000 × 3% = 1,500."
              ],
              "hint": "Apply the estimated cost rate to the relevant sales base."
            },
            {
              "id": "l6-warranties-q2",
              "explanations": [
                "It is unrelated to prepaid insurance.",
                "Settlement of the same estimated obligation should not create duplicate expense.",
                "Correct: fulfilling the obligation reduces both the liability and cash or materials.",
                "Fulfilling an existing assurance does not create sales revenue without basis."
              ],
              "hint": "Distinguish recognition of the obligation from its later settlement."
            }
          ]
        }
      },
      {
        "id": "l6-disclosure",
        "title": "报表汇总与披露的取舍",
        "en": "Expense Disclosure and Proprietary Costs",
        "pages": [
          8,
          9,
          29,
          30,
          31,
          32,
          33
        ],
        "prerequisites": [
          "l6-operating-expenses"
        ],
        "summary": "对外报表会汇总费用，附注帮助理解，但披露深度同时涉及合规和商业敏感性。",
        "explanation": [
          "企业内部可能设有大量费用明细账户，但对外利润表往往只展示少数大类。报表上的SG&A是汇总结果，不代表企业内部只有这一个费用科目，也不代表可以从这一行直接知道每个部门花了多少钱。",
          "投资者希望了解费用结构、变化原因和重要项目；竞争对手也可能利用过细的信息判断企业的营销、研发或成本策略。专有成本（Proprietary Cost）在这里指披露使企业遭受竞争劣势的代价，不是购入某个专利的账面成本。",
          "披露并非企业想给多少就给多少，适用规则会规定必须公开的项目与附注。学习年报时应同时阅读主表与附注，区分没有单独列示和没有发生。课件的法规例子用于理解要求存在，具体当前要求需按企业适用制度另行核对。"
        ],
        "rules": [
          "主表汇总项目不等于全部内部明细。",
          "Proprietary cost = 商业信息公开可能带来的竞争损失。",
          "合法商业敏感性不能用来自动免除强制披露义务。"
        ],
        "example": {
          "scenario": "某企业SG&A从¥200增加到¥260，附注说明新增市场推广¥40、其余净增加¥20。",
          "steps": [
            "先识别总变化260 − 200 = ¥60。",
            "结合附注，把变化分为推广40与其他净额20。",
            "不要从总额推断所有60都来自广告，也不要求企业公开所有客户合同细节。"
          ],
          "conclusion": "主表提供整体，附注补充解释；信息需求与竞争代价需在规则内平衡。"
        },
        "pitfalls": [
          "Proprietary cost不等于Property cost或专利购买成本。",
          "费用未单列不表示为零，也不能擅自推断确切明细。"
        ],
        "related": [
          "l6-capitalization"
        ],
        "lab": null,
        "questions": [
          {
            "id": "l6-disclosure-q1",
            "prompt": "In disclosure analysis, proprietary cost refers to:",
            "zh": "披露分析中的proprietary cost指什么？",
            "options": [
              "Competitive disadvantage from revealing business information",
              "All SG&A expenses",
              "Only the cost of printing reports",
              "The purchase price of a patent"
            ],
            "answer": 0,
            "explanations": [
              "正确：披露内部信息可能使竞争者受益。",
              "SG&A是费用类别，不是这个概念的定义。",
              "印刷成本不是本节讨论的竞争信息代价。",
              "术语虽然与专有相关，但此处不是专利取得价。"
            ],
            "hint": "结合披露与竞争对手两个关键词理解。",
            "errorType": "英文理解"
          },
          {
            "id": "l6-disclosure-q2",
            "prompt": "A single SG&A line in an income statement means:",
            "zh": "利润表只列一行SG&A意味着什么？",
            "options": [
              "Every expense detail is zero",
              "Many internal accounts may be aggregated",
              "Notes are irrelevant",
              "The firm maintains only one internal expense account"
            ],
            "answer": 1,
            "explanations": [
              "汇总不代表其他费用为零。",
              "正确：主表可以把多个明细项目归类呈现。",
              "附注恰是理解汇总项目的重要补充。",
              "内部明细通常远比主表丰富。"
            ],
            "hint": "区分内部记账颗粒度与对外报告颗粒度。",
            "errorType": "概念混淆"
          }
        ],
        "english": {
          "summary": "External statements aggregate expenses and notes explain them, while disclosure depth involves both compliance and commercial sensitivity.",
          "explanation": [
            "A business may maintain many detailed internal expense accounts, yet show only a few broad categories in its external income statement. SG&A is an aggregated result. It does not mean the business has just one internal expense account or reveal exactly how much each department spends.",
            "Investors want to understand expense composition, changes and significant items. Competitors may also use highly detailed disclosures to infer marketing, R&D or cost strategies. Proprietary cost here means the competitive disadvantage caused by revealing business information, not the carrying cost of purchasing a patent.",
            "Disclosure is not entirely at management’s discretion: applicable rules prescribe information and notes that must be published. Read statements together with notes, and distinguish not separately presented from not incurred. The lecture’s regulatory example shows that requirements exist; precise current requirements need checking for the company’s applicable regime."
          ],
          "rules": [
            "Aggregated financial statement categories are not the full set of internal accounts.",
            "Proprietary cost = Potential competitive loss from disclosure of business information.",
            "Commercial sensitivity does not automatically exempt a business from mandatory disclosure."
          ],
          "example": {
            "scenario": "A company’s SG&A rises from ¥200 to ¥260. Notes explain ¥40 of new marketing spending and a net ¥20 increase in other items.",
            "steps": [
              "The total change is 260 − 200 = ¥60.",
              "Use the notes to separate marketing of 40 from other net changes of 20.",
              "Do not infer that all 60 is advertising or require publication of every customer contract detail."
            ],
            "conclusion": "The main statement provides the aggregate and notes add explanation; information needs and competitive costs must be balanced within the rules."
          },
          "pitfalls": [
            "Proprietary cost does not mean property cost or the purchase price of a patent.",
            "An expense not shown separately is not necessarily zero, and its exact breakdown cannot be invented."
          ],
          "questions": [
            {
              "id": "l6-disclosure-q1",
              "explanations": [
                "Correct: revealing internal information can benefit competitors.",
                "SG&A is an expense category, not the definition of this concept.",
                "Printing cost is not the competitive information cost discussed here.",
                "Although the word suggests ownership, here it does not mean a patent’s acquisition price."
              ],
              "hint": "Interpret the term using disclosure and competitors as the key context."
            },
            {
              "id": "l6-disclosure-q2",
              "explanations": [
                "Aggregation does not mean other expenses are zero.",
                "Correct: a main statement category can combine many detailed accounts.",
                "Notes are an important source for understanding aggregates.",
                "Internal detail is usually much richer than the main statement."
              ],
              "hint": "Distinguish the detail of internal bookkeeping from external reporting."
            }
          ]
        }
      }
    ],
    "descriptionEn": "Separate the timing of payment, service consumption and expense recognition, and understand estimates, capitalisation and disclosure."
  }
];
