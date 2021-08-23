
        const main = document.getElementById('main');
        const p1 = document.getElementById('finalyear');
        const p2 = document.getElementById("p2");
        const p3 = document.getElementById('p3');
        const p4 = document.getElementById('p4');
        const p5 = document.getElementById('p5');
        const p6 = document.getElementById('p6');
        const p7 = document.getElementById('p7');
        const p8 = document.getElementById('p8');
        const p9 = document.getElementById('p9');
        const p10 = document.getElementById('p10');
        const p11 = document.getElementById('p11');
        const p12 = document.getElementById('p12');
        const p13 = document.getElementById('p13');
        const p14 = document.getElementById('p14');
        const p15 = document.getElementById('p15');
        const p16 = document.getElementById('p16');
        const p17 = document.getElementById('p17');
        const p18 = document.getElementById('p18');
        const p19 = document.getElementById('p19');
        const p20 = document.getElementById('p20');
        const p21 = document.getElementById('p21');

        const m1 = document.getElementById('member1');
        const m2 = document.getElementById('member2');
        const m3 = document.getElementById('member3');
        const m4 = document.getElementById('member4');
        const m5 = document.getElementById('member5');
        const m6 = document.getElementById('member6');
        const m7 = document.getElementById('member7');
        const m8 = document.getElementById('member8');
        const m9 = document.getElementById('member9');
        const m10 = document.getElementById('member10');
        const m11 = document.getElementById('member11');
        const m12 = document.getElementById('member12');
        const m13 = document.getElementById('member13');
        const m14 = document.getElementById('member14');
        const m15 = document.getElementById('member15');
        const m16 = document.getElementById('member16');
        const m17 = document.getElementById('member17');

        const i1 = document.getElementById('i1');
        const i2 = document.getElementById('i2');
        const i3 = document.getElementById('i3');
        const i4 = document.getElementById('i4');
        const i5 = document.getElementById('i5');
        const i6 = document.getElementById('i6');
        const i7 = document.getElementById('i7');
        const i8 = document.getElementById('i8');
        const i9 = document.getElementById('i9');
        const i10 = document.getElementById('i10');
        const i11 = document.getElementById('i11');
        const i12 = document.getElementById('i12');
        const i13 = document.getElementById('i13');
        const i14 = document.getElementById('i14');
        const i15 = document.getElementById('i15');
        const i16 = document.getElementById('i16');
        const i17 = document.getElementById('i17');

        const m18 = document.getElementById('member18');
        const m19 = document.getElementById('member19');
        const m20 = document.getElementById('member20');
        const m21 = document.getElementById('member21');
        const m22 = document.getElementById('member22');
        const m23 = document.getElementById('member23');
        const m24 = document.getElementById('member24');
        const m25 = document.getElementById('member25');
        const m26 = document.getElementById('member26');
        const m27 = document.getElementById('member27');
        const m28 = document.getElementById('member28');
        const m29 = document.getElementById('member29');
        const m30 = document.getElementById('member30');
        const m31 = document.getElementById('member31');
        const m32 = document.getElementById('member32');
        const m33 = document.getElementById('member33');
        const m34 = document.getElementById('member34');

        const c = document.querySelector('.contact');


        let posts = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,]
        let mem = [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m19, m20, m21, m22, m23, m24, m25, m26, m27, m28, m29, m30, m31, m32, m33, m34]
        let info = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17]
        for (let i = 0; i < posts.length; i++) {
            posts[i].addEventListener("click", function () {

                for (let j = 0; j < posts.length; j++) {
                    if (i == j)
                        continue;

                    if (posts[j].style.zIndex != "-2") {
                        posts[j].setAttribute(
                            "style", "z-index: -2;  transform: scale(0.8); transition: all 0.3s linear;");
                        posts[j].style.transform = "scale(0.8)";
                    }

                    else {
                        posts[j].style.zIndex = "1";
                        posts[j].style.transform = "scale(1)";
                    }

                }

                for (j = 0; j < mem.length; j++) {
                    if (mem[j].style.zIndex != "-2") {
                        mem[j].setAttribute(
                            "style", "z-index: -2;  transform: scale(0.8); transition: all 0.3s linear;");
                        mem[j].style.transform = "scale(0.8)";
                    }

                    else {
                        mem[j].style.zIndex = "1";
                        mem[j].style.transform = "scale(1)";
                    }
                }
                if (i == 1) {
                    m2.style.zIndex = "1";
                    m2.style.transform = "scale(1)";
                    m4.style.zIndex = "1";
                    m4.style.transform = "scale(1)";
                    m16.style.zIndex = "1";
                    m16.style.transform = "scale(1)";
                    m18.style.zIndex = "1";
                    m18.style.transform = "scale(1)";
                }
                if (i == 3) {
                    m1.style.zIndex = "1";
                    m1.style.transform = "scale(1)";
                    m3.style.zIndex = "1";
                    m3.style.transform = "scale(1)";
                    m25.style.zIndex = "1";
                    m25.style.transform = "scale(1)";
                    m26.style.zIndex = "1";
                    m26.style.transform = "scale(1)";
                }
                if (i == 4) {
                    m5.style.zIndex = "1";
                    m5.style.transform = "scale(1)";
                    m19.style.zIndex = "1";
                    m19.style.transform = "scale(1)";
                    m20.style.zIndex = "1";
                    m20.style.transform = "scale(1)";
                }
                if (i == 5) {
                    m7.style.zIndex = "1";
                    m7.style.transform = "scale(1)";
                    m30.style.zIndex = "1";
                    m30.style.transform = "scale(1)";
                    m31.style.zIndex = "1";
                    m31.style.transform = "scale(1)";
                }
                if (i == 8) {
                    m6.style.zIndex = "1";
                    m6.style.transform = "scale(1)";
                    m8.style.zIndex = "1";
                    m8.style.transform = "scale(1)";
                    m28.style.zIndex = "1";
                    m28.style.transform = "scale(1)";
                }
                if (i == 9) {
                    m10.style.zIndex = "1";
                    m10.style.transform = "scale(1)";
                    m32.style.zIndex = "1";
                    m32.style.transform = "scale(1)";
                }
                if (i == 10) {
                    m9.style.zIndex = "1";
                    m9.style.transform = "scale(1)";
                    m11.style.zIndex = "1";
                    m11.style.transform = "scale(1)";
                    m12.style.zIndex = "1";
                    m12.style.transform = "scale(1)";
                    m13.style.zIndex = "1";
                    m13.style.transform = "scale(1)";
                }
                if (i == 12) {
                    m14.style.zIndex = "1";
                    m14.style.transform = "scale(1)";
                    m29.style.zIndex = "1";
                    m29.style.transform = "scale(1)";
                }
                if (i == 13) {
                    m17.style.zIndex = "1";
                    m17.style.transform = "scale(1)";
                    m21.style.zIndex = "1";
                    m21.style.transform = "scale(1)";
                    m22.style.zIndex = "1";
                    m22.style.transform = "scale(1)";
                }
                if (i == 14) {
                    m23.style.zIndex = "1";
                    m23.style.transform = "scale(1)";
                    m24.style.zIndex = "1";
                    m24.style.transform = "scale(1)";

                }
                if (i == 15) {
                    m27.style.zIndex = "1";
                    m27.style.transform = "scale(1)";
                }
                if (i == 16) {
                    m33.style.zIndex = "1";
                    m33.style.transform = "scale(1)";
                }
                if (i == 20) {
                    m34.style.zIndex = "1";
                    m34.style.transform = "scale(1)";
                }
            });

        }

        for (let k = 0; k < mem.length; k++) {

            mem[k].addEventListener("click", function(){
                if (info[k].style.display!="block") {
                    info[k].style.display = "block";
                    // info[k].style.transform = "translateX(30px)";

                }
                else{
                    info[k].style.display = "none";
                }

            } );
        }