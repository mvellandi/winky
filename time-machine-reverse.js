var storyContent = ﻿{"inkVersion":19,"root":[[{"->":"Introduction"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"Introduction":[[{"#":"CLEAR"},"^Congratulations, you've stolen your first time machine! Now that you've crossed the starting wires, you rev the engine of the tricked-out purple sedan. You shift to reverse gear and back out of the mad scientist's driveway. Fast!","\n","^The white-haired old scientist runs out of her house in goggles. The speedometer climbs as you race backwards down her quiet street at night. She screams, \"You fool! It won't change–\"","\n","^Suburban homes melt into blurry lines and bright colors. You try to shift out of reverse, but the gear is stuck. The digital clock on the dashboard reads 2023. 2022. 2021... Uh, that can't be good.","\n","^What would you like to do?","\n",["ev",{"^->":"Introduction.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Hit the brakes!",{"->":"$r","var":true},null]}],["ev",{"^->":"Introduction.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Inspect the dashboard.",{"->":"$r","var":true},null]}],["ev",{"^->":"Introduction.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Examine the glove compartment.",{"->":"$r","var":true},null]}],["ev",{"^->":"Introduction.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^Shift out of reverse.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Introduction.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"->":"Brakes"},{"#f":5}],"c-1":["ev",{"^->":"Introduction.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"->":"Dashboard"},{"#f":5}],"c-2":["ev",{"^->":"Introduction.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n",{"->":"GloveCompartment"},{"#f":5}],"c-3":["ev",{"^->":"Introduction.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n",{"->":"Reverse"},{"#f":5}]}],{"#f":3}],"MainNav":[[{"#":"CLEAR"},"^The numbers on the digital clock are changing comically fast! Who knows what year it is anymore?","\n","^What would you like to do?","\n",["ev",{"^->":"MainNav.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Hit the brakes!",{"->":"$r","var":true},null]}],["ev",{"^->":"MainNav.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Inspect the dashboard.",{"->":"$r","var":true},null]}],["ev",{"^->":"MainNav.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":2},{"s":["^Examine the glove compartment.",{"->":"$r","var":true},null]}],["ev",{"^->":"MainNav.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^Shift out of reverse.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"MainNav.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"Brakes"},{"#f":5}],"c-1":["ev",{"^->":"MainNav.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"Dashboard"},{"#f":5}],"c-2":["ev",{"^->":"MainNav.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"GloveCompartment"},{"#f":5}],"c-3":["ev",{"^->":"MainNav.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"Reverse"},{"#f":5}]}],{"#f":1}],"Brakes":[[{"#":"CLEAR"},"^You take your foot off the gas and pound the breaks. What you expect is for the car to stop moving. What you get is the car slowly floating through an unfamiliar atmosphere. A dark universe of slowly moving clouds of blinding white light. It's like being lost in space, only way more terrifying. The clock on the dash reads, \"????\"","\n","^Next to the clock is a fast blinking yellow button with an exclamation point.","\n",["ev",{"^->":"Brakes.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Hit the yellow button!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Brakes.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"YellowButton"},{"#f":5}]}],{"#f":1}],"YellowButton":[[{"#":"CLEAR"},"^The car automatically positions itself towards a blinding white light. You drive towards the light!","\n",["ev",{"^->":"YellowButton.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Oh god, what is it doing and why is it–",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"YellowButton.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"Restart"},{"#f":5}]}],{"#f":1}],"Dashboard":[[{"#":"CLEAR"},"ev",{"CNT?":".^.^"},1,"<=","/ev",[{"->":".^.b","c":true},{"b":["^ The dashboard contains a dizzying array of symbols lit in different colors...",{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"TireFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/tire_red.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The exclamation point in an oval container with treads is red.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.16"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/tire_green.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The exclamation point in an oval container with treads is green.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.16"},null]}],"nop","\n","ev",{"VAR?":"WarmerFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/warmer_red.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The seat with arrows pointing upward is red.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.25"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/warmer_green.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The seat with arrows pointing upward is green.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.25"},null]}],"nop","\n","ev",{"VAR?":"NukeFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/nuke_red.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The atom with ovals and dots circling is red.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.34"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/nuke_green.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The atom with ovals and dots circling is green.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.34"},null]}],"nop","\n","ev",{"VAR?":"EngineFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/engine_red.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The boxy mechanical symbol is red.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.43"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/engine_green.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The boxy mechanical symbol is green.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.43"},null]}],"nop","\n","ev",{"VAR?":"ACFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/ac_red.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The snowflake symbol is red.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.52"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/ac_green.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The snowflake symbol is green.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.52"},null]}],"nop","\n","ev",{"VAR?":"AlienFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/alien_red.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The weird elongated face is red.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.61"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/alien_green.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The weird elongated face is green.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.61"},null]}],"nop","\n","ev",{"VAR?":"AirbagFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/airbag_red.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The seated person with a circle in front of it is red.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.70"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/airbag_green.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The seated person with a circle in front of it is green.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.70"},null]}],"nop","\n","ev",{"VAR?":"WiperFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/wipers_red.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The liquid spouting from an arc is red.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.79"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/wipers_green.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The liquid spouting from an arc is green.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.79"},null]}],"nop","\n","ev",{"VAR?":"DecontamFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/decontam_red.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The gas mask is red.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.88"},null]}],[{"->":".^.b"},{"b":["\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"#":"IMAGE: img/decontam_green.png"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The gas mask is green.",{"->":".^.^.^.15"},null]}],"nop","\n",{"->":".^.^.^.88"},null]}],"nop","\n","ev",{"VAR?":"ReadAloud"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",["ev",{"^->":"Dashboard.0.95.b.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Try and think out what the symbols are.",{"->":"$r","var":true},null]}],{"->":".^.^.^.97"},{"c-0":["ev",{"^->":"Dashboard.0.95.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev",1,"/ev",{"VAR=":"ReadAloud","re":true},{"->":"Dashboard"},{"#f":5}]}]}],[{"->":".^.b"},{"b":["\n",["ev",{"^->":"Dashboard.0.96.b.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Focus on just the symbols as images.",{"->":"$r","var":true},null]}],{"->":".^.^.^.97"},{"c-0":["ev",{"^->":"Dashboard.0.96.b.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n","ev",0,"/ev",{"VAR=":"ReadAloud","re":true},{"->":"Dashboard"},{"#f":5}]}]}],"nop","\n",["ev",{"^->":"Dashboard.0.99.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Figure out what to do!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Dashboard.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.99.s"},[{"#n":"$r2"}],"\n",{"->":"MainNav"},{"#f":5}]}],{"#f":1}],"GloveCompartment":[[{"#":"CLEAR"},"ev",{"CNT?":".^.^"},1,">","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"Tubes"},{"->":".^.^.^.7"},null]}],"nop","\n","^You open the glove compartment. Inside you find a pack of mint gum, an open chapstick with fuzz on the tip, a bunch of loose glass tubes, and a small circular inlet labeled \"Insert Liquid.\"","\n",["ev",{"^->":"GloveCompartment.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Check out those tubes.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"GloveCompartment.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n",{"->":"Tubes"},{"#f":5}]}],{"#f":1}],"Tubes":[[{"#":"CLEAR"},"^The glass tubes are hand labeled on the side. You can take one and insert what's inside them into the inlet.","\n",["ev",{"^->":"Tubes.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^A blue liquid labeled \"Wipe\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Tubes.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^A white gas labeled \"Air\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Tubes.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^A glowing green gas labeled \"Snarf\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Tubes.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^An orange liquid labeled \"AntiF\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Tubes.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^A red liquid labeled \"Transm\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Tubes.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^A yellow liquid labeled \"Decon\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Tubes.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^A sparking gas called \"Heat\"",{"->":"$r","var":true},null]}],["ev",{"^->":"Tubes.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":2},{"s":["^Do something else!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Tubes.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"Wipe"},{"#f":5}],"c-1":["ev",{"^->":"Tubes.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":"Air"},{"#f":5}],"c-2":["ev",{"^->":"Tubes.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"Snarf"},{"#f":5}],"c-3":["ev",{"^->":"Tubes.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":"AntiF"},{"#f":5}],"c-4":["ev",{"^->":"Tubes.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"Transm"},{"#f":5}],"c-5":["ev",{"^->":"Tubes.0.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"Decon"},{"#f":5}],"c-6":["ev",{"^->":"Tubes.0.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n",{"->":"Heat"},{"#f":5}],"c-7":["ev",{"^->":"Tubes.0.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n",{"->":"MainNav"},{"#f":5}]}],{"#f":1}],"Wipe":[[{"#":"CLEAR"},"ev",1,"/ev",{"VAR=":"WiperFix","re":true},"^You insert the blue liquid into the inlet. There's a DING – the car has processed it – then a blast of wiper fluid hits the windshield. You run the wipers for a minute. Your windshield is very clean!","\n",["ev",{"^->":"Wipe.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Try another tube.",{"->":"$r","var":true},null]}],["ev",{"^->":"Wipe.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Do something else!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Wipe.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"Tubes"},{"#f":5}],"c-1":["ev",{"^->":"Wipe.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"MainNav"},{"#f":5}]}],{"#f":1}],"Air":[[{"#":"CLEAR"},"ev",1,"/ev",{"VAR=":"TireFix","re":true},"ev",1,"/ev",{"VAR=":"AirbagFix","re":true},"^You insert the white gas into the inlet. There's a DING – the car has processed it – then you hear the \"hiss\" of inflation in both the steering wheel and the tires below. You feel safer!","\n",["ev",{"^->":"Air.0.11.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Try another tube.",{"->":"$r","var":true},null]}],["ev",{"^->":"Air.0.12.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Do something else!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Air.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.11.s"},[{"#n":"$r2"}],"\n",{"->":"Tubes"},{"#f":5}],"c-1":["ev",{"^->":"Air.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.12.s"},[{"#n":"$r2"}],"\n",{"->":"MainNav"},{"#f":5}]}],{"#f":1}],"Snarf":[[{"#":"CLEAR"},"ev",1,"/ev",{"VAR=":"AlienFix","re":true},"^You insert the glowing green gas into the inlet. There's a DING – the car has processed it – then every surface inside the car changes color into green and white spirals. It ends after a minute. You feel... weird?","\n",["ev",{"^->":"Snarf.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Try another tube.",{"->":"$r","var":true},null]}],["ev",{"^->":"Snarf.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Do something else!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Snarf.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"Tubes"},{"#f":5}],"c-1":["ev",{"^->":"Snarf.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"MainNav"},{"#f":5}]}],{"#f":1}],"AntiF":[[{"#":"CLEAR"},"ev",1,"/ev",{"VAR=":"ACFix","re":true},"^You insert the orange liquid into the inlet. There's a DING – the car has processed it – then the AC blows cool air on your face. Feels nice! It was getting a bit stuffy in the car.","\n",["ev",{"^->":"AntiF.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Try another tube.",{"->":"$r","var":true},null]}],["ev",{"^->":"AntiF.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Do something else!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"AntiF.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"Tubes"},{"#f":5}],"c-1":["ev",{"^->":"AntiF.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"MainNav"},{"#f":5}]}],{"#f":1}],"Transm":[[{"#":"CLEAR"},"ev",1,"/ev",{"VAR=":"EngineFix","re":true},"^You insert the red liquid into the inlet. There's a DING – the car has processed it – then you hear a pleasant hum from the engine. A very soothing sound. Ahhhh...","\n",["ev",{"^->":"Transm.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Try another tube.",{"->":"$r","var":true},null]}],["ev",{"^->":"Transm.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Do something else!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Transm.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"Tubes"},{"#f":5}],"c-1":["ev",{"^->":"Transm.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"MainNav"},{"#f":5}]}],{"#f":1}],"Decon":[[{"#":"CLEAR"},"ev",1,"/ev",{"VAR=":"DecontamFix","re":true},"^You insert the yellow liquid into the inlet. There's a DING – the car has processed it – then a yellow gas emits from the AC with a hiss. At first, it makes you cough, but then you realize your sinuses have never been clearer.","\n",["ev",{"^->":"Decon.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Try another tube.",{"->":"$r","var":true},null]}],["ev",{"^->":"Decon.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Do something else!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Decon.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"Tubes"},{"#f":5}],"c-1":["ev",{"^->":"Decon.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"MainNav"},{"#f":5}]}],{"#f":1}],"Heat":[[{"#":"CLEAR"},"ev",1,"/ev",{"VAR=":"WarmerFix","re":true},"^You insert the sparking gas into the inlet. There's a DING – the car has processed it – then you start to feel a pleasant warmth in the buttocks area. The leather seat is heating up. Luxury!","\n",["ev",{"^->":"Heat.0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Try another tube.",{"->":"$r","var":true},null]}],["ev",{"^->":"Heat.0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^Do something else!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Heat.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"->":"Tubes"},{"#f":5}],"c-1":["ev",{"^->":"Heat.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"\n",{"->":"MainNav"},{"#f":5}]}],{"#f":1}],"Reverse":["ev",{"VAR?":"EngineFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["\n",{"->":"ReverseBad"},{"->":".^.^.^.7"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"ReverseGood"},{"->":".^.^.^.7"},null]}],"nop","\n",{"#f":1}],"ReverseBad":[[{"#":"CLEAR"},"^You grab the clutch and try to shift gears. But the gear is locked. Instead, you hear a loud whirring sound, followed by grinding. Like a robot brewing themselves a cup of sparks by rubbing metal on metal.","\n",["ev",{"^->":"ReverseBad.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Do something else!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ReverseBad.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"MainNav"},{"#f":5}]}],{"#f":1}],"ReverseGood":[[{"#":"CLEAR"},"^You grab the clutch and try to shift gears. It works! Maybe \"transm\" stood for \"transmission\" and bad transmission fluid was causing the gear to get stuck. Either that, or you \"transmitted\" a wish to the cosmos and it was granted.","\n","^You shift back to drive!","\n",["ev",{"^->":"ReverseGood.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Hit the gas!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ReverseGood.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"Ending"},{"#f":5}]}],{"#f":1}],"Ending":[[{"#":"CLEAR"},"^You're smiling ear to ear as the blurry lines around you reverse their direction. You're home free!","\n","^Until you suddenly CRASH! There's darkness and then...","\n",["ev",{"^->":"Ending.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Ughhh...",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Ending.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"EndingChooser"},{"#f":5}]}],{"#f":1}],"EndingChooser":["ev",{"^->":"Introduction"},"turns",8,"<=","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"Modern"},{"->":".^.^.^.7"},null]}],"nop","\n","ev",{"^->":"Introduction"},"turns",12,"<=","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"Eighties"},{"->":".^.^.^.16"},null]}],"nop","\n","ev",{"^->":"Introduction"},"turns",16,"<=","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"Thirties"},{"->":".^.^.^.25"},null]}],"nop","\n","ev",{"^->":"Introduction"},"turns",20,"<=","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"Medieval"},{"->":".^.^.^.34"},null]}],"nop","\n","ev",{"^->":"Introduction"},"turns",20,">","/ev",[{"->":".^.b","c":true},{"b":["^ ",{"->":"Dinosaurs"},{"->":".^.^.^.43"},null]}],"nop","\n",{"#f":1}],"Modern":[[{"#":"CLEAR"},"^You awaken to find the time machine wrapped around a tree in front of the mad scientist's house. The dashboard clock says 2023. Phew.","\n","ev",{"VAR?":"AirbagFix"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ Thank goodness the airbag went off! You push open the driver's side door and run away into the night.",{"->":".^.^.^.9"},null]}],"nop","^ ","ev",{"VAR?":"AirbagFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["^ You hit your head on the steering wheel. That'll leave a mark. You struggle to open the driver's side door and stumble outside.",{"->":".^.^.^.17"},null]}],"nop","\n",["ev",{"^->":"Modern.0.19.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Confirm you're in 2023.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Modern.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.19.s"},[{"#n":"$r2"}],"\n",{"->":"Modern2"},{"#f":5}]}],{"#f":1}],"Modern2":[{"#":"CLEAR"},"^You double check your phone to make sure it's 2023. Yup, your feed is a hot dumpster fire. But you just went on an interdimensional joyride and got away with it, so by that measure, 2023 is pretty cool.","\n","^<b>THE END</b>","\n",{"->":"PlayAgain"},{"#f":1}],"Eighties":[[{"#":"CLEAR"},"^You awaken to find the time machine stuck in a ditch next to the mad scientist's house. The dashboard clock says 1987. Huh.","\n","^The mad scientist hurries out of her house with long red hair and a Bon Jovi 1987 world tour shirt. She takes off her Walkman headphones and shouts, \"Yo, wastoid! What're you doing in my unpaved driveway in the late 1980s?\"","\n",["ev",{"^->":"Eighties.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Try to drive away!",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Eighties.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"Eighties2"},{"#f":5}]}],{"#f":1}],"Eighties2":[{"#":"CLEAR"},"ev",{"VAR?":"TireFix"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ Luckily, your tires are full of air! You reverse gear and drive out of her ditch and into the night. But what the hell are you going to do in the 1980s? Invent Google? Sure, you could invent a Google or two. You've got all the time in the world.",{"->":".^.^.^.7"},null]}],"nop","ev",{"VAR?":"TireFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["^ You can't get out of this ditch with your airless tires. So you exit the vehicle and run off into the night. By leaving the car here, did you give her the idea for the time machine? Are you, in a sense, the inventor of the time machine?! Solid maybe?!?!",{"->":".^.^.^.14"},null]}],"nop","\n","^<b>THE END</b>","\n",{"->":"PlayAgain"},{"#f":1}],"Thirties":[[{"#":"CLEAR"},"^You awaken to find the time machine crashed into a water fountain on the front lawn of a mansion. The dashboard clock says 1922. Huh. A group of fancy party guests empty out onto the lawn to see what's the matter. They wear tuxes, tubular dresses, top hats, rich lady feathers, you get it.","\n","^A young flapper knocks on the window of your car with her long-gloved fist.","\n",["ev",{"^->":"Thirties.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Roll down your windshield.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Thirties.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"Thirties2"},{"#f":5}]}],{"#f":1}],"Thirties2":[{"#":"CLEAR"},"^\"Someone's had a bit too much giggle water tonight,\" the flapper dryly concludes.","\n","ev",{"VAR?":"WarmerFix"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ Luckily, as the night air and the freezing cold water from the fountain hits your face, you don't get chilly. That's because your seat warmers are working perfectly. Actually, your butt feels warmer than it's ever felt before. You enjoy the here and now.",{"->":".^.^.^.9"},null]}],"nop","ev",{"VAR?":"WarmerFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["^ The cold night air and the freezing cold fountain water hits your face. You start shivering. The flapper finds it funny and imitates the movement. Soon, the whole party's doing it! The move becomes a 1920s dance sensation called \"The Shiver.\"",{"->":".^.^.^.16"},null]}],"nop","\n","^<b>THE END</b>","\n",{"->":"PlayAgain"},{"#f":1}],"Medieval":[[{"#":"CLEAR"},"^You awaken to find the time machine crashed into the side of a stone castle on a hill. The dashboard clock says 1215. Huh. A knight in metal armor on horseback gallops to your vehicle.","\n",["ev",{"^->":"Medieval.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Ho boy.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Medieval.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"->":"Medieval2"},{"#f":5}]}],{"#f":1}],"Medieval2":[{"#":"CLEAR"},"^\"Yield at once,\" the scared knight demands, shaking his sword at your windshield. \"Yield, I say!\"","\n","ev",{"VAR?":"WiperFix"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ Without warning, the wipers go off, spraying liquid on the windshield. The knight screams, \"WITCHCRAFT!\" Then he gallops away, like a dork. You get out of the car and look for a village. Someone's gotta be serving up hot sheep's feet, right?",{"->":".^.^.^.9"},null]}],"nop","ev",{"VAR?":"WiperFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["^ You put your hands up and say, \"I'm yielding!\" The knight pokes at the windshield with his sharp sword, causing it to crack a bit. You have a feeling this is going to be a loooooong day.",{"->":".^.^.^.16"},null]}],"nop","\n","^<b>THE END</b>","\n",{"->":"PlayAgain"},{"#f":1}],"Dinosaurs":[[{"#":"CLEAR"},"^You awaken to find the back half of your time machine is slowly sinking into a tar pit. The dashboard clock says ????. In the distance, an allosaurus is staring at you! Ho boy!","\n","^There's a knock on your window.","\n",["ev",{"^->":"Dinosaurs.0.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Turn to see what's knocking.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"Dinosaurs.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"Dinosaurs2"},{"#f":5}]}],{"#f":1}],"Dinosaurs2":[{"#":"CLEAR"},"^You turn to find... a damn alien! The long green face and bug eyes were solid clues. It looks quizzically at you. ","ev",{"VAR?":"AlienFix"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ Without warning, the interior and exterior of the car start \"spiraling\" again. The alien nods and makes a hand gesture to the heavens. A moment later, your vehicle is being pulled into the air by a tractor beam. You conclude this is AAA for time travelers. Hopefully they don't need a membership card, too!",{"->":".^.^.^.8"},null]}],"nop","ev",{"VAR?":"AlienFix"},0,"==","/ev",[{"->":".^.b","c":true},{"b":["^ You ask for help, but the alien doesn't understand you. It walks away as the allosaurus ambles towards you. Allosaurus wasn't a carnivore, right? And they were also, like, the most helpful dinosaurs?",{"->":".^.^.^.15"},null]}],"nop","\n","^<b>THE END</b>","\n",{"->":"PlayAgain"},{"#f":1}],"PlayAgain":[["^<a href=\"https://www.adventuresnack.com\">Subscribe to the Adventure Snack newsletter</a> to receive hilarious quests in your inbox twice a month.","\n",["ev",{"^->":"PlayAgain.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^Play again?",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"PlayAgain.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":"Restart"},{"#f":5}]}],{"#f":1}],"Restart":[{"#":"RESTART"},"end",{"#f":1}],"global decl":["ev",0,{"VAR=":"ACFix"},0,{"VAR=":"AirbagFix"},0,{"VAR=":"AlienFix"},0,{"VAR=":"DecontamFix"},0,{"VAR=":"EngineFix"},1,{"VAR=":"NukeFix"},0,{"VAR=":"TireFix"},0,{"VAR=":"WarmerFix"},0,{"VAR=":"WiperFix"},0,{"VAR=":"ReadAloud"},"/ev","end",null],"#f":1}],"listDefs":{}};