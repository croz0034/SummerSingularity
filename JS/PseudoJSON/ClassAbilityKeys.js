// key = ['ID', "number of uses", "/ref or life", "ex or magic (max for casters)", "cost"];


let ClassAbilities = [
    //Archer
    {
    LTP: [
    [37, 1, "arrow/unlimited", "(ex)", "Pick 1"],
    [104, 1, "arrow/unlimited", "(ex)", "Pick 1"],
    [107, 1, "arrow/unlimited", "(ex)", "Pick 1"],
    ],
    LV1: [
    [37, 1, "arrow/unlimited", "(ex)", "Pick 2"],
    [104, 1, "arrow/unlimited", "(ex)", "Pick 2"],
    [107, 1, "arrow/unlimited", "(ex)", "Pick 2"],
    [117, 1, "/refresh Charge X3", "(ex)", ""],
    [164, "", "", "(M)", ""]
    ],
    LV2: [
    [96, 1, "/life", "(ex)", ""]
    ],
    LV3: [
    [37, 1, "arrow/unlimited", "(ex)", "Pick 2"],
    [104, 1, "arrow/unlimited", "(ex)", "Pick 2"],
    [107, 1, "arrow/unlimited", "(ex)", "Pick 2"]
    ],
    LV4: [
    [147, 1, "arrow/unlimited", "(ex)", ""]],
    LV5: [
    [37, 1, "arrow/unlimited", "(ex)", "Pick 2"],
    [104, 1, "arrow/unlimited", "(ex)", "Pick 2"],
    [107, 1, "arrow/unlimited", "(ex)", "Pick 2"]
    ],
    LV6: [
    [101, 1, "arrow/unlimited", "(ex)", ""],
    [130, "", "", "", "optional"]]
}, 
    //Assassin
    {
    LTP: [
    [106, 1, "/life", "(ex)", "(self only)"]
    ],
    LV1: [
        [9, "", "unlimited", "(ex)(ambulant)", ""],
        [123, 2, "/life", "(ex)(ambulant)", ""]
    ],
    LV2: [
    [106, 1, "/life Charge X3", "(ex)", "(self only)"],
    [164, "", "", "(M)", ""]
    ],
    LV3: [
        [23, 2, "/life", "(ex)(ambulant)", ""]
    ],
    LV4:[ 
        [81, 1, "/life", "(m)", ""]
    ],
    LV5:[ 
        [150, 2, "/life", "(ex)(ambulant)", ""]
    ],
    LV6: [
        [34, 1, "/life", "(m)", ""]
    ]
}, 
    // Barbarian
    {
    LTP: [
        [24, 1, "/refresh", "(ex)", ""]
    ], 
    LV1: [
        [19, "", "", "(T)", ""],
        [166, "", "", "(T)", ""],
        [169, "", "", "(T)", ""],
    ],
    LV2: [
        [59, 1, "/refresh", "(ex)(ambulant)", ""]
    ],
    LV3: [
        [4, "", "unlimited", "(ex)", ""]
    ],
    LV4: [
        [59, 1, "/refresh", "(ex)(ambulant)", ""]
    ],
    LV5: [
        [26, 1, "/life", "(ex)(ambulant)", ""]
    ],
    LV6: [
        [24, 2, "/refresh", "(ex)", ""]
    ]}, 
    // Monk                  
    {
    LTP: [
        [78, 1, "/life", "(ex)(self-only)", ""]
    ],
    LV1:[
        [44, "",  "", "(T)", ""],
    
        [97, "", "", "(T)", ""]],
    LV2: [[146, "", "", "", ""]],
    LV3: [
    [164, "", "", "(M)", ""],
    [120, 1, "/life Charge X5", "(ex)", ""]],
    
    LV4: [
        [78, 1, "/life Charge X3", "(ex)(self-only)", ""]
    ],
    LV5:  [
        [119, 1, "/refresh Charge X10", "(m)", ""]
    ],
    LV6: [
        [94, "", "", "(T)", ""]]
}, 
// Scout                      
{
    LTP: [
        [78, 1, "/life", "(ex)", ""]
    ],
    LV1:[
    [164, "", "", "(M)", ""],
        [153, 2, "/life Charge X3", "(ex)(ambulant)", ""]],
    
    LV2: [
        [78, 1, "/life", "(ex)", ""],
        [116, 1, "/life Charge X3", "(ex)", ""]],
    
    LV3: [
    [40, 1, "/refresh", "(ex)", ""],
    [123, 1, "/life", "(ex)", ""]],
    
    LV4: [
        [55, "", "", "(T)", ""]
    ],
    LV5:  [
        [81, 1, "/life", "(m)", ""]
    ],
    LV6: [
        [2, 1, "/life", "(ex) (self-only)", ""]]
}, 
    // Warrior
    {
        LTP: [[88, 1, "/life", "(m)(ambulant)", ""]],
        LV1: [
    [121, "unlimited", "", "(ex)", ""]
    ],
        LV2: [
    [77, 1, "/life", "(ex)", ""]
    ],
        LV3: [
    [155, 2, "/refresh", "(ex)", ""]
    ],
        LV4: [
    [88, 1, "/life", "(m)(ambulant)", ""]
    ],
        LV5: [
    [124, 1, "/refresh Charge X3", "(ex)", ""],,
    [164, "", "", "(M)", ""]
    ],
        LV6: [
    [8, 3, "/refresh", "(ex)(swift)", ""]
    ]
        }, 
    //Bard
    {
    LTP: [[165, '', '', '', '']],
    LV1:[
        [28, "unlimited", "-", 1, 0],
        [164, "", "", "", 0],
        [52, 1, "equip", 2, 2],
        [56, 1, "-", 2, 2],
        [88, 1, "/life", "-", 1],
        [116, 1, "/life", "-", 1],
        [127, 1, "/life", "-", 1],
        [133, 1, "unlimited", 1, 1]
    ],
    LV2:[
        [43, 2, "/refresh", "-", 1],
        [46, 1, "equip", 1, 4],
        [74, 1, "/refresh", "-", 1],
        [87, 1, "/refresh", 4, 1],
        [96, 1, "/life", "-", 1],
        [131, 1, "unlimited", 1, 1],
        [138, 1, "unlimited", 1, 1]
    ],
    LV3:[
        [13, 1, "/life", "-", 1],
        [16, 1, "/refresh", 1, 1],
        [25, 1, "/refresh", "-", 1],
        [58, 1, "/life", 2, 1],
        [2, 1, "equip", 1, 2],
        [134, 1, "unlimited", 1, 1]
    ],
    LV4:[
        [6, 1, "/refresh", "-", 1],
        [51, 1, "equip", 1, 3],
        [118, 1, "/refresh", "-", 1],
        [129, 1, "/refresh", "-", 1],
        [132, 1, "unlimited", 1, 1],
        [136, 1, "unlimited", 1, 1],
        [149, 1, "/life", 2, 1],
        [151, 1, "/refresh", "-", 1]
        ],
    LV5:[
        [5, 1, "/refresh", "-", 1],
        [7, 1, "/life", 2, 1],
        [39, 1, "/refresh", 1, 1],
        [47, 1, "equip", 1, 3],
        [79, 1, "/refresh", "-", 1],
        [92, 1, "/life", "-", 1],
        [137, 1, "unlimited", 1, 1]
        ],
    LV6:[
        [30, "Archetype", "-", 1, 2],
        [35, "Archetype", "-", 1, 2],
        [90, "Archetype", "-", 1, 1],
        [46, 1, "equip", 1, 2],
        [128, 1, "/refresh", "-", 1],
        [135, 1, "/refresh  Charge X5", 1, 1],
        [143, 1, "/refresh", "-", 1]
        ] 
}, 
    // Druid
    {
    LTP: [[165, '', '', '', '']],
    LV1:[
        [28, "unlimited", "-", 1, 0],
        [164, "", "", "", 0],
        [52, 1, "equip", 2, 2],
        [56, 1, "-", 2, 2],
        
        [15, 1, "/refresh", 2, 1],
        [84, 1, "/refresh", "-", 1],
        [33, 1, "/refresh", 1, 1],
        [45, 2, "/ball /unlimited", 2, 1],
        [80, 1, "/life  Charge X3", "-", 1],
        [96, 1, "/life", "-", 1]
        ],
    LV2:[
        [87, 1, "/refresh", 4, 1],
        [48, 1, "equip", 1, 4],
        
        
        [106, 1, "/life", "-", 1],
        [66, 1, "/refresh", 2, 1],
        [78, 1, "/life", "-", 1],
        [82, 2, "/ball /unlimited", 2, 1],
        [116, 1, "/life", "-", 1],
        [141, 1, "/refresh Charge X3", "-", 1]
        ],
    LV3:[
        [58, 1, "/life", 2, 1],
        
        [11, 1, "/refresh", 2, 1],
        [18, 1, "/refresh", "-", 1],
        [40, 1, "/refresh", "-", 1],
        [67, 1, "/refresh", 2, 1],
        [73, 1, "/refresh", "-", 1],
        [83, 1, "/life", 2, 1],
        [115, 1, "/refresh", "-", 1],
        [142, 1, "/refresh", 2, 1]
        ],
    LV4:[
        [149, 1, "/life", 2, 1],
        
        [51, 1, "equip", 1, 4],
        [64, 2, "/ball /unlimited", 2, 1],
        [62, 1, "/refresh", 2, 2],
        [68, 1, "/refresh", 1, 2],
        [93, 1, "/refresh", 2, 2],
        [69, 1, "/refresh", "-", 1],
        [150, 1, "/life", 2, 1]
    ],
    LV5:[
        [7, 1, "/life", 2, 1],
        
        [49, 1, "equip", 1, 5],
        [53, 1, "/refresh", "-", 1],
        [65, 1, "/refresh", 2, 1],
        [79, 1, "/refresh", 2, 1],
        [89, 1, "/refresh", 2, 1],
        [108, 1, "/refresh", 2, 1],
        [154, 1, "/refresh", 2, 1]
        ],
    LV6:[
        [113, "Archetype", "-", 1, 2],
        [145, "Archetype", "-", 1, 2],
        [12, "Archetype", "-", 1, 1],
        
        [27, 1, "/refresh", "-", 1],
        [86, 1, "/refresh", "-", 1],
        [70, 1, "/refresh", 1, 1],
        [98, 1, "/refresh", 2, 1],
        [162, 1, "/refresh", "-", 1]
    ]
}, 
    //Healer
    {
    LTP: [[165, '', '', '', '']],
    LV1:[
        [28, "unlimited", "-", 1, 0],
        [164, "", "", "", 0],
        [52, 1, "equip", 2, 3],
        [56, 1, "-", 2, 2],
        [48, 1, "equip", 1, 2],
        
        [14, 1, "/life", "-", 1],
        [77, 1, "/refresh", "-", 1],
        [78, 1, "unlimited", "-", 1],
        [116, 2, "/life Charge X3", "-", 1],
        [22, 1, "/life", "-", 1],
        
        ],
    LV2:[
        [87, 1, "/life", 2, 2],
        [50, 1, "equip", 1, 3],
        
        [2, 1, "/life", 2, 1],
        [45, 2, "/ball /unlimited", 4, 1],
        [74, 1, "/refresh", "-", 1],
        [81, 1, "/life Charge X3", "-", 1],
        [122, 1, "/life Charge X3", "-", 1],
        [144, 1, "/life Charge X3", "-", 1],
        [127, 1, "/life", "-", 1],
        ],
    LV3:[
        [58, 1, "/life", 2, 1],
        [47, 1, "equip", 1, 2],
        
        [3, 1, "/refresh", "-", 1],
        [10, 1, "/life Charge X3", "-", 1],
        [71, 1, "/refresh", "-", 1],
        [82, 2, "/ball /unlimited", 2, 1],
        [96, 1, "/life", "-", 1],
        [119, 1, "/refresh Charge X3", "-", 1],
        [156, 1, "/refresh", "-", 1]
        ],
    LV4:[
        [149, 1, "/life", 2, 1],
        
        [21, 1, "/refresh", "-", 1],
        [29, 1, "/refresh Charge X10", 1, 1],
        [72, 1, "/life", "-", 1],
        [85, 1, "/refresh", "-", 1],
        [111, 1, "/refresh", "-", 1],
        [150, 1, "/life", 2, 1]
        
        
    ],
    LV5:[
        [7, 1, "/refresh", "-", 1],
        
        [1, 1, "/ball /unlimited", 2, 1],
        [20, 1, "/refresh", "-", 1],
        [40, 1, "/refresh", "-", 1],
        [44, 1, "/refresh", "-", 1],
        [75, 1, "/refresh", "-", 1],
        [76, 1, "/refresh", "-", 2],
        [140, 1, "/life", 2, 1],
        
        
        ],
    LV6:[
        [109, "Archetype", "-", 1, 1],
        [160, "Archetype", "-", 1, 2],
        [99, "Archetype", "-", 1, 1],
        
        [8, 1, "/refresh", "-", 2],
        [95, 1, "/refresh", 1, 1],
        [100, 1, "/life", "-", 1],
        [103, 1, "/refresh", "-", 1],
        [110, 1, "/refresh", "-", 1],
        [143, 1, "/refresh", "-", 1]
    ]
}, 
    // Wizard
    {
    LTP: [[165, '', '', '', '']],
    LV1:[
        [28, "unlimited", "-", 1, 0],
        [164, "", "", "", 0],
        [52, 1, "equip", 2, 2],
        [56, 1, "-", 2, 2],
        [14, 1, "/life", "-", 1],
        [63, 1, "/refresh", "-", 1],
        [64, 3, "/ball /unlimited", 4, 1],
        [80, 1, "/life", "-", 1],
        [96, 1, "/life", "-", 1],
        [127, 1, "/life Charge X3", "-", 1]
        
        ],
    LV2:[
        [87, 1, "/refresh", "-", 1],
        
        
        [10, 1, "/life", "-", 1],
        [25, 1, "/life", "-", 1],
        [105, 1, "/refresh", "-", 1],
        [116, 1, "/life", "-", 1],
        [45, 2, "/ball /unlimited", 3, 1],
        [148, 2, "/ball /unlimited", 3, 1],
        [150, 1, "/life", "-", 1]
        ],
    LV3:[
        [58, 1, "/life", 2, 1],
        
        [40, 1, "/refresh Charge X3", "-", 1],
        [41, 1, "/refresh", "-", 1],
        [73, 1, "/refresh", "-", 1],
        [126, 1, "/refresh", "-", 1],
        [152, 1, "/refresh", "-", 1],
        [114, 2, "/refresh", "-", 1],
        
        
        [81, 1, "/life", "-", 1],
        
        [82, 2, "/ball /unlimited", 3, 1],
        [91, 1, "/ball /unlimited", 4, 1]
        ],
    LV4:[
        [149, 1, "/life", 2, 1],
        
        [36, 1, "/refresh", 2, 1],
        [38, 1, "/refresh", "-", 1],
        [83, 1, "/refresh", "-", 1],
        [125, 1, "/refresh", "-", 1],
        [157, 1, "/refresh", "-", 1],
        [163, 1, "/refresh Charge X 3", "-", 1],
        
        [61, 1, "/ball /unlimited", 4, 1]
    ],
    LV5:[
        [7, 1, "/life", 2, 1],
        [52, 1, "equip", 1, 4],

        [32, 1, "/refresh", "-", 1],
        [112, 1, "/refresh", 2, 1],
        [158, 1, "/refresh", 2, 1],
        [159, 1, "/refresh", 2, 1],
        
        
        [32, 1, "/life", 2, 1],
        
        [102, 1, "/ball /unlimited", 4, 1]
        ],
    LV6:[
        [54, "Archetype", "-", 1, 2],
        [17, "Archetype", "-", 1, 2],
        [161, "Archetype", "-", 1, 2],
        
        [42, 1, "/refresh", 2, 1],
        [60, 1, "/refresh", "-", 1],
        [100, 1, "/refresh", "-", 2],
        [110, 1, "/refresh", "-", 1],
        [162, 1, "/refresh", "-", 1],
        
        [139, 1, "/ball /unlimited", 4, 1]
    ]
}, 
    //Anti-paladin
    {
    LTP: [
        [13, 1, "/life", "(m)", ""]
    ],
    LV1:[
        [166, "",  "", "(T)", ""],
        [167, "",  "", "(T)", ""]
        
    ],
    LV2:[
        
        [106, 1, "/refresh Charge x3", "(ex)", ""],
    [164, "", "", "(M)", ""]
        
    ],
    LV3:[
        
        [140, 1, "/life", "(m)", ""]
    ],
    LV4:[
        [26, 1, "/life", "(ex)(ambulant)", ""]
        
    ],
    LV5:[
        
        [13, 1, "/life", "(m)", ""]
    ],
    LV6:[
        
        [156, 2, "/refresh", "(m)", ""]
        
    ]
}, 
    //Paladin
    {
    LTP: [
        [13, 1, "/life", "(m)", ""]
    ],
    LV1:[
        [166, "",  "", "(T)", ""],
        [168, "",  "", "(T)", ""]
        
    ],
    LV2:[
        
        [164, "", "", "(M)", ""],
        [78, 1, "/life Charge X3", "(m)", ""]
        
    ],
    LV3:[
        [57, 1, "/refresh Charge X5", "(ex)", ""]
        
    ],
    LV4:[
        [119, 2, "/refresh", "(m)", ""]
        
    ],
    LV5:[
        [13, 1, "/life", "(m)", ""]
        
    ],
    LV6:[
        [110, 2, "/refresh", "(m)(self/touch)", ""]
        
    ]
}, 
]