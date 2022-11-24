// GENERATED JAVASCRIPT
// START JAVASCRIPT
;(function() {;
    var ρσ_modules = {};
    ρσ_modules.pythonize = {};
    ρσ_modules.random = {};
    
    (function(){
        function strings() {
            var string_funcs, exclude, name;
            string_funcs = set("capitalize strip lstrip rstrip islower isupper isspace lower upper swapcase center count endswith startswith find rfind index rindex format join ljust rjust partition rpartition replace split rsplit splitlines zfill".split(" "));
            if (!arguments.length) {
                exclude = (function(){
                    var s = ρσ_set();
                    s.jsset.add("split");
                    s.jsset.add("replace");
                    return s;
                })();
            } else if (arguments[0]) {
                exclude = Array.prototype.slice.call(arguments);
            } else {
                exclude = null;
            }
            if (exclude) {
                string_funcs = string_funcs.difference(set(exclude));
            }
            var ρσ_Iter0 = string_funcs;
            ρσ_Iter0 = ((typeof ρσ_Iter0[Symbol.iterator] === "function") ? (ρσ_Iter0 instanceof Map ? ρσ_Iter0.keys() : ρσ_Iter0) : Object.keys(ρσ_Iter0));
            for (var ρσ_Index0 of ρσ_Iter0) {
                name = ρσ_Index0;
                (ρσ_expr_temp = String.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name] = (ρσ_expr_temp = ρσ_str.prototype)[(typeof name === "number" && name < 0) ? ρσ_expr_temp.length + name : name];
            }
        };
        if (!strings.__module__) Object.defineProperties(strings, {
            __module__ : {value: "pythonize"}
        });
    
        ρσ_modules.pythonize.strings = strings;
    })();
    
    (function(){
        var ρσ_seed_state, ρσ_get_random_byte;
        ρσ_seed_state = (function(){
            var ρσ_d = {};
            ρσ_d["key"] = ρσ_list_decorate([]);
            ρσ_d["key_i"] = 0;
            ρσ_d["key_j"] = 0;
            return ρσ_d;
        }).call(this);
        ρσ_get_random_byte = (function() {
            var ρσ_anonfunc = function () {
                var ρσ_unpack;
                ρσ_seed_state.key_i = (ρσ_seed_state.key_i + 1) % 256;
                ρσ_seed_state.key_j = (ρσ_seed_state.key_j + (ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(ρσ_seed_state.key_i, ρσ_expr_temp)]) % 256;
                ρσ_unpack = [(ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(ρσ_seed_state.key_j, ρσ_expr_temp)], 
                (ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(ρσ_seed_state.key_i, ρσ_expr_temp)]];
                (ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(ρσ_seed_state.key_i, ρσ_expr_temp)] = ρσ_unpack[0];
                (ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(ρσ_seed_state.key_j, ρσ_expr_temp)] = ρσ_unpack[1];
                return (ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(((ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(ρσ_seed_state.key_i, ρσ_expr_temp)] + (ρσ_expr_temp = ρσ_seed_state.key)[ρσ_bound_index(ρσ_seed_state.key_j, ρσ_expr_temp)]) % 256, ρσ_expr_temp)];
            };
            if (!ρσ_anonfunc.__module__) Object.defineProperties(ρσ_anonfunc, {
                __module__ : {value: "random"}
            });
            return ρσ_anonfunc;
        })();
        function seed() {
            var x = (arguments[0] === undefined || ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? seed.__defaults__.x : arguments[0];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "x")){
                x = ρσ_kwargs_obj.x;
            }
            var i, j, ρσ_unpack;
            ρσ_seed_state.key_i = ρσ_seed_state.key_j = 0;
            if (typeof x === "number") {
                x = x.toString();
            } else if (typeof x !== "string") {
                throw new TypeError("unhashable type: '" + typeof x + "'");
            }
            for (var ρσ_Index1 = 0; ρσ_Index1 < 256; ρσ_Index1++) {
                i = ρσ_Index1;
                (ρσ_expr_temp = ρσ_seed_state.key)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = i;
            }
            j = 0;
            for (var ρσ_Index2 = 0; ρσ_Index2 < 256; ρσ_Index2++) {
                i = ρσ_Index2;
                j = (j + (ρσ_expr_temp = ρσ_seed_state.key)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] + x.charCodeAt(i % x.length)) % 256;
                ρσ_unpack = [(ρσ_expr_temp = ρσ_seed_state.key)[(typeof j === "number" && j < 0) ? ρσ_expr_temp.length + j : j], 
                (ρσ_expr_temp = ρσ_seed_state.key)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i]];
                (ρσ_expr_temp = ρσ_seed_state.key)[(typeof i === "number" && i < 0) ? ρσ_expr_temp.length + i : i] = ρσ_unpack[0];
                (ρσ_expr_temp = ρσ_seed_state.key)[(typeof j === "number" && j < 0) ? ρσ_expr_temp.length + j : j] = ρσ_unpack[1];
            }
        };
        if (!seed.__defaults__) Object.defineProperties(seed, {
            __defaults__ : {value: {x:(new Date).getTime()}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["x"]},
            __module__ : {value: "random"}
        });
    
        seed();
        function random() {
            var n, m, i;
            n = 0;
            m = 1;
            for (var ρσ_Index3 = 0; ρσ_Index3 < 8; ρσ_Index3++) {
                i = ρσ_Index3;
                n += ρσ_get_random_byte() * m;
                m *= 256;
            }
            return n / 0x10000000000000000;
        };
        if (!random.__module__) Object.defineProperties(random, {
            __module__ : {value: "random"}
        });
    
        function randrange() {
            var start, stop, step, width, n;
            if (arguments.length === 1) {
                return randbelow(int(arguments[0]));
            }
            start = int(arguments[0]);
            stop = int(arguments[1]);
            if (arguments.length < 3) {
                step = 1;
            } else {
                step = int(arguments[2]);
            }
            width = stop - start;
            if (step === 1) {
                if (width > 0) {
                    return start + randbelow(width);
                }
                throw new ValueError("empty range for randrange()");
            }
            if (step > 0) {
                n = Math.floor((width + step - 1) / step);
            } else if (step < 0) {
                n = Math.floor((width + step + 1) / step);
            } else {
                throw new ValueError("zero step for randrange()");
            }
            if (n <= 0) {
                throw new ValueError("empty range in randrange(" + ρσ_str.format("{}", start) + ", " + ρσ_str.format("{}", stop) + ", " + ρσ_str.format("{}", step) + ")");
            }
            return start + step * randbelow(n);
        };
        if (!randrange.__module__) Object.defineProperties(randrange, {
            __module__ : {value: "random"}
        });
    
        function randint(a, b) {
            return int(random() * (b - a + 1) + a);
        };
        if (!randint.__argnames__) Object.defineProperties(randint, {
            __argnames__ : {value: ["a", "b"]},
            __module__ : {value: "random"}
        });
    
        function uniform(a, b) {
            return random() * (b - a) + a;
        };
        if (!uniform.__argnames__) Object.defineProperties(uniform, {
            __argnames__ : {value: ["a", "b"]},
            __module__ : {value: "random"}
        });
    
        function randbelow(n) {
            return Math.floor(random() * n);
        };
        if (!randbelow.__argnames__) Object.defineProperties(randbelow, {
            __argnames__ : {value: ["n"]},
            __module__ : {value: "random"}
        });
    
        function choice(seq) {
            if (seq.length > 0) {
                return seq[ρσ_bound_index(randbelow(seq.length), seq)];
            } else {
                throw new IndexError;
            }
        };
        if (!choice.__argnames__) Object.defineProperties(choice, {
            __argnames__ : {value: ["seq"]},
            __module__ : {value: "random"}
        });
    
        function shuffle() {
            var x = ( 0 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
            var random_f = (arguments[1] === undefined || ( 1 === arguments.length-1 && arguments[arguments.length-1] !== null && typeof arguments[arguments.length-1] === "object" && arguments[arguments.length-1] [ρσ_kwargs_symbol] === true)) ? shuffle.__defaults__.random_f : arguments[1];
            var ρσ_kwargs_obj = arguments[arguments.length-1];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "random_f")){
                random_f = ρσ_kwargs_obj.random_f;
            }
            var j, ρσ_unpack, i;
            for (var ρσ_Index4 = 0; ρσ_Index4 < x.length; ρσ_Index4++) {
                i = ρσ_Index4;
                j = Math.floor(random_f() * (i + 1));
                ρσ_unpack = [x[(typeof j === "number" && j < 0) ? x.length + j : j], x[(typeof i === "number" && i < 0) ? x.length + i : i]];
                x[(typeof i === "number" && i < 0) ? x.length + i : i] = ρσ_unpack[0];
                x[(typeof j === "number" && j < 0) ? x.length + j : j] = ρσ_unpack[1];
            }
            return x;
        };
        if (!shuffle.__defaults__) Object.defineProperties(shuffle, {
            __defaults__ : {value: {random_f:random}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["x", "random_f"]},
            __module__ : {value: "random"}
        });
    
        function sample(population, k) {
            var x, j, ρσ_unpack, i;
            x = population.slice();
            for (var ρσ_Index5 = population.length - 1; ρσ_Index5 > population.length - k - 1; ρσ_Index5-=1) {
                i = ρσ_Index5;
                j = Math.floor(random() * (i + 1));
                ρσ_unpack = [x[(typeof j === "number" && j < 0) ? x.length + j : j], x[(typeof i === "number" && i < 0) ? x.length + i : i]];
                x[(typeof i === "number" && i < 0) ? x.length + i : i] = ρσ_unpack[0];
                x[(typeof j === "number" && j < 0) ? x.length + j : j] = ρσ_unpack[1];
            }
            return x.slice(population.length - k);
        };
        if (!sample.__argnames__) Object.defineProperties(sample, {
            __argnames__ : {value: ["population", "k"]},
            __module__ : {value: "random"}
        });
    
        ρσ_modules.random.ρσ_seed_state = ρσ_seed_state;
        ρσ_modules.random.ρσ_get_random_byte = ρσ_get_random_byte;
        ρσ_modules.random.seed = seed;
        ρσ_modules.random.random = random;
        ρσ_modules.random.randrange = randrange;
        ρσ_modules.random.randint = randint;
        ρσ_modules.random.uniform = uniform;
        ρσ_modules.random.randbelow = randbelow;
        ρσ_modules.random.choice = choice;
        ρσ_modules.random.shuffle = shuffle;
        ρσ_modules.random.sample = sample;
    })();
    async function __main__() {
    "use strict";
        var display = canvas;
        var scene = canvas();
    
        var version, print, arange, __name__, type, ρσ_ls, NUCLIDES, run, dt, time, A, Z, names, symbols, charges, menus, neutrons_list, i, informations, information, _, _GS_1, atom, m1, m2, m3, m4, t1;
        version = ρσ_list_decorate([ "3.2", "glowscript" ]);
        Array.prototype['+'] = function(r) {return this.concat(r)}
        Array.prototype['*'] = function(r) {return __array_times_number(this, r)}
        window.__GSlang = "vpython";
        print = GSprint;
        arange = range;
        __name__ = "__main__";
        type = pytype;
        var strings = ρσ_modules.pythonize.strings;
    
        strings();
        var random = ρσ_modules.random.random;
        var randint = ρσ_modules.random.randint;
    
        "5";
        NUCLIDES = ρσ_list_decorate([ "Hydrogen H 1 1 2", "Helium He 2 3 4", "Lithium Li 3 6 7", "Beryllium Be 4 9", "Boron B 5 10 11", "Carbon C 6 12 13", "Nitrogen N 7 14 15", "Oxygen O 8 16 17 18", "Fluorine F 9 19", "Neon Ne 10 20 21 22", "Sodium Na 11 23", "Magnesium Mg 12 24 25 26", "Aluminium Al 13 27", "Silicon Si 14 28 29 30", "Phosphorus P 15 31", "Sulfur S 16 32 33 34 36", "Chlorine Cl 17 37", "Argon Ar 18 38 40", "Potassium K 19 39 41", "Calcium Ca 20 40 42 43 44 46", "Scandium Sc 21 45", "Titanium Ti 22 46 47 48 49 50", "Vanadium V 23 51", "Chromium Cr 24 50 52 53 54", "Manganese Mn 25 55", "Iron Fe 26 54 56 57", "Cobalt Co 27 59", "Nickel Ni 28 58 60 61 62 64", "Copper Cu 29 63 65", "Zinc Zn 30 64 66 67 58 70", "Gallium Ga 31 69 71", "Germanium Ge 32 70 72 73 74", "Arsenic As 33 75", "Selenium Se 34 74 76 77 78 80", "Bromine Br 35 79 81", "Krypton Kr 36 80 82 83 84 86", "Rubidium Rb 37 85", "Strontium Sr 38 86 87 88", "Yttrium Y 39 89", "Zirconium Zr 40 90 91 92 94", "Niobium Nb 41 93", "Molybdenum Mo 42 92 94 95 96 97 98", "Technetium Tc 43", "Ruthenium Ru 44 96 98 99 100 101 102 104", "Rhodium Rh 45 103", "Palladium Pd 46 104 105 106 108 110", "Silver Ag 47 107 109", "Cadmium Cd 48 106 108 110 111 112 114", "Indium In 49 113", "Tin Sn 50 112 114 115 116 117 118 119 120 122 124", "Antimony Sb 51 121 123", "Tellurium Te 52 120 122 123 124 125 126", "Iodine I 53 127", "Xenon Xe 54 126 128 129 130 131 132 134", "Caesium Cs 55 133", "Barium Ba 56 132 134 135 136 137 138", "Lanthanum La 57 139", "Cerium Ce 58 136 138 140 142", "Praseodymium Pr 59 141", "Neodymium Nd 60 142 143 145 146 148", "Promethium Pm 61", "Samarium Sm 62 144 149 150 152 154", "Europium Eu 63 153", "Gadolinium Gd 64 154 155 156 157 158 160", "Terbium Tb 65 159", "Dysprosium Dy 66 156 158 160 161 162 163 164", "Holmium Ho 67 165", "Erbium Er 68 162 163 164 166 167 168 170", "Thulium Tm 69 169", "Ytterbium Yb 70 170 171 172 173 174 176", "Lutetium Lu 71 175", "Hafnium Hf 72 176 177 178 179 180", "Tantalum Ta 73 180 181", "Tungsten W 74 182 183 184 186", "Rhenium Re 75 185", "Osmium Os 76 184 187 188 189 190 192", "Iridium Ir 77 191 193", "Platinum Pt 78 192 194 195 196 198", "Gold Au 79 197", "Mercury Hg 80 196 198 199 200 201 202 204", "Thallium Tl 81 203 205", "Lead Pb 82 204 206 207 208", "Bismuth Bi 83", "Polonium Po 84", "Astatine At 85", "Radon Rn 86", "Francium Fr 87", "Radium Ra 88", "Actinium Ac 89", "Thorium Th 90", "Protactinium Pa 91", "Uranium U 92", "Neptunium Np 93", "Plutonium Pu 94", "Americium Am 95", "Curium Cm 96", "Berkelium Bk 97", "Californium Cf 98", "Einsteinium Es 99", "Fermium Fm 100", "Mendelevium Md 101", "Nobelium No 102", "Lawrencium Lr 103", "Rutherfordium Rf 104", "Dubnium Db 105", "Seaborgium Sg 106", "Bohrium Bh 107", "Hassium Hs 108", "Meitnerium Mt 109", "Darmstadtium Ds 110", "Roentgenium Rg 111", "Copernicium Cn 112", "Ununtrium Uut 113", "Flerovium Fl 114", "Ununpentium Uup 115", "Livermorium Lv 116", "Ununseptium Uus 117", "Ununoctium Uuo 118" ]);
        "7";
        async function split() {
            var string = ( 0 === arguments.length["-"](1) && arguments[arguments.length["-"](1)] !== null && typeof arguments[arguments.length["-"](1)] === "object" && arguments[arguments.length["-"](1)] [ρσ_kwargs_symbol] === true) ? undefined : arguments[0];
            var delimiters = (arguments[1] === undefined || ( 1 === arguments.length["-"](1) && arguments[arguments.length["-"](1)] !== null && typeof arguments[arguments.length["-"](1)] === "object" && arguments[arguments.length["-"](1)] [ρσ_kwargs_symbol] === true)) ? split.__defaults__.delimiters : arguments[1];
            var ρσ_kwargs_obj = arguments[arguments.length["-"](1)];
            if (ρσ_kwargs_obj === null || typeof ρσ_kwargs_obj !== "object" || ρσ_kwargs_obj [ρσ_kwargs_symbol] !== true) ρσ_kwargs_obj = {};
            if (Object.prototype.hasOwnProperty.call(ρσ_kwargs_obj, "delimiters")){
                delimiters = ρσ_kwargs_obj.delimiters;
            }
            var ρσ_ls, result, word, c;
            "8";
            result = ρσ_list_decorate([]);
            "9";
            word = "";
            "10";
            var ρσ_Iter6 = string;
            ρσ_Iter6 = ((typeof ρσ_Iter6[Symbol.iterator] === "function") ? (ρσ_Iter6 instanceof Map ? ρσ_Iter6.keys() : ρσ_Iter6) : Object.keys(ρσ_Iter6));
            for (var ρσ_Index6 of ρσ_Iter6) {
                c = ρσ_Index6;
                "11";
                if (!ρσ_in(c, delimiters)) {
                    "12";
                    word=word["+"](c);
                    "13";
                } else if (word) {
                    "14";
                    result.append(word);
                    "15";
                    word = "";
                    "17";
                }
            }
            if (word) {
                "18";
                result.append(word);
            }
            "20";
            return result;
        };
        if (!split.__defaults__) Object.defineProperties(split, {
            __defaults__ : {value: {delimiters:" \t\n"}},
            __handles_kwarg_interpolation__ : {value: true},
            __argnames__ : {value: ["string", "delimiters"]},
            __module__ : {value: null}
        });
    
        "22";
        function Atom() {;
        }
        Atom.prototype.__init__ = async function __init__(A, Z) {
            var self = this;
            "26";
            self.a = A;
            "27";
            self.z = Z;
            "28";
            self.stable = "unstable";
            "29";
            self.stability = false;
            "31";
            self.electrons = ρσ_list_decorate([]);
            "32";
            self.stable_isotops = ρσ_list_decorate([]);
            "33";
            self.stable_isotops_text = "";
            "34";
            self.particles = ρσ_list_decorate([]);
            "36";
            self.name = "";
            "37";
            self.symbol = "";
            "39";
            self.counter = 0;
        };
        if (!Atom.prototype.__init__.__argnames__) Object.defineProperties(Atom.prototype.__init__, {
            __argnames__ : {value: ["A", "Z"]},
            __module__ : {value: null}
        });
        Atom.__argnames__ = Atom.prototype.__init__.__argnames__;
        Atom.__handles_kwarg_interpolation__ = Atom.prototype.__init__.__handles_kwarg_interpolation__;
        Atom.prototype.get_info = async function get_info() {
            var self = this;
            var ρσ_ls, informations, data, i, isotop;
            "42";
            self.stable = "unstable";
            "43";
            self.stability = false;
            "44";
            self.stable_isotops_text = "";
            "45";
            informations = NUCLIDES;
            "46";
            data = (await split(ρσ_getitem(informations, self.z["-"](1["*"](1)))));
            "47";
            self.stable_isotops = ρσ_list_decorate([]);
            "49";
            self.name = ρσ_getitem(data, 0);
            "50";
            self.symbol = ρσ_getitem(data, 1);
            "52";
            if (len(data)[">"](3)) {
                "53";
                self.stable = "stable";
                "55";
            }
            if ((self.stable === "stable" || typeof self.stable === "object" && ρσ_equals(self.stable, "stable"))) {
                "56";
                var ρσ_Iter7 = range(3, len(data));
                ρσ_Iter7 = ((typeof ρσ_Iter7[Symbol.iterator] === "function") ? (ρσ_Iter7 instanceof Map ? ρσ_Iter7.keys() : ρσ_Iter7) : Object.keys(ρσ_Iter7));
                for (var ρσ_Index7 of ρσ_Iter7) {
                    i = ρσ_Index7;
                    "57";
                    self.stable_isotops.append(ρσ_getitem(data, i));
                }
            }
            "59";
            var ρσ_Iter8 = self.stable_isotops;
            ρσ_Iter8 = ((typeof ρσ_Iter8[Symbol.iterator] === "function") ? (ρσ_Iter8 instanceof Map ? ρσ_Iter8.keys() : ρσ_Iter8) : Object.keys(ρσ_Iter8));
            for (var ρσ_Index8 of ρσ_Iter8) {
                i = ρσ_Index8;
                "60";
                if (ρσ_equals(int(i), self.a)) {
                    "61";
                    self.stability = true;
                }
            }
            "64";
            var ρσ_Iter9 = self.stable_isotops;
            ρσ_Iter9 = ((typeof ρσ_Iter9[Symbol.iterator] === "function") ? (ρσ_Iter9 instanceof Map ? ρσ_Iter9.keys() : ρσ_Iter9) : Object.keys(ρσ_Iter9));
            for (var ρσ_Index9 of ρσ_Iter9) {
                isotop = ρσ_Index9;
                "65";
                self.stable_isotops_text=self.stable_isotops_text["+"](self.name["+"]("-")["+"](isotop)["+"](" "));
                "66";
            }
            if ((self.stable === "unstable" || typeof self.stable === "object" && ρσ_equals(self.stable, "unstable"))) {
                "67";
                self.stable_isotops_text = "None";
            }
        };
        if (!Atom.prototype.get_info.__module__) Object.defineProperties(Atom.prototype.get_info, {
            __module__ : {value: null}
        });
        Atom.prototype.get_points = async function get_points() {
            var self = this;
            var ρσ_ls, r, best_closest_d, best_points, points, i, x, y, z, closest_dist, closest_index, p1, p2, x1, y1, z1, x2, y2, z2, d, j, simulation;
            "73";
            if (self.a[">"](20)) {
                "74";
                self.a = round(sqrt(self.a)["*"](2));
                "75";
                self.z = round(sqrt(self.z)["*"](2));
            }
            "77";
            r = sqrt(self.a)["*"](.15);
            "78";
            best_closest_d = 0;
            "79";
            best_points = ρσ_list_decorate([]);
            "80";
            points = (function() {
                var ρσ_Iter = range(self.a), ρσ_Result = [], i;
                ρσ_Iter = ((typeof ρσ_Iter[Symbol.iterator] === "function") ? (ρσ_Iter instanceof Map ? ρσ_Iter.keys() : ρσ_Iter) : Object.keys(ρσ_Iter));
                for (var ρσ_Index of ρσ_Iter) {
                    i = ρσ_Index;
                    ρσ_Result.push([r, 0, 0]);
                }
                ρσ_Result = ρσ_list_constructor(ρσ_Result);
                return ρσ_Result;
            })();
            "81";
            for (var ρσ_Index10 = 0; ρσ_Index10["<"](1e4); ρσ_Index10++) {
                simulation = ρσ_Index10;
                "82";
                x = random()["*"](r);
                "83";
                y = random()["*"](r);
                "84";
                z = r["-"](1["*"](Math.pow((Math.pow(x, 2)["+"](Math.pow(y, 2))), .5)));
                "85";
                if ((await randint(0, 1))) {
                    "86";
                    x = 1["-u"]()["*"](x);
                    "87";
                }
                if ((await randint(0, 1))) {
                    "88";
                    y = 1["-u"]()["*"](y);
                    "89";
                }
                if ((await randint(0, 1))) {
                    "90";
                    z = 1["-u"]()["*"](z);
                }
                "91";
                closest_dist = Math.pow((2["*"](r)), 2);
                "92";
                closest_index = null;
                "93";
                for (var ρσ_Index11 = 0; ρσ_Index11["<"](self.a); ρσ_Index11++) {
                    i = ρσ_Index11;
                    "94";
                    for (var ρσ_Index12 = 0; ρσ_Index12["<"](self.a); ρσ_Index12++) {
                        j = ρσ_Index12;
                        "95";
                        if ((i === j || typeof i === "object" && ρσ_equals(i, j))) {
                            "96";
                            continue;
                        }
                        "97";
                        p1 = ρσ_getitem(points, i);
                        "98";
                        p2 = ρσ_getitem(points, j);
                        "99";
                        x1 = ρσ_getitem(p1, 0);
                        "100";
                        y1 = ρσ_getitem(p1, 1);
                        "101";
                        z1 = ρσ_getitem(p1, 2);
                        "102";
                        x2 = ρσ_getitem(p2, 0);
                        "103";
                        y2 = ρσ_getitem(p2, 1);
                        "104";
                        z2 = ρσ_getitem(p2, 2);
                        "105";
                        d = Math.pow((x1["-"](1["*"](x2))), 2)["+"](Math.pow((y1["-"](1["*"](y2))), 2))["+"](Math.pow((z1["-"](1["*"](z2))), 2));
                        "106";
                        if (d["<"](closest_dist)) {
                            "107";
                            closest_dist = d;
                            "108";
                            closest_index = i;
                            "109";
                        }
                    }
                }
                if (closest_dist[">"](best_closest_d)) {
                    "110";
                    best_closest_d = closest_dist;
                    "111";
                    self.best_points = points.slice(0);
                }
                "112";
                ρσ_setitem(ρσ_getitem(points, closest_index), 0, x);
                "113";
                ρσ_setitem(ρσ_getitem(points, closest_index), 1, y);
                "114";
                ρσ_setitem(ρσ_getitem(points, closest_index), 2, z);
            }
        };
        if (!Atom.prototype.get_points.__module__) Object.defineProperties(Atom.prototype.get_points, {
            __module__ : {value: null}
        });
        Atom.prototype.get_electron_configuration = async function get_electron_configuration() {
            var self = this;
            var ρσ_ls, possible_electrons, electron_count, orbital, i, dif, last_electron_pos, last_electrons, new_num;
            "117";
            self.orbitals = (await split("1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p 6f 7d 7f"));
            "118";
            possible_electrons = ρσ_interpolate_kwargs.call(this, dict, [ρσ_desugar_kwargs({s: 2, p: 6, d: 10, f: 14})]);
            "119";
            electron_count = 0;
            "120";
            self.result = ρσ_list_decorate([]);
            "121";
            var ρσ_Iter13 = self.orbitals;
            ρσ_Iter13 = ((typeof ρσ_Iter13[Symbol.iterator] === "function") ? (ρσ_Iter13 instanceof Map ? ρσ_Iter13.keys() : ρσ_Iter13) : Object.keys(ρσ_Iter13));
            for (var ρσ_Index13 of ρσ_Iter13) {
                i = ρσ_Index13;
                "122";
                if (electron_count["<"](self.z)) {
                    "123";
                    orbital = "".join((function() {
                        function* js_generator() {
                            var ρσ_Iter = i, j;
                            ρσ_Iter = ((typeof ρσ_Iter[Symbol.iterator] === "function") ? (ρσ_Iter instanceof Map ? ρσ_Iter.keys() : ρσ_Iter) : Object.keys(ρσ_Iter));
                            for (var ρσ_Index of ρσ_Iter) {
                                j = ρσ_Index;
                                if (ρσ_in(j, "spdf")) {
                                    yield (j);
                                }
                            }
    
                        }
                        var result = js_generator.call(this);
                        result.send = result.next;
                        return result;
                    })());
                    "124";
                    self.result.append(i["+"](str(ρσ_getitem(possible_electrons, orbital))));
                    "125";
                    electron_count=electron_count["+"](ρσ_getitem(possible_electrons, orbital));
                    "126";
                } else {
                    "127";
                    break;
                    "128";
                }
            }
            if (electron_count[">"](self.z)) {
                "129";
                dif = electron_count["-"](1["*"](self.z));
                "130";
                last_electron_pos = ρσ_getitem(self.result, 1["-u"]()["*"](1)).find(orbital)["+"](1);
                "131";
                last_electrons = int(ρσ_getitem(self.result, 1["-u"]()["*"](1)).slice(last_electron_pos));
                "132";
                new_num = last_electrons["-"](1["*"](dif));
                "134";
                ρσ_setitem(self.result, 1["-u"]()["*"](1), ρσ_getitem(self.result, 1["-u"]()["*"](1)).slice(0, last_electron_pos)["+"](str(new_num)));
            }
            "135";
            self.config_result = " ".join(self.result);
        };
        if (!Atom.prototype.get_electron_configuration.__module__) Object.defineProperties(Atom.prototype.get_electron_configuration, {
            __module__ : {value: null}
        });
        Atom.prototype.point = async function point(j, k, r) {
            var self = this;
            var ρσ_ls, theta;
            "138";
            theta = random()["*"](3)["*"](pi);
            "139";
            return [j["+"](cos(theta)["*"](r)), k["+"](sin(theta)["*"](r))];
        };
        if (!Atom.prototype.point.__argnames__) Object.defineProperties(Atom.prototype.point, {
            __argnames__ : {value: ["j", "k", "r"]},
            __module__ : {value: null}
        });
        Atom.prototype.build = async function build() {
            var self = this;
            var ρσ_ls, proton, neutron, ρσ_unpack, _, coords, i, conf, element, r, xy, electron, h;
            "142";
            if (self.a[">="](4)) {
                "143";
                var ρσ_Iter14 = (await zip(range(1, self.a["+"](1)), self.best_points));
                ρσ_Iter14 = ((typeof ρσ_Iter14[Symbol.iterator] === "function") ? (ρσ_Iter14 instanceof Map ? ρσ_Iter14.keys() : ρσ_Iter14) : Object.keys(ρσ_Iter14));
                for (var ρσ_Index14 of ρσ_Iter14) {
                    ρσ_unpack = ρσ_Index14;
                    _ = ρσ_unpack[0];
                    coords = ρσ_unpack[1];
                    "144";
                    self.counter=self.counter["+"](1);
                    "145";
                    if (self.counter["<="](self.z)) {
                        "146";
                        proton = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({radius: .35, color: vector(1, 0, 0), opacity: 1, pos: vector.apply(this, coords)})]);
                        "148";
                        self.particles.append(proton);
                        "149";
                    } else {
                        "150";
                        neutron = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({radius: .35, color: vector(0, 0, 1), opacity: 1, pos: vector.apply(this, coords)})]);
                        "152";
                        self.particles.append(neutron);
                        "153";
                    }
                }
            } else {
                "154";
                for (var ρσ_Index15 = 0; ρσ_Index15["<"](self.a); ρσ_Index15++) {
                    i = ρσ_Index15;
                    "155";
                    self.counter=self.counter["+"](1);
                    "156";
                    if (self.counter["<="](self.z)) {
                        "157";
                        proton = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({radius: .35, color: vector(1, 0, 0), opacity: 1, pos: vector(i["*"]((await randint(1["-u"]()["*"](1), 1)))["*"](.13), (await randint(1["-u"]()["*"](1), 1))["*"](.12)["*"](i), (await randint(1["-u"]()["*"](1), 1))["*"](.1)["*"](i))})]);
                        "159";
                        self.particles.append(proton);
                        "160";
                    } else {
                        "161";
                        neutron = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({radius: .35, color: vector(0, 0, 1), opacity: 1, pos: vector(i["*"]((await randint(1["-u"]()["*"](1), 1)))["*"](.12), (await randint(1["-u"]()["*"](1), 1))["*"](.13)["*"](i), (await randint(1["-u"]()["*"](1), 1))["*"](.1)["*"](i))})]);
                        "163";
                        self.particles.append(neutron);
                    }
                }
            }
            "165";
            conf = self.config_result;
            "166";
            var ρσ_Iter16 = self.orbitals;
            ρσ_Iter16 = ((typeof ρσ_Iter16[Symbol.iterator] === "function") ? (ρσ_Iter16 instanceof Map ? ρσ_Iter16.keys() : ρσ_Iter16) : Object.keys(ρσ_Iter16));
            for (var ρσ_Index16 of ρσ_Iter16) {
                element = ρσ_Index16;
                "167";
                conf = conf.__GSrep(element, "");
            }
            "168";
            r = 0;
            "169";
            var ρσ_Iter17 = (await split(conf));
            ρσ_Iter17 = ((typeof ρσ_Iter17[Symbol.iterator] === "function") ? (ρσ_Iter17 instanceof Map ? ρσ_Iter17.keys() : ρσ_Iter17) : Object.keys(ρσ_Iter17));
            for (var ρσ_Index17 of ρσ_Iter17) {
                h = ρσ_Index17;
                "170";
                r=r["+"](1);
                "171";
                var ρσ_Iter18 = range(1, int(h)["+"](1));
                ρσ_Iter18 = ((typeof ρσ_Iter18[Symbol.iterator] === "function") ? (ρσ_Iter18 instanceof Map ? ρσ_Iter18.keys() : ρσ_Iter18) : Object.keys(ρσ_Iter18));
                for (var ρσ_Index18 of ρσ_Iter18) {
                    i = ρσ_Index18;
                    "172";
                    xy = (await self.point(0, 0, r["*"](.7)["*"](sqrt(self.a))));
                    "174";
                    electron = ρσ_interpolate_kwargs.call(this, sphere, [ρσ_desugar_kwargs({radius: .1["+"](.03["*"](sqrt(self.a))), color: vector(1, 1, 0), make_trail: true, retain: 300, trail_color: vector(1, 1, 1), opacity: 1, pos: vector.apply(this, xy.concat([0]))})]);
                    "176";
                    self.electrons.append(electron);
                    "177";
                    self.particles.append(electron);
                }
            }
        };
        if (!Atom.prototype.build.__module__) Object.defineProperties(Atom.prototype.build, {
            __module__ : {value: null}
        });
        Atom.prototype.nuke = async function nuke() {
            var self = this;
            var ρσ_ls, electron, particle;
            "180";
            var ρσ_Iter19 = self.electrons;
            ρσ_Iter19 = ((typeof ρσ_Iter19[Symbol.iterator] === "function") ? (ρσ_Iter19 instanceof Map ? ρσ_Iter19.keys() : ρσ_Iter19) : Object.keys(ρσ_Iter19));
            for (var ρσ_Index19 of ρσ_Iter19) {
                electron = ρσ_Index19;
                "181";
                electron.clear_trail();
            }
            "182";
            var ρσ_Iter20 = self.particles;
            ρσ_Iter20 = ((typeof ρσ_Iter20[Symbol.iterator] === "function") ? (ρσ_Iter20 instanceof Map ? ρσ_Iter20.keys() : ρσ_Iter20) : Object.keys(ρσ_Iter20));
            for (var ρσ_Index20 of ρσ_Iter20) {
                particle = ρσ_Index20;
                "183";
                self.counter = 0;
                "184";
                particle.visible = false;
                "185";
                particle = undefined;
            }
        };
        if (!Atom.prototype.nuke.__module__) Object.defineProperties(Atom.prototype.nuke, {
            __module__ : {value: null}
        });
        Atom.prototype.animate = async function animate() {
            var self = this;
            var ρσ_ls, r, g, electron;
            "188";
            var ρσ_Iter21 = self.electrons;
            ρσ_Iter21 = ((typeof ρσ_Iter21[Symbol.iterator] === "function") ? (ρσ_Iter21 instanceof Map ? ρσ_Iter21.keys() : ρσ_Iter21) : Object.keys(ρσ_Iter21));
            for (var ρσ_Index21 of ρσ_Iter21) {
                electron = ρσ_Index21;
                "190";
                r = sqrt(electron.pos.x["*"](electron.pos.x)["+"](electron.pos.y["*"](electron.pos.y)));
                "193";
                g = atan2(electron.pos.y, electron.pos.x);
                "195";
                electron.pos.x = r["*"](cos(.02["+"](g)));
                "196";
                electron.pos.y = r["*"](sin(.02["+"](g)));
            }
        };
        if (!Atom.prototype.animate.__module__) Object.defineProperties(Atom.prototype.animate, {
            __module__ : {value: null}
        });
        Atom.prototype.__repr__ = async function __repr__() {
                    return "<"["+"](__name__)["+"](".")["+"](this.constructor.name)["+"](" #")["+"](this.ρσ_object_id)["+"](">");
        };
        Atom.prototype.__str__ = async function __str__() {
            return this.__repr__();
        };
        Object.defineProperty(Atom.prototype, "__bases__", {value: []});
        
        
        
        
        
        
        
        
    
        "198";
        run = true;
        "199";
        dt = 100;
        "200";
        time = 0;
        "202";
        A = 1;
        "203";
        Z = 1;
        "205";
        names = ρσ_list_decorate([]);
        "206";
        symbols = ρσ_list_decorate([]);
        "207";
        charges = ρσ_list_decorate([]);
        "208";
        menus = ρσ_list_decorate([]);
        "209";
        neutrons_list = ρσ_list_decorate([]);
        "210";
        for (var ρσ_Index22 = 0; ρσ_Index22["<"](250); ρσ_Index22++) {
            i = ρσ_Index22;
            "211";
            neutrons_list.append(str(i));
        }
        "213";
        informations = NUCLIDES;
        "215";
        var ρσ_Iter23 = informations;
        ρσ_Iter23 = ((typeof ρσ_Iter23[Symbol.iterator] === "function") ? (ρσ_Iter23 instanceof Map ? ρσ_Iter23.keys() : ρσ_Iter23) : Object.keys(ρσ_Iter23));
        for (var ρσ_Index23 of ρσ_Iter23) {
            _ = ρσ_Index23;
            "216";
            information = (await split(_));
            "217";
            names.append(ρσ_getitem(information, 0));
            "218";
            symbols.append(ρσ_getitem(information, 1));
            "219";
            charges.append(ρσ_getitem(information, 2));
        }
        "221";
        _GS_1 = new Atom;
        (await _GS_1.__init__(A, Z));
        atom = _GS_1;
        "222";
        (await atom.get_info());
        "223";
        (await atom.get_electron_configuration());
        "226";
        async function recreate(menu) {
            var ρσ_ls, i;
            "227";
            atom.z = ρσ_getitem((function() {
                var ρσ_Iter = enumerate(menu.choices), ρσ_Result = [], i, j;
                ρσ_Iter = ((typeof ρσ_Iter[Symbol.iterator] === "function") ? (ρσ_Iter instanceof Map ? ρσ_Iter.keys() : ρσ_Iter) : Object.keys(ρσ_Iter));
                for (var ρσ_Index of ρσ_Iter) {
                    ρσ_unpack = ρσ_Index;
                    i = ρσ_unpack[0];
                    j = ρσ_unpack[1];
                    if ((j === menu.selected || typeof j === "object" && ρσ_equals(j, menu.selected))) {
                        ρσ_Result.push(i);
                    }
                }
                ρσ_Result = ρσ_list_constructor(ρσ_Result);
                return ρσ_Result;
            })(), 0)["+"](1);
            "228";
            var ρσ_Iter24 = menus;
            ρσ_Iter24 = ((typeof ρσ_Iter24[Symbol.iterator] === "function") ? (ρσ_Iter24 instanceof Map ? ρσ_Iter24.keys() : ρσ_Iter24) : Object.keys(ρσ_Iter24));
            for (var ρσ_Index24 of ρσ_Iter24) {
                menu = ρσ_Index24;
                "229";
                menu.selected = str(ρσ_getitem(menu.choices, atom.z["-"](1["*"](1))));
            }
            "230";
            (await atom.get_electron_configuration());
            "231";
            (await atom.get_info());
            "232";
            if ((atom.stable === "stable" || typeof atom.stable === "object" && ρσ_equals(atom.stable, "stable"))) {
                "233";
                atom.a = int(ρσ_getitem(atom.stable_isotops, 0));
                "234";
            } else {
                "235";
                atom.a = atom.z["*"](2);
            }
            "236";
            var ρσ_Iter25 = atom.stable_isotops;
            ρσ_Iter25 = ((typeof ρσ_Iter25[Symbol.iterator] === "function") ? (ρσ_Iter25 instanceof Map ? ρσ_Iter25.keys() : ρσ_Iter25) : Object.keys(ρσ_Iter25));
            for (var ρσ_Index25 of ρσ_Iter25) {
                i = ρσ_Index25;
                "237";
                if (ρσ_equals(int(i), atom.a)) {
                    "238";
                    atom.stability = true;
                }
            }
            "239";
            m4.selected = str(atom.a["-"](1["*"](atom.z)));
            "240";
            t1.text = "\n\nElectron Configuration: "["+"](atom.config_result)["+"]("\n\nStable: ")["+"](str(atom.stability))["+"]("\n\nStable Isotops: ")["+"](atom.stable_isotops_text);
            "241";
            (await atom.nuke());
            "242";
            if (atom.a[">="](4)) {
                "243";
                (await atom.get_points());
            }
            "244";
            (await atom.build());
        };
        if (!recreate.__argnames__) Object.defineProperties(recreate, {
            __argnames__ : {value: ["menu"]},
            __module__ : {value: null}
        });
    
        "246";
        async function neutron_slider(menu) {
            "247";
            atom.a = atom.z["+"](int(menu.selected));
            "248";
            (await atom.get_info());
            "249";
            t1.text = "\n\nElectron Configuration: "["+"](atom.config_result)["+"]("\n\nStable: ")["+"](str(atom.stability))["+"]("\n\nStable Isotops: ")["+"](atom.stable_isotops_text);
            "250";
            (await atom.nuke());
            "251";
            (await atom.get_electron_configuration());
            "252";
            if (atom.a[">="](4)) {
                "253";
                (await atom.get_points());
            }
            "254";
            (await atom.build());
        };
        if (!neutron_slider.__argnames__) Object.defineProperties(neutron_slider, {
            __argnames__ : {value: ["menu"]},
            __module__ : {value: null}
        });
    
        "256";
        scene.append_to_caption("\n\n Name: ");
        "257";
        m1 = ρσ_interpolate_kwargs.call(this, menu, [ρσ_desugar_kwargs({choices: names, bind: recreate, selected: atom.name})]);
        "258";
        scene.append_to_caption("\n\nSymbol: ");
        "259";
        m2 = ρσ_interpolate_kwargs.call(this, menu, [ρσ_desugar_kwargs({choices: symbols, bind: recreate, selected: atom.symbol})]);
        "260";
        scene.append_to_caption("\n\nAtomic Number: ");
        "261";
        m3 = ρσ_interpolate_kwargs.call(this, menu, [ρσ_desugar_kwargs({choices: charges, bind: recreate, selected: str(atom.z)})]);
        "262";
        scene.append_to_caption("\n\nNeutron Number: ");
        "263";
        m4 = ρσ_interpolate_kwargs.call(this, menu, [ρσ_desugar_kwargs({choices: neutrons_list, bind: neutron_slider, selected: str(atom.a["-"](1["*"](atom.z)))})]);
        "264";
        t1 = ρσ_interpolate_kwargs.call(this, wtext, [ρσ_desugar_kwargs({text: "\n\nElectron Configuration: "["+"](atom.config_result)["+"]("\n\nStable: ")["+"](str(atom.stability))["+"]("\n\nStable Isotops: ")["+"](atom.stable_isotops_text)})]);
        "266";
        menus = ρσ_list_decorate([ m1, m2, m3 ]);
        "268";
        if (A[">="](4)) {
            "269";
            (await atom.get_points());
        }
        "270";
        (await atom.build());
        "272";
        while (run) {
            "273";
            (await rate(100));
            "274";
            (await atom.animate());
            "275";
            time=time["+"](dt);
        }
    };
    if (!__main__.__module__) Object.defineProperties(__main__, {
        __module__ : {value: null}
    });
    
    ;$(function(){ window.__context = { glowscript_container: $("#glowscript").removeAttr("id") }; __main__() })})()
    // END JAVASCRIPT