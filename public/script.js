if (typeof window.gameInitialized === "undefined") {
    window.gameInitialized = true;

    const usuarioAtual = localStorage.getItem("usuario");
    const pointsElement = document.getElementById('points');
    const canvas = document.getElementById('game-canvas-id');
    const ctx = canvas.getContext('2d');



    const trackImges = [
        'track1.png',
        'track2.png',
        'track3.png',
    ]

    const carImages = [
        'carro.png',
        'carro2.png',
        'carro3.png'
    ];

    const path0 = [
        { x: 0.54, y: 0.87 },
        { x: 0.54, y: 0.87 },  
        { x: 0.013, y: 0.87 },  
        { x: 0.013, y: -0.025 }, 
        { x: 0.955, y: -0.025 },  
        { x: 0.955, y: 0.87 },   
    ];
    const path1 = [
        { x: 0.54, y: 0.87 },  
        { x: 0.015, y: 0.87 }, 
        { x: 0.015, y: -0.025 },  
        { x: 0.329, y: -0.025 },   
        { x: 0.329, y: 0.529 },  
        { x: 0.635, y: 0.529 },   
        { x: 0.635, y: -0.025 },    
        { x: 0.955, y: -0.025 },  
        { x: 0.955, y: 0.87 }, 
    ];
    
    const path2 = [
        { x: 0.54, y: 0.87 },  
        { x: 0.013, y: 0.87 }, 
        { x: 0.013, y: -0.025 },   
        { x: 0.15, y: -0.025 },   
        { x: 0.15, y: 0.53 },    
        { x: 0.35, y: 0.53 },    
        { x: 0.35, y: -0.025 },    
        { x: 0.55, y: -0.025 },    
        { x: 0.55, y: 0.53 },   
        { x: 0.755, y: 0.53 },   
        { x: 0.755, y: -0.025 },   
        { x: 0.955, y: -0.025 },    
        { x: 0.955, y: 0.87 },  
    ];
    

    const paths = [
        path0,
        path1,
        path2
    ]
    
    let currentPath = path0
    let currentTrackImageIndex = 0;
    let currentCarImageIndex = 0;
    let car = {
        x: canvas.width *currentPath[0].x,
        y: canvas.height*currentPath[0].y,
        width: 50,
        height: 100,
        speed: 10,
        points: 1000000000, 
        laps: 0,
        battery: 1.5,
        efficiency: 1,
        maxbattery: 2.5,
        powerOn:false,
        power:1.1,
        rechargingPower:false,
        direction: 3 
    };
    let up_price = {
        motorPrice: 10,
        efficiencyPrice: 20,
        batteryPrice: 20,
        rechargePrice: 200,
        timeOffPrice: 200,
        trackPrice: 1000,
        powerUpgradePrice:5000,
        powerReUpgradePrice:4000,
        powerTeUpgradePrice:3000
    };

    window.up = {
        battery: 0,
        efficiency: 0,
        motor: 0,
        powerUpgrade: 0,
        recharge: 0,
        timeOff: 0,
        track: 0,
        powerReUpgrade: 0,
        powerTeUpgrade: 0
    };

    let track = {
        track:1,
        timeOff:24

    }

    if (typeof window.lastSavedPoints === "undefined") {
        window.lastSavedPoints = 0;  
    }

    if (typeof window.lastSavedUpgrades === "undefined") {
        window.lastSavedUpgrades = JSON.stringify({
            battery: 0,
            efficiency: 0,
            motor: 0,
            power: 0,
            recharge: 0,
            timeOff: 0,
            track: 0,
        }); 
    }

    let gameRunning = false;
    let pause = false;
    let recharge = 5000;
    let powerRecharge = 25000
    let powerTime = 5000
    let currentTargetIndex = 1;
    const trackImg = new Image();
    trackImg.src = trackImges[currentTrackImageIndex]
    function drawCar() {
        const carImg = new Image();
        carImg.src = carImages[currentCarImageIndex];

        const carWidth = canvas.width * 0.035;  
        const carHeight = canvas.height * 0.15;  

        ctx.save();
        
        ctx.translate(car.x + carWidth / 2, car.y + carHeight / 2);
        ctx.rotate(car.direction * Math.PI / 2);
        ctx.drawImage(carImg, -carWidth / 2, -carHeight / 2, carWidth, carHeight);
        ctx.restore();
    }

    function formatNumber(value) {
        if (value >= 1e9) {
            return (value / 1e9).toFixed(1) + 'B'; 
        } else if (value >= 1e6) {
            return (value / 1e6).toFixed(1) + 'M'; 
        } else if (value >= 1e3) {
            return (value / 1e3).toFixed(1) + 'K'; 
        } else {
            return value.toFixed(2); 
        }
    }
    
    function loadUserData() {
        return fetch('/dados.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erro na requisição: ' + response.status);
                }
                return response.json();
            })
            .then((data) => {
                const usuario = data.usuarios.find(user => user.usuario === usuarioAtual);
                
                if (usuario.upgrades) {
                    car.points = usuario.points || 0;


                    const lastLogoutTime = new Date(localStorage.getItem('lastLogoutTime'));
                    const currentTime = new Date();
                    const timeElapsed = (currentTime - lastLogoutTime) / 1000;
                    const offlinePoints = calculateOfflinePoints(timeElapsed);
                    console.log(`Tempo offline: ${timeElapsed} segundos.`);
                    console.log(`Pontos ganhos enquanto estava offline: ${formatNumber(offlinePoints)}`);
                    points= document.getElementById("points")
                    points.innerHTML = formatNumber(car.points);


                    try{
                        const upgradeKeys = Object.keys(usuario.upgrades); 
                        upgradeKeys.forEach(key => {
                            window.up[key] = usuario.upgrades[key] || 0;
                        });
                        
                        upgradeKeys.forEach(key => {
                            
                            const priceKey = `${key}Price`;
                            if (up_price[priceKey]) {
                                up_price[priceKey] *= Math.pow(1.20,window.up[key] );
                                console.log("foi chamado",up_price[priceKey])
                                const element = document.getElementById(`${key}`);
                                if (element) {
                                    element.innerText = formatNumber(up_price[priceKey]);
                                } else {
                                    console.warn(`Elemento com o ID ${key} não encontrado`);
                                }
                            }
                        });
                        
                    upgradeKeys.forEach(upgradeKey => {
                        for (let i = 0; i < window.up[upgradeKey]; i++) {
                            upgradeEffect(upgradeKey); 
                        }
                    });} catch(error){
                        console.error(error);
                    }
    
    
                    pointsElement.innerText = formatNumber(car.points); 
    
                    console.log('Dados carregados:', usuario);
                } else {
                    console.error('Usuário não encontrado, iniciando com valores padrão.');
                }
            })
            .catch((error) => {
                console.error('Erro ao carregar dados do usuário:', error);
                
            });
    }
    function saveUserData() {
        fetch(`http://localhost:5000/usuarios?usuario=${usuarioAtual}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const usuario = data[0];  
                    usuario.points = car.points;
                    usuario.upgrades = window.up;
                    usuario.logoutTime = new Date().toISOString();
                    localStorage.setItem('lastLogoutTime', usuario.logoutTime);


                    fetch(`http://localhost:5000/usuarios/${usuario.id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(usuario)
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Erro ao salvar dados do usuário');
                        }
                        return response.json();
                    })
                    .catch(error => {
                        console.error('Erro ao salvar dados do usuário:', error);
                    });

    
                } else {
                    const newUser = {
                        usuario: usuarioAtual,
                        points: car.points,
                        logoutTime:logoutTime,
                        upgrades: window.up
                    };

                    fetch('http://localhost:5000/usuarios', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(newUser)
                    })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Erro ao criar novo usuário');
                        }
                        return response.json();
                    })
                    .then(createdUser => {
                        console.log('Novo usuário criado com sucesso:', createdUser);
                    })
                    .catch(error => {
                        console.error('Erro ao criar novo usuário:', error);
                    });
                }
            })
            .catch(error => {
                console.error('Erro ao buscar dados do usuário:', error);
            });
            
        }
        
    function pos() {
        const target = {
            x: currentPath[currentTargetIndex].x * canvas.width,
            y: currentPath[currentTargetIndex].y * canvas.height,
        };

        const dx = (target.x - car.x)*0.54;
        const dy = (target.y - car.y)*0.87;
        const distance = Math.sqrt(dx * dx + dy * dy);

        return [target, dx, dy, distance];
    }

    function calculateOfflinePoints(timeElapsed) {
        const pointsPerLap = {
            1: 1,
            2: 2,
            3: 4
        };
    
        const batteryConsumptionPerLap = 1 / car.efficiency;
        const lapsPerCharge = car.maxbattery / batteryConsumptionPerLap;

        let [target, dx, dy, distance] = pos();
        const timePerLap = (distance/10)  / car.speed; 
        const timeToDeplete = lapsPerCharge * timePerLap;
        const totalCycleTime = timeToDeplete + (recharge / 1000);
        const pointsPerCycle = lapsPerCharge * pointsPerLap[track.track];
        const pointsPerSecond = pointsPerCycle / totalCycleTime;
        const pointsEarnedOffline = pointsPerSecond * timeElapsed;
        return pointsEarnedOffline;
    }
    
    function adjustCanvasResolution() {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
    
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
    
        context.scale(dpr, dpr);
    }

    function drawTrack() {
        ctx.drawImage(trackImg, 0, 0, canvas.width, canvas.height);
    }

    function getZoomFactor() {
        return canvas.width / canvas.width;
    }
    function move() {
        let [target, dx, dy, distance] = pos();
        const normalizedSpeed = car.speed * (canvas.width / 1250);
    
        if (distance < normalizedSpeed) {
            car.x = target.x;
            car.y = target.y;
            currentTargetIndex++;
            if (currentTargetIndex >= currentPath.length) {
                currentTargetIndex = 1;
            }
    
            const nextTarget = {
                x: currentPath[currentTargetIndex].x * canvas.width,
                y: currentPath[currentTargetIndex].y * canvas.height,
            };
            if (nextTarget.y < car.y) {
                car.direction = 0;
            } else if (nextTarget.x > car.x) {
                car.direction = 1;
            } else if (nextTarget.y > car.y) {
                car.direction = 2; 
            } else if (nextTarget.x < car.x) {
                car.direction = 3; 
            }
        } else {
            car.x += (dx / distance) * normalizedSpeed;
            car.y += (dy / distance) * normalizedSpeed;
        }
    
        const detectionRadius = car.speed; 
        if (Math.abs(car.x - canvas.width * 0.54) < detectionRadius && 
            Math.abs(car.y - canvas.height * 0.87) < detectionRadius) {
            if (track.track == 1)    
                car.points += 0.5;
                car.battery -= 0.5;
                pointsElement.innerText = formatNumber(car.points);
                if (car.battery <= 0) {
                    pitStop();
                }
            if (track.track == 2) {
                car.points += 1;
                car.battery -= 0.5;
                pointsElement.innerText = formatNumber(car.points);
                if (car.battery <= 0) {
                    pitStop();
                }
            }
            if (track.track == 3) {
                car.points += 2;
                car.battery -= 0.5;
                pointsElement.innerText = formatNumber(car.points);
                if (car.battery <= 0) {
                    pitStop();
                }
            }    
        }
    }

    function pitStop() {
        pause = true;
        setTimeout(() => {
            car.battery = car.maxbattery * car.efficiency;
            pause = false;
        }, recharge);
    }
    function turbo() {
        if (!car.powerOn && !car.rechargingPower) { 
            car.powerOn = true;
            car.rechargingPower = true
            console.log(car.speed)
            const originalSpeed = car.speed;
            car.speed = car.speed * car.power;
            setTimeout(() => {
                car.speed = originalSpeed;
                car.powerOn = false; 
                console.log("Turbo desativado. Velocidade restaurada:", car.speed);

                setTimeout(() => {
                    car.rechargingPower = false; 
                    console.log("Turbo recarregado e pronto para uso.");
                }, powerRecharge); 
            }, powerTime);
        }
    }

    function upgrade(stat, priceKey) {
        const price = up_price[priceKey];

        if (car.points >= price) {
            car.points -= price;
            window.up[stat] += 1;
            up_price[priceKey] *= 1.20; 
            document.getElementById(stat).innerText = formatNumber(up_price[priceKey]);
            document.getElementById('points').innerText = formatNumber(car.points);
            
            upgradeEffect(stat);
            saveUserData();
        }
    }

    function upgradeEffect(upgradeKey) {
        switch (upgradeKey) {
            case 'motor':
                car.speed += 4;
                break;
            case 'battery':
                car.battery += 1;
                car.maxbattery = car.battery;
                break;
            case 'efficiency':
                car.efficiency *= Math.pow(1.2, window.up.efficiency);
                break;
            case 'recharge':
                recharge *= 0.95;
                break;
            case 'track':
                track.track += 1;
                up_price.trackPrice *= 1.6667;
                document.getElementById("track").innerText = formatNumber(up_price.trackPrice);
                break;
            case 'timeOff':
                track.timeOff += 1;
                break;
            case 'powerUpgrade':
                car.power *= 1.1;
                break;
            case 'powerTeUpgrade':
                powerTime *= 1.1;
                break;
            case 'powerReUpgrade':
                powerRecharge *= 0.975;
                break;
            default:
                console.log(`Upgrade não reconhecido: ${upgradeKey}`);
        }
    }

    function changeSkin() {
        currentCarImageIndex = (currentCarImageIndex + 1) % carImages.length;
    }
    function changeTrack() {
        currentTrackImageIndex = (currentTrackImageIndex + 1) % trackImges.length;
        trackImg.src = trackImges[currentTrackImageIndex];
        currentPath = paths[currentTrackImageIndex]
    
        currentTargetIndex = 1; 
        car.x = canvas.width * 0.54; 
        car.y = canvas.height * 0.87;
        car.direction = 3;
        car.battery = car.maxbattery;

        car.laps = 0; 
        pointsElement.innerText = formatNumber(car.points);

    }
    function power() {
        turbo()
    }
    function money(){
        car.points +=10000000
    }
    function stat0(){
        window.up = window.up*0
        car.points =0
        track.track = 0
    }
    
    let saveTimer;
    let saveInterval = 100; 
    function updateGame() {
        console.log(up_price.powerReUpgradePrice)
        if (!pause) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawTrack();
            move();
        }
        if (car.points !== window.lastSavedPoints || JSON.stringify(window.up) !== window.lastSavedUpgrades) {
            window.lastSavedPoints = car.points; 
            window.lastSavedUpgrades = JSON.stringify(window.up); 

            if (saveTimer) {
                clearTimeout(saveTimer);
            }

            saveTimer = setTimeout(() => {
                saveUserData();
            }, saveInterval);
        }
        drawCar()

        requestAnimationFrame(updateGame);
    }

    trackImg.onload = () => {
        if (!gameRunning) {
            gameRunning = true;
            loadUserData();
            updateGame();
        }
    };

    window.addEventListener('beforeunload', () => {
        saveUserData()
    });

    window.addEventListener('resize', adjustCanvasResolution);
    adjustCanvasResolution();
}