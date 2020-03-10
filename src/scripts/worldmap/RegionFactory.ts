class RegionFactory {

    static createKanto(): Region {

        const routes: Route[] = [
            RouteFactory.createRoute(1, {
                land: ['Pidgey', 'Rattata'],
            }),

            RouteFactory.createRoute(2, {
                land: ['Caterpie', 'Weedle', 'Rattata', 'Nidoran(F)', 'Nidoran(M)'],
            }, [new RouteRequirement(1)]),

            RouteFactory.createRoute(3, {
                land: ['Pidgey', 'Rattata', 'Spearow', 'Sandshrew', 'Jigglypuff', 'Mankey'],
            }, [new RouteRequirement(2), new BadgeRequirement(BadgeCase.Badge.Boulder)]),

            RouteFactory.createRoute(4, {
                land: ['Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Mankey'],
                water: ['Poliwag', 'Goldeen', 'Psyduck', 'Krabby', 'Seaking'],
            }, [new RouteRequirement(3), new DungeonRequirement(DungeonName['Mt._Moon'])]),

            RouteFactory.createRoute(5, {
                land: ['Pidgey', 'Pidgeotto', 'Rattata', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout'],
            }, [new RouteRequirement(4), new BadgeRequirement(BadgeCase.Badge.Cascade)]),

            RouteFactory.createRoute(6, {
                land: ['Pidgey', 'Pidgeotto', 'Rattata', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Abra', 'Bellsprout'],
                water: ['Poliwag', 'Goldeen', 'Shellder', 'Krabby'],
            }, [new RouteRequirement(5)]),

            RouteFactory.createRoute(7, {
                land: ['Pidgey', 'Pidgeotto', 'Rattata', 'Vulpix', 'Jigglypuff', 'Oddish', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Bellsprout'],
            }, [new RouteRequirement(5), new RouteRequirement(10), new BadgeRequirement(BadgeCase.Badge.Thunder)]),

            RouteFactory.createRoute(8, {
                land: ['Pidgey', 'Pidgeotto', 'Rattata', 'Ekans', 'Sandshrew', 'Vulpix', 'Jigglypuff', 'Meowth', 'Mankey', 'Growlithe', 'Abra', 'Kadabra'],
            }, [new RouteRequirement(5), new RouteRequirement(6), new RouteRequirement(7), , new BadgeRequirement(BadgeCase.Badge.Thunder)]),

            RouteFactory.createRoute(9, {
                land: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Sandshrew', 'Nidoran(F)', 'Nidoran(M)', 'Nidorina', 'Nidorino'],
            }, [new RouteRequirement(4), new BadgeRequirement(BadgeCase.Badge.Cascade)]),

            RouteFactory.createRoute(10, {
                land: ['Rattata', 'Raticate', 'Spearow', 'Ekans', 'Sandshrew', 'Nidoran(F)', 'Nidoran(M)', 'Machop', 'Magnemite', 'Voltorb'],
                water: ['Poliwag', 'Goldeen', 'Poliwhirl', 'Slowpoke', 'Krabby', 'Kingler', 'Horsea'],
            }, [new RouteRequirement(9)]),

            RouteFactory.createRoute(11, {
                land: ['Pidgey', 'Pidgeotto', 'Raticate', 'Rattata', 'Spearow', 'Ekans', 'Sandshrew', 'Drowzee'],
                water: ['Poliwag', 'Goldeen', 'Tentacool', 'Shellder', 'Krabby', 'Horsea'],
            }, [new RouteRequirement(6), new BadgeRequirement(BadgeCase.Badge.Thunder)]),

            RouteFactory.createRoute(12, {
                land: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Farfetch\'d', 'Snorlax'],
                water: ['Slowbro', 'Magikarp', 'Poliwag', 'Goldeen', 'Tentacool', 'Krabby', 'Horsea', 'Seadra'],
            }, [new RouteRequirement(7), new RouteRequirement(10), new RouteRequirement(11), new BadgeRequirement(BadgeCase.Badge.Marsh)]),

            RouteFactory.createRoute(13, {
                land: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Bellsprout', 'Weepinbell', 'Farfetch\'d', 'Ditto'],
                water: ['Slowbro', 'Magikarp', 'Poliwag', 'Goldeen', 'Tentacool', 'Krabby', 'Horsea', 'Seadra'],
            }, [new RouteRequirement(11), new RouteRequirement(12), new BadgeRequirement(BadgeCase.Badge.Marsh)]),

            RouteFactory.createRoute(14, {
                land: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Venomoth', 'Bellsprout', 'Weepinbell', 'Ditto'],
                water: ['Poliwag', 'Goldeen'],
            }, [new RouteRequirement(13)]),

            RouteFactory.createRoute(15, {
                land: ['Pidgey', 'Pidgeotto', 'Oddish', 'Gloom', 'Venonat', 'Venomoth', 'Bellsprout', 'Weepinbell', 'Ditto'],
            }, [new RouteRequirement(14)]),

            RouteFactory.createRoute(16, {
                land: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo', 'Snorlax'],
            }, [new RouteRequirement(8), new BadgeRequirement(BadgeCase.Badge.Marsh)]),

            RouteFactory.createRoute(17, {
                land: ['Raticate', 'Spearow', 'Fearow', 'Ponyta', 'Doduo', 'Dodrio'],
                water: ['Poliwag', 'Goldeen', 'Tentacool', 'Shellder', 'Krabby'],
            }, [new RouteRequirement(16)]),

            RouteFactory.createRoute(18, {
                land: ['Rattata', 'Raticate', 'Spearow', 'Fearow', 'Doduo'],
                water: ['Poliwag', 'Goldeen', 'Tentacool', 'Shellder', 'Krabby'],
            }, [new RouteRequirement(17)]),

            RouteFactory.createRoute(19, {
                water: ['Tentacool', 'Magikarp', 'Poliwag', 'Goldeen', 'Tentacruel', 'Shellder', 'Horsea', 'Staryu'],
            }, [new RouteRequirement(15), new RouteRequirement(18), new BadgeRequirement(BadgeCase.Badge.Soul)], true),

            RouteFactory.createRoute(20, {
                water: ['Tentacool', 'Magikarp', 'Poliwag', 'Goldeen', 'Tentacruel', 'Shellder', 'Horsea', 'Staryu'],
            }, [new RouteRequirement(19), new DungeonRequirement(DungeonName.Seafoam_Islands)], true),

            RouteFactory.createRoute(21, {
                land: ['Pidgey', 'Pidgeotto', 'Rattata', 'Raticate', 'Tangela'],
                water: ['Magikarp', 'Poliwag', 'Goldeen', 'Tentacruel', 'Shellder', 'Horsea', 'Staryu'],
            }, [new RouteRequirement(20), new BadgeRequirement(BadgeCase.Badge.Volcano)], true),

            RouteFactory.createRoute(22, {
                land: ['Rattata', 'Spearow', 'Nidoran(F)', 'Nidoran(M)', 'Mankey'],
                water: ['Poliwag', 'Poliwhirl', 'Goldeen'],
            }, [new RouteRequirement(1), new BadgeRequirement(BadgeCase.Badge.Earth)]),

            RouteFactory.createRoute(23, {
                land: ['Spearow', 'Fearow', 'Ekans', 'Arbok', 'Sandshrew', 'Sandslash', 'Nidorina', 'Nidorino', 'Mankey', 'Primeape', 'Ditto'],
                water: ['Poliwag', 'Goldeen', 'Poliwhirl', 'Slowbro', 'Kingler', 'Seadra', 'Seaking'],
            }, [new RouteRequirement(22)]),

            RouteFactory.createRoute(24, {
                land: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgey', 'Pidgeotto', 'Oddish', 'Venonat', 'Abra', 'Bellsprout'],
                water: ['Poliwag', 'Goldeen', 'Psyduck', 'Krabby', 'Seaking'],
            }, [new RouteRequirement(4), new BadgeRequirement(BadgeCase.Badge.Cascade)]),

            RouteFactory.createRoute(25, {
                land: ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto', 'Oddish', 'Venonat', 'Abra', 'Bellsprout'],
                water: ['Poliwag', 'Goldeen', 'Psyduck', 'Krabby'],
            }, [new RouteRequirement(24)]),
        ];

        const shops: Shop[] = [
            new Shop(ShopName.Pewter_City, ['Pokeball', 'Token_collector', 'xExp', 'Dungeon_ticket']),
            new Shop(ShopName.Cerulean_City, ['Water_stone', 'xAttack', 'Water_egg']),
            new Shop(ShopName.Vermillion_City, ['Thunder_stone', 'xExp', 'Electric_egg']),
            new Shop(ShopName.Celadon_City, ['Eevee', 'Porygon', 'Jynx', 'Mr. Mime', 'Lickitung']),
            new Shop(ShopName.Saffron_City, ['Moon_stone', 'xClick', 'Leaf_stone', 'Fighting_egg']),
            new Shop(ShopName.Fuchsia_City, ['Ultraball', 'Trade_stone', 'xExp', 'Dragon_egg']),
            new Shop(ShopName.Cinnabar_Island, ['Fire_stone', 'Fire_egg', 'SmallRestore', 'Explorer_kit']),
            new Shop(ShopName.Viridian_City, ['xAttack', 'xClick', 'Mystery_egg']),
            new Shop(ShopName.Lavender_Town, ['Greatball', 'Item_magnet', 'Lucky_incense', 'Grass_egg']),

        ];

        const gyms: Gym[] = [
            new Gym(
                GymLeaderName.Brock,
                [
                    new GymPokemon('Geodude', 770, 12),
                    new GymPokemon('Onix', 1554, 14),
                ],
                BadgeCase.Badge.Boulder,
                250,
                [],
                'I took you for granted, and so I lost. As proof of your victory, I confer on you this...the official Pokémon League Boulder Badge.'),

            new Gym(
                GymLeaderName.Misty,
                [
                    new GymPokemon('Staryu', 4000, 18),
                    new GymPokemon('Starmie', 6800, 21),
                ],
                BadgeCase.Badge.Cascade,
                500,
                [new BadgeRequirement(BadgeCase.Badge.Boulder)],
                "Wow! You're too much, all right! You can have the Cascade Badge to show that you beat me."
            ),
            new Gym(
                GymLeaderName['Lt._Surge'],
                [
                    new GymPokemon('Voltorb', 10780, 21),
                    new GymPokemon('Pikachu', 13540, 18),
                    new GymPokemon('Raichu', 15675, 24),
                ],
                BadgeCase.Badge.Thunder,
                1000,
                [new BadgeRequirement(BadgeCase.Badge.Cascade)],
                "Now that's a shocker! You're the real deal, kid! Fine, then, take the Thunder Badge!"
            ),
            new Gym(
                GymLeaderName.Erika,
                [
                    new GymPokemon('Victreebel', 28810, 29),
                    new GymPokemon('Tangela', 30340, 24),
                    new GymPokemon('Vileplume', 36400, 29),
                ],
                BadgeCase.Badge.Rainbow,
                1500,
                [new BadgeRequirement(BadgeCase.Badge.Thunder)],
                'Oh! I concede defeat. You are remarkably strong. I must confer on you the Rainbow Badge.'
            ),
            new Gym(
                GymLeaderName.Sabrina,
                [
                    new GymPokemon('Kadabra', 23040, 38),
                    new GymPokemon('Mr. Mime', 25600, 37),
                    new GymPokemon('Venomoth', 28400, 38),
                    new GymPokemon('Alakazam', 35380, 43),
                ],
                BadgeCase.Badge.Marsh,
                2500,
                [new BadgeRequirement(BadgeCase.Badge.Rainbow)],
                "This loss shocks me! But a loss is a loss. I admit I didn't work hard enough to win. You earned the Marsh Badge."
            ),
            new Gym(
                GymLeaderName.Koga,
                [
                    new GymPokemon('Koffing', 30780, 38),
                    new GymPokemon('Muk', 32460, 37),
                    new GymPokemon('Koffing', 36540, 38),
                    new GymPokemon('Weezing', 37430, 43),
                ],
                BadgeCase.Badge.Soul,
                3500,
                [new BadgeRequirement(BadgeCase.Badge.Marsh)],
                'Humph! You have proven your worth! Here! Take the Soul Badge!'
            ),
            new Gym(
                GymLeaderName.Blaine,
                [
                    new GymPokemon('Growlithe', 37430, 42),
                    new GymPokemon('Ponyta', 42340, 40),
                    new GymPokemon('Rapidash', 45230, 42),
                    new GymPokemon('Arcanine', 50290, 47),
                ],
                BadgeCase.Badge.Volcano,
                5000,
                [new BadgeRequirement(BadgeCase.Badge.Soul)],
                'I have burned down to nothing! Not even ashes remain! You have earned the Volcano Badge.'
            ),
            new Gym(
                GymLeaderName.Giovanni,
                [
                    new GymPokemon('Rhyhorn', 45230, 45),
                    new GymPokemon('Dugtrio', 47530, 42),
                    new GymPokemon('Nidoqueen', 48740, 44),
                    new GymPokemon('Nidoking', 48350, 45),
                    new GymPokemon('Rhydon', 55000, 50),
                ],
                BadgeCase.Badge.Earth,
                6000,
                [new BadgeRequirement(BadgeCase.Badge.Volcano)],
                'Ha! That was a truly intense fight. You have won! As proof, here is the Earth Badge!'
            ),

            new Gym(
                GymLeaderName.Lorelei,
                [
                    new GymPokemon('Dewgong', 45330, 52),
                    new GymPokemon('Cloyster', 48300, 51),
                    new GymPokemon('Slowbro', 52000, 52),
                    new GymPokemon('Jynx', 57000, 54),
                    new GymPokemon('Lapras', 60250, 54),
                ],
                BadgeCase.Badge.Elite_Lorelei,
                7500,
                [new BadgeRequirement(BadgeCase.Badge.Earth)],
                "...Things shouldn't be this way!"
            ),
            new Gym(
                GymLeaderName.Bruno,
                [
                    new GymPokemon('Onix', 45330, 51),
                    new GymPokemon('Hitmonchan', 48300, 53),
                    new GymPokemon('Hitmonlee', 52000, 53),
                    new GymPokemon('Onix', 57000, 54),
                    new GymPokemon('Machamp', 60250, 56),
                ],
                BadgeCase.Badge.Elite_Bruno,
                7500,
                [new BadgeRequirement(BadgeCase.Badge.Elite_Lorelei)],
                'Why? How could I lose?'
            ),
            new Gym(
                GymLeaderName.Agatha,
                [
                    new GymPokemon('Gengar', 45330, 54),
                    new GymPokemon('Golbat', 48300, 54),
                    new GymPokemon('Haunter', 52000, 53),
                    new GymPokemon('Arbok', 57000, 56),
                    new GymPokemon('Gengar', 60250, 58),
                ],
                BadgeCase.Badge.Elite_Agatha,
                7500,
                [new BadgeRequirement(BadgeCase.Badge.Elite_Bruno)],
                "Oh, my! You're something special, child!"
            ),
            new Gym(
                GymLeaderName.Lance,
                [
                    new GymPokemon('Gyarados', 48300, 56),
                    new GymPokemon('Dragonair', 52000, 54),
                    new GymPokemon('Dragonair', 57000, 54),
                    new GymPokemon('Aerodactyl', 60250, 58),
                    new GymPokemon('Dragonite', 66000, 60),
                ],
                BadgeCase.Badge.Elite_Lance,
                7500,
                [new BadgeRequirement(BadgeCase.Badge.Elite_Agatha)],
                'That’s it! I hate to admit it, but you are a Pokémon master!'
            ),
            new Champion(
                GymLeaderName.Blue,
                [],
                BadgeCase.Badge.Elite_KantoChampion,
                10000,
                [new BadgeRequirement(BadgeCase.Badge.Elite_Lance)],
                "Why? Why did I lose? I never made any mistakes raising my Pokémon… Darn it! You're the new Pokémon League Champion! Although I don't like to admit it…"
            ),
        ];

        const dungeons: Dungeon[] = [
            new Dungeon(DungeonName.Viridian_Forest,
                ['Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Pidgey', 'Pidgeotto'],
                [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Lucky_incense],
                102,
                [new DungeonBossPokemon('Pikachu', 510, 7)],
                50, [], 1, 5),
            new Dungeon(DungeonName.Digletts_Cave,
                ['Diglett'],
                [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Lucky_incense],
                1208,
                [new DungeonBossPokemon('Dugtrio', 6040, 31)],
                95, [new BadgeRequirement(BadgeCase.Badge.Boulder)], 2, 22),
            new Dungeon(DungeonName['Mt._Moon'],
                ['Sandshrew', 'Clefairy', 'Zubat', 'Paras', 'Geodude', 'Pidgeotto'],
                [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Token_collector],
                834,
                [new DungeonBossPokemon('Kabuto', 4170, 12), new DungeonBossPokemon('Omanyte', 4170, 12)],
                75, [new BadgeRequirement(BadgeCase.Badge.Boulder)], 4, 10),
            new Dungeon(DungeonName.Rock_Tunnel,
                ['Zubat', 'Geodude', 'Machop'],
                [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.Item_magnet],
                4117,
                [new DungeonBossPokemon('Onix', 20585, 17)],
                500, [new BadgeRequirement(BadgeCase.Badge.Cascade)], 5, 15),
            new Dungeon(DungeonName.Power_Plant,
                ['Pikachu', 'Raichu', 'Magnemite', 'Magneton', 'Grimer', 'Muk', 'Electrode'],
                [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Lucky_incense],
                13507,
                [new DungeonBossPokemon('Electabuzz', 67535, 35), new DungeonBossPokemon('Zapdos', 101302, 50)],
                1000, [new BadgeRequirement(BadgeCase.Badge.Cascade)], 8, 25),
            new Dungeon(DungeonName.Pokemon_Tower,
                ['Gastly', 'Haunter', 'Cubone'],
                [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
                7523,
                [new DungeonBossPokemon('Marowak', 37615, 30)],
                750, [new BadgeRequirement(BadgeCase.Badge.Cascade)], 10, 20),
            new Dungeon(DungeonName.Seafoam_Islands,
                ['Zubat', 'Golbat', 'Psyduck', 'Golduck', 'Slowpoke', 'Slowbro', 'Shellder', 'Krabby', 'Horsea', 'Staryu'],
                [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xExp],
                17226,
                [new DungeonBossPokemon('Seel', 86130, 35), new DungeonBossPokemon('Articuno', 129195, 50)],
                1250, [new BadgeRequirement(BadgeCase.Badge.Soul)], 15, 30),
            new Dungeon(DungeonName.Pokemon_Mansion,
                ['Growlithe', 'Vulpix', 'Grimer', 'Muk', 'Koffing', 'Weezing'],
                [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Token_collector],
                17760,
                [new DungeonBossPokemon('Magmar', 88800, 40)],
                1500, [new BadgeRequirement(BadgeCase.Badge.Soul)], 16, 35),
            new Dungeon(DungeonName.Victory_Road,
                ['Zubat', 'Golbat', 'Machop', 'Geodude', 'Graveler', 'Onix', 'Marowak', 'Venomoth'],
                [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Item_magnet],
                24595,
                [new DungeonBossPokemon('Machoke', 122975, 42), new DungeonBossPokemon('Moltres', 184462, 50)],
                2000, [new BadgeRequirement(BadgeCase.Badge.Earth)], 20, 40),
            new Dungeon(DungeonName.Cerulean_Cave,
                ['Arbok', 'Raichu', 'Sandslash', 'Golbat', 'Parasect', 'Venomoth', 'Kadabra', 'Magneton', 'Dodrio', 'Hypno', 'Ditto', 'Wigglytuff', 'Electrode', 'Marowak', 'Chansey'],
                [GameConstants.BattleItemType.xAttack, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.xClick, GameConstants.BattleItemType.Lucky_incense],
                28735,
                [new DungeonBossPokemon('Rhydon', 143675, 60), new DungeonBossPokemon('Mewtwo', 215512, 70)],
                2500, [new BadgeRequirement(BadgeCase.Badge.Elite_KantoChampion)], 20, 55
            ),

        ];

        return new Region(RegionName.kanto, 151, routes, gyms, shops, dungeons);
    }

    static createJohto(): Region {

        const routes: Route[] = [
            RouteFactory.createRoute(26, {
                land: ['Raticate', 'Arbok', 'Sandslash', 'Ponyta', 'Doduo', 'Dodrio', 'Quagsire'],
                water: ['Tentacool', 'Tentacruel', 'Magikarp', 'Shellder', 'Chinchou', 'Lanturn'],
                headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
            }, [new RouteRequirement(46)]),
            RouteFactory.createRoute(27, {
                land: ['Raticate', 'Arbok', 'Sandslash', 'Ponyta', 'Doduo', 'Dodrio', 'Quagsire'],
                water: ['Tentacool', 'Tentacruel', 'Magikarp', 'Shellder', 'Chinchou', 'Lanturn'],
                headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
            }, [new RouteRequirement(26)]),
            RouteFactory.createRoute(28, {
                land: ['Ponyta', 'Tangela', 'Donphan', 'Ursaring', 'Rapidash', 'Doduo', 'Dodrio', 'Sneasel', 'Murkrow'],
                water: ['Poliwag', 'Poliwhirl', 'Magikarp'],
                headbutt: ['Natu', 'Aipom', 'Heracross'],
            }, [new BadgeRequirement(BadgeCase.Badge.Elite_JohtoChampion)]),
            RouteFactory.createRoute(29, {
                land: ['Pidgey', 'Rattata', 'Sentret', 'Hoothoot'],
                water: [],
                headbutt: ['Exeggcute', 'Ledyba', 'Spinarak', 'Hoothoot', 'Pineco'],
            }),
            RouteFactory.createRoute(30, {
                land: ['Pidgey', 'Rattata', 'Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Zubat', 'Hoothoot', 'Ledyba', 'Spinarak'],
                water: ['Poliwag', 'Poliwhirl', 'Magikarp'],
                headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
            }, [new RouteRequirement(29)]),
            RouteFactory.createRoute(31, {
                land: ['Pidgey', 'Rattata', 'Caterpie', 'Metapod', 'Weedle', 'Kakuna', 'Zubat', 'Poliwag', 'Hoothoot', 'Ledyba', 'Spinarak', 'Bellsprout'],
                water: ['Poliwag', 'Poliwhirl', 'Magikarp'],
                headbutt: ['Spearow', 'Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Aipom', 'Pineco', 'Heracross'],
            }, [new RouteRequirement(30)]),
            RouteFactory.createRoute(32, {
                land: ['Rattata', 'Ekans', 'Zubat', 'Bellsprout', 'Mareep', 'Hoppip', 'Wooper'],
                water: ['Tentacool', 'Tentacruel', 'Quagsire', 'Magikarp', 'Qwilfish'],
                headbutt: ['Exeggcute', 'Hoothoot', 'Pineco'],
            }, [new BadgeRequirement(BadgeCase.Badge.Zephyr)]),
            RouteFactory.createRoute(33, {
                land: ['Spearow', 'Rattata', 'Ekans', 'Zubat', 'Hoppip'],
                water: [],
                headbutt: ['Spearow', 'Aipom', 'Heracross'],
            }, [new RouteRequirement(32), new DungeonRequirement(DungeonName.Union_Cave)]]),
            RouteFactory.createRoute(34, {
                land: ['Rattata', 'Abra', 'Drowzee', 'Ditto'],
                water: ['Tentacool', 'Tentacruel', 'Krabby', 'Magikarp', 'Staryu', 'Corsola', 'Kingler'],
                headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
            }, [new BadgeRequirement(BadgeCase.Badge.Hive), new DungeonRequirement(DungeonName.Ilex_Forest)]]),
            RouteFactory.createRoute(35, {
                land: ['Pidgey', 'Nidoran(F)', 'Nidoran(M)', 'Abra', 'Drowzee', 'Ditto', 'Hoothoot', 'Yanma'],
                water: ['Psyduck', 'Golduck', 'Poliwag', 'Magikarp'],
                headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
            }, [new BadgeRequirement(BadgeCase.Badge.Plain)]),
            RouteFactory.createRoute(36, {
                land: ['Pidgey', 'Nidoran(M)', 'Nidoran(F)', 'Vulpix', 'Growlithe', 'Hoothoot', 'Stantler', 'Sudowoodo'],
                water: [],
                headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
            }, [new RouteRequirement(35)]),
            RouteFactory.createRoute(37, {
                land: ['Pidgey', 'Pidgeotto', 'Vulpix', 'Growlithe', 'Hoothoot', 'Ledyba', 'Spinarak', 'Stantler'],
                water: [],
                headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
            }, [new RouteRequirement(36)]),
            RouteFactory.createRoute(38, {
                land: ['Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetch\'d', 'Tauros', 'Snubbull', 'Miltank'],
                water: [],
                headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
            }, [new BadgeRequirement(BadgeCase.Badge.Fog)]),
            RouteFactory.createRoute(39, {
                land: ['Rattata', 'Raticate', 'Meowth', 'Magnemite', 'Farfetch\'d', 'Tauros', 'Miltank'],
                water: [],
                headbutt: ['Exeggcute', 'Hoothoot', 'Ledyba', 'Spinarak', 'Pineco'],
            }, [new RouteRequirement(38)]),
            RouteFactory.createRoute(40, {
                land: [],
                water: ['Tentacool', 'Tentacruel', 'Krabby', 'Magikarp', 'Staryu', 'Corsola', 'Kingler'],
                headbutt: [],
            }, [new RouteRequirement(39)], true),
            RouteFactory.createRoute(41, {
                land: [],
                water: ['Tentacool', 'Tentacruel', 'Mantine', 'Magikarp', 'Chinchou', 'Shellder'],
                headbutt: [],
            }, [new RouteRequirement(40)], true),
            RouteFactory.createRoute(42, {
                land: ['Spearow', 'Zubat', 'Mankey', 'Mareep', 'Flaaffy'],
                water: ['Goldeen', 'Seaking', 'Magikarp'],
                headbutt: ['Spearow', 'Aipom', 'Heracross'],
            }, [new BadgeRequirement(BadgeCase.Badge.Mineral)]),
            RouteFactory.createRoute(43, {
                land: ['Pidgeotto', 'Venonat', 'Noctowl', 'Mareep', 'Flaaffy', 'Girafarig'],
                water: ['Magikarp', 'Poliwag'],
                headbutt: ['Venonat', 'Exeggcute', 'Hoothoot', 'Pineco'],
            }, [new BadgeRequirement(BadgeCase.Badge.Glacier)]),
            RouteFactory.createRoute(44, {
                land: ['Bellsprout', 'Weepinbell', 'Lickitung', 'Tangela'],
                water: ['Poliwag', 'Poliwhirl', 'Magikarp', 'Remoraid'],
                headbutt: ['Spearow', 'Aipom', 'Heracross'],
            }, [new BadgeRequirement(BadgeCase.Badge.Glacier)]),
            RouteFactory.createRoute(45, {
                land: ['Geodude', 'Graveler', 'Gligar', 'Teddiursa', 'Skarmory', 'Phanpy'],
                water: ['Magikarp', 'Poliwag'],
                headbutt: ['Spearow', 'Aipom', 'Heracross'],
            }, [new BadgeRequirement(BadgeCase.Badge.Rising)]),
            RouteFactory.createRoute(46, {
                land: ['Spearow', 'Rattata', 'Geodude'],
                water: [],
                headbutt: ['Spearow', 'Aipom', 'Heracross'],
            }, [new RouteRequirement(45)]),
        ];

        const shops: Shop[] = [
        ];

        const gyms: Gym[] = [
        ];

        const dungeons: Dungeon[] = [
        ];

        return new Region(RegionName.johto, 100, routes, gyms, shops, dungeons);
    }

    static createHoenn(): Region {

        const routes: Route[] = [
        ];

        const shops: Shop[] = [
        ];

        const gyms: Gym[] = [
        ];

        const dungeons: Dungeon[] = [
        ];

        return new Region(RegionName.hoenn, 135, routes, gyms, shops, dungeons);
    }
}
