let data = [
  { "confirmed": 555, "deaths": 17, "date": "2020-01-22" },
  { "confirmed": 654, "deaths": 18, "date": "2020-01-23" },
  { "confirmed": 941, "deaths": 26, "date": "2020-01-24" },
  { "confirmed": 1434, "deaths": 42, "date": "2020-01-25" },
  { "confirmed": 2118, "deaths": 56, "date": "2020-01-26" },
  { "confirmed": 2927, "deaths": 82, "date": "2020-01-27" },
  { "confirmed": 5578, "deaths": 131, "date": "2020-01-28" },
  { "confirmed": 6166, "deaths": 133, "date": "2020-01-29" },
  { "confirmed": 8234, "deaths": 171, "date": "2020-01-30" },
  { "confirmed": 9927, "deaths": 213, "date": "2020-01-31" },
  { "confirmed": 12038, "deaths": 259, "date": "2020-02-01" },
  { "confirmed": 16787, "deaths": 362, "date": "2020-02-02" },
  { "confirmed": 19887, "deaths": 426, "date": "2020-02-03" },
  { "confirmed": 23898, "deaths": 492, "date": "2020-02-04" },
  { "confirmed": 27643, "deaths": 564, "date": "2020-02-05" },
  { "confirmed": 30802, "deaths": 634, "date": "2020-02-06" },
  { "confirmed": 34395, "deaths": 719, "date": "2020-02-07" },
  { "confirmed": 37129, "deaths": 806, "date": "2020-02-08" },
  { "confirmed": 40159, "deaths": 906, "date": "2020-02-09" },
  { "confirmed": 42768, "deaths": 1013, "date": "2020-02-10" },
  { "confirmed": 44810, "deaths": 1113, "date": "2020-02-11" },
  { "confirmed": 45228, "deaths": 1118, "date": "2020-02-12" },
  { "confirmed": 60381, "deaths": 1371, "date": "2020-02-13" },
  { "confirmed": 66908, "deaths": 1523, "date": "2020-02-14" },
  { "confirmed": 69050, "deaths": 1666, "date": "2020-02-15" },
  { "confirmed": 71234, "deaths": 1770, "date": "2020-02-16" },
  { "confirmed": 73269, "deaths": 1868, "date": "2020-02-17" },
  { "confirmed": 75151, "deaths": 2008, "date": "2020-02-18" },
  { "confirmed": 75651, "deaths": 2123, "date": "2020-02-19" },
  { "confirmed": 76211, "deaths": 2248, "date": "2020-02-20" },
  { "confirmed": 76840, "deaths": 2252, "date": "2020-02-21" },
  { "confirmed": 78601, "deaths": 2459, "date": "2020-02-22" },
  { "confirmed": 78981, "deaths": 2470, "date": "2020-02-23" },
  { "confirmed": 79545, "deaths": 2630, "date": "2020-02-24" },
  { "confirmed": 80398, "deaths": 2710, "date": "2020-02-25" },
  { "confirmed": 81375, "deaths": 2771, "date": "2020-02-26" },
  { "confirmed": 82739, "deaths": 2814, "date": "2020-02-27" },
  { "confirmed": 84116, "deaths": 2873, "date": "2020-02-28" },
  { "confirmed": 86011, "deaths": 2942, "date": "2020-02-29" },
  { "confirmed": 88395, "deaths": 2996, "date": "2020-03-01" },
  { "confirmed": 90369, "deaths": 3085, "date": "2020-03-02" },
  { "confirmed": 92947, "deaths": 3160, "date": "2020-03-03" },
  { "confirmed": 95246, "deaths": 3255, "date": "2020-03-04" },
  { "confirmed": 98037, "deaths": 3348, "date": "2020-03-05" },
  { "confirmed": 101980, "deaths": 3460, "date": "2020-03-06" },
  { "confirmed": 106018, "deaths": 3559, "date": "2020-03-07" },
  { "confirmed": 109972, "deaths": 3803, "date": "2020-03-08" },
  { "confirmed": 113872, "deaths": 3987, "date": "2020-03-09" },
  { "confirmed": 118896, "deaths": 4266, "date": "2020-03-10" },
  { "confirmed": 126559, "deaths": 4611, "date": "2020-03-11" },
  { "confirmed": 132309, "deaths": 4916, "date": "2020-03-12" },
  { "confirmed": 146716, "deaths": 5413, "date": "2020-03-13" },
  { "confirmed": 157824, "deaths": 5830, "date": "2020-03-14" },
  { "confirmed": 168973, "deaths": 6471, "date": "2020-03-15" },
  { "confirmed": 183640, "deaths": 7151, "date": "2020-03-16" },
  { "confirmed": 199487, "deaths": 7956, "date": "2020-03-17" },
  { "confirmed": 219083, "deaths": 8855, "date": "2020-03-18" },
  { "confirmed": 247002, "deaths": 9962, "date": "2020-03-19" },
  { "confirmed": 276612, "deaths": 11442, "date": "2020-03-20" },
  { "confirmed": 308921, "deaths": 13149, "date": "2020-03-21" },
  { "confirmed": 342341, "deaths": 14850, "date": "2020-03-22" },
  { "confirmed": 384508, "deaths": 16772, "date": "2020-03-23" },
  { "confirmed": 425675, "deaths": 19047, "date": "2020-03-24" },
  { "confirmed": 476494, "deaths": 21828, "date": "2020-03-25" },
  { "confirmed": 539391, "deaths": 24843, "date": "2020-03-26" },
  { "confirmed": 603791, "deaths": 28370, "date": "2020-03-27" },
  { "confirmed": 671447, "deaths": 32069, "date": "2020-03-28" },
  { "confirmed": 731024, "deaths": 35549, "date": "2020-03-29" },
  { "confirmed": 795666, "deaths": 39727, "date": "2020-03-30" },
  { "confirmed": 872076, "deaths": 44602, "date": "2020-03-31" },
  { "confirmed": 948290, "deaths": 50183, "date": "2020-04-01" },
  { "confirmed": 1029704, "deaths": 56515, "date": "2020-04-02" },
  { "confirmed": 1112859, "deaths": 62522, "date": "2020-04-03" },
  { "confirmed": 1193322, "deaths": 68406, "date": "2020-04-04" },
  { "confirmed": 1265035, "deaths": 73490, "date": "2020-04-05" },
  { "confirmed": 1337712, "deaths": 79393, "date": "2020-04-06" },
  { "confirmed": 1414580, "deaths": 87364, "date": "2020-04-07" },
  { "confirmed": 1498360, "deaths": 94166, "date": "2020-04-08" },
  { "confirmed": 1585025, "deaths": 101872, "date": "2020-04-09" },
  { "confirmed": 1672620, "deaths": 109196, "date": "2020-04-10" },
  { "confirmed": 1749575, "deaths": 115343, "date": "2020-04-11" },
  { "confirmed": 1846390, "deaths": 121153, "date": "2020-04-12" },
  { "confirmed": 1916063, "deaths": 126978, "date": "2020-04-13" },
  { "confirmed": 1985901, "deaths": 133930, "date": "2020-04-14" },
  { "confirmed": 2066740, "deaths": 142302, "date": "2020-04-15" },
  { "confirmed": 2163426, "deaths": 149645, "date": "2020-04-16" },
  { "confirmed": 2251145, "deaths": 158589, "date": "2020-04-17" },
  { "confirmed": 2325103, "deaths": 165120, "date": "2020-04-18" },
  { "confirmed": 2405607, "deaths": 169737, "date": "2020-04-19" },
  { "confirmed": 2478960, "deaths": 175216, "date": "2020-04-20" },
  { "confirmed": 2554241, "deaths": 182420, "date": "2020-04-21" },
  { "confirmed": 2631027, "deaths": 189220, "date": "2020-04-22" },
  { "confirmed": 2720027, "deaths": 196101, "date": "2020-04-23" },
  { "confirmed": 2806972, "deaths": 202812, "date": "2020-04-24" },
  { "confirmed": 2891910, "deaths": 208436, "date": "2020-04-25" },
  { "confirmed": 2964853, "deaths": 212356, "date": "2020-04-26" },
  { "confirmed": 3033572, "deaths": 217047, "date": "2020-04-27" },
  { "confirmed": 3108878, "deaths": 223533, "date": "2020-04-28" },
  { "confirmed": 3185925, "deaths": 230316, "date": "2020-04-29" },
  { "confirmed": 3269608, "deaths": 236306, "date": "2020-04-30" },
  { "confirmed": 3356663, "deaths": 241505, "date": "2020-05-01" },
  { "confirmed": 3438339, "deaths": 246966, "date": "2020-05-02" },
  { "confirmed": 3515957, "deaths": 250444, "date": "2020-05-03" },
  { "confirmed": 3592058, "deaths": 254592, "date": "2020-05-04" },
  { "confirmed": 3672050, "deaths": 260478, "date": "2020-05-05" },
  { "confirmed": 3762073, "deaths": 267052, "date": "2020-05-06" },
  { "confirmed": 3851158, "deaths": 272477, "date": "2020-05-07" },
  { "confirmed": 3942676, "deaths": 278066, "date": "2020-05-08" },
  { "confirmed": 4028522, "deaths": 282340, "date": "2020-05-09" },
  { "confirmed": 4104768, "deaths": 285921, "date": "2020-05-10" },
  { "confirmed": 4181009, "deaths": 289396, "date": "2020-05-11" },
  { "confirmed": 4264584, "deaths": 294953, "date": "2020-05-12" },
  { "confirmed": 4349360, "deaths": 300194, "date": "2020-05-13" },
  { "confirmed": 4446448, "deaths": 305471, "date": "2020-05-14" },
  { "confirmed": 4542815, "deaths": 310706, "date": "2020-05-15" },
  { "confirmed": 4638237, "deaths": 314870, "date": "2020-05-16" },
  { "confirmed": 4716758, "deaths": 318205, "date": "2020-05-17" },
  { "confirmed": 4805049, "deaths": 321502, "date": "2020-05-18" },
  { "confirmed": 4901442, "deaths": 326290, "date": "2020-05-19" },
  { "confirmed": 5004471, "deaths": 331186, "date": "2020-05-20" },
  { "confirmed": 5110805, "deaths": 335983, "date": "2020-05-21" },
  { "confirmed": 5217705, "deaths": 341271, "date": "2020-05-22" },
  { "confirmed": 5322994, "deaths": 345269, "date": "2020-05-23" },
  { "confirmed": 5418320, "deaths": 348415, "date": "2020-05-24" },
  { "confirmed": 5505283, "deaths": 349603, "date": "2020-05-25" },
  { "confirmed": 5597805, "deaths": 353816, "date": "2020-05-26" },
  { "confirmed": 5700405, "deaths": 359038, "date": "2020-05-27" },
  { "confirmed": 5819719, "deaths": 363749, "date": "2020-05-28" },
  { "confirmed": 5940890, "deaths": 368496, "date": "2020-05-29" },
  { "confirmed": 6078719, "deaths": 372662, "date": "2020-05-30" },
  { "confirmed": 6186277, "deaths": 375555, "date": "2020-05-31" },
  { "confirmed": 6281486, "deaths": 378628, "date": "2020-06-01" },
  { "confirmed": 6402323, "deaths": 383461, "date": "2020-06-02" },
  { "confirmed": 6521646, "deaths": 389054, "date": "2020-06-03" },
  { "confirmed": 6648602, "deaths": 394217, "date": "2020-06-04" },
  { "confirmed": 6779470, "deaths": 398972, "date": "2020-06-05" },
  { "confirmed": 6915423, "deaths": 402860, "date": "2020-06-06" },
  { "confirmed": 7027718, "deaths": 405598, "date": "2020-06-07" },
  { "confirmed": 7129862, "deaths": 409303, "date": "2020-06-08" },
  { "confirmed": 7254233, "deaths": 414230, "date": "2020-06-09" },
  { "confirmed": 7388229, "deaths": 419436, "date": "2020-06-10" },
  { "confirmed": 7526344, "deaths": 424217, "date": "2020-06-11" },
  { "confirmed": 7655466, "deaths": 428524, "date": "2020-06-12" },
  { "confirmed": 7791423, "deaths": 432774, "date": "2020-06-13" },
  { "confirmed": 7924897, "deaths": 436159, "date": "2020-06-14" },
  { "confirmed": 8044535, "deaths": 439584, "date": "2020-06-15" },
  { "confirmed": 8186067, "deaths": 446455, "date": "2020-06-16" },
  { "confirmed": 8328061, "deaths": 451712, "date": "2020-06-17" },
  { "confirmed": 8468066, "deaths": 456747, "date": "2020-06-18" },
  { "confirmed": 8648955, "deaths": 463020, "date": "2020-06-19" },
  { "confirmed": 8806589, "deaths": 467272, "date": "2020-06-20" },
  { "confirmed": 8935203, "deaths": 471265, "date": "2020-06-21" },
  { "confirmed": 9072474, "deaths": 474814, "date": "2020-06-22" },
  { "confirmed": 9237859, "deaths": 480136, "date": "2020-06-23" },
  { "confirmed": 9409094, "deaths": 485405, "date": "2020-06-24" },
  { "confirmed": 9587076, "deaths": 490171, "date": "2020-06-25" },
  { "confirmed": 9778491, "deaths": 495007, "date": "2020-06-26" },
  { "confirmed": 9956663, "deaths": 499506, "date": "2020-06-27" },
  { "confirmed": 10118389, "deaths": 502609, "date": "2020-06-28" },
  { "confirmed": 10276540, "deaths": 506333, "date": "2020-06-29" },
  { "confirmed": 10450359, "deaths": 511477, "date": "2020-06-30" },
  { "confirmed": 10668014, "deaths": 516501, "date": "2020-07-01" },
  { "confirmed": 10875759, "deaths": 521649, "date": "2020-07-02" },
  { "confirmed": 11079326, "deaths": 526659, "date": "2020-07-03" },
  { "confirmed": 11273007, "deaths": 531055, "date": "2020-07-04" },
  { "confirmed": 11455588, "deaths": 534525, "date": "2020-07-05" },
  { "confirmed": 11622931, "deaths": 538348, "date": "2020-07-06" },
  { "confirmed": 11833775, "deaths": 544484, "date": "2020-07-07" },
  { "confirmed": 12045577, "deaths": 549833, "date": "2020-07-08" },
  { "confirmed": 12273804, "deaths": 555313, "date": "2020-07-09" },
  { "confirmed": 12506381, "deaths": 560643, "date": "2020-07-10" },
  { "confirmed": 12722506, "deaths": 565551, "date": "2020-07-11" },
  { "confirmed": 12915161, "deaths": 569531, "date": "2020-07-12" },
  { "confirmed": 13107969, "deaths": 573369, "date": "2020-07-13" },
  { "confirmed": 13329608, "deaths": 579063, "date": "2020-07-14" },
  { "confirmed": 13560727, "deaths": 584575, "date": "2020-07-15" },
  { "confirmed": 13813400, "deaths": 590390, "date": "2020-07-16" },
  { "confirmed": 14055307, "deaths": 597139, "date": "2020-07-17" },
  { "confirmed": 14292942, "deaths": 602783, "date": "2020-07-18" },
  { "confirmed": 14507589, "deaths": 606842, "date": "2020-07-19" },
  { "confirmed": 14714367, "deaths": 611025, "date": "2020-07-20" },
  { "confirmed": 14947990, "deaths": 617281, "date": "2020-07-21" },
  { "confirmed": 15228469, "deaths": 624275, "date": "2020-07-22" },
  { "confirmed": 15511225, "deaths": 634248, "date": "2020-07-23" },
  { "confirmed": 15792390, "deaths": 640385, "date": "2020-07-24" },
  { "confirmed": 16047935, "deaths": 645977, "date": "2020-07-25" },
  { "confirmed": 16261215, "deaths": 649642, "date": "2020-07-26" },
  { "confirmed": 16487669, "deaths": 654825, "date": "2020-07-27" },
  { "confirmed": 16740006, "deaths": 661230, "date": "2020-07-28" },
  { "confirmed": 17029155, "deaths": 667884, "date": "2020-07-29" },
  { "confirmed": 17309805, "deaths": 673941, "date": "2020-07-30" },
  { "confirmed": 17599905, "deaths": 680234, "date": "2020-07-31" },
  { "confirmed": 17850617, "deaths": 685773, "date": "2020-08-01" },
  { "confirmed": 18079723, "deaths": 690065, "date": "2020-08-02" },
  { "confirmed": 18282208, "deaths": 694396, "date": "2020-08-03" },
  { "confirmed": 18540789, "deaths": 701347, "date": "2020-08-04" },
  { "confirmed": 18811953, "deaths": 708424, "date": "2020-08-05" },
  { "confirmed": 19097149, "deaths": 714940, "date": "2020-08-06" },
  { "confirmed": 19378036, "deaths": 721324, "date": "2020-08-07" },
  { "confirmed": 19637506, "deaths": 726781, "date": "2020-08-08" },
  { "confirmed": 19861683, "deaths": 731326, "date": "2020-08-09" },
  { "confirmed": 20089624, "deaths": 736191, "date": "2020-08-10" },
  { "confirmed": 20343040, "deaths": 742607, "date": "2020-08-11" }
]

const highestLessThan500ThousandDeaths = data.reduce((target,record) => (record.deaths < 500000 && record.deaths > target.deaths) ? record : target, {deaths:0});

console.log(highestLessThan500ThousandDeaths);