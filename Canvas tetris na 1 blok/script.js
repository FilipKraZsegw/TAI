$(document).ready(function() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");

    const kwadrat1 = [{
        id: "kwadrat1",
        x: 290,
        y: 0,
        width: 20,
        height: 20,
        color: 'yellow',
        zablokowany: false
    }];

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    function rysujKwadrat() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        kwadrat1.forEach(kwadrat => {
            ctx.save();
            ctx.translate(kwadrat.x, kwadrat.y);
            ctx.fillStyle = kwadrat.color;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(20, 0);
            ctx.lineTo(20, 20);
            ctx.lineTo(0, 20);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        });
    }

    rysujKwadrat();

    let x = 290;
    let y = 0;

    document.addEventListener('keydown', (event) => {
        const kwadrat = kwadrat1.find(k => k.id === "kwadrat1");
        if (kwadrat && !kwadrat.zablokowany) {
            switch (event.key) {
                case 'ArrowLeft':
                    if (x != 0)
                        x -= 10;
                    break;
                case 'ArrowRight':
                    if (x != 580)
                        x += 10;
                    break;
            }
            kwadrat.x = x;
            kwadrat.y = y;
            rysujKwadrat();
        }
    });

    setInterval(() => {
        const kwadrat = kwadrat1.find(k => k.id === "kwadrat1");
        if (kwadrat && !kwadrat.zablokowany) {
            if (kwadrat.y < 580) {
                y += 20;
                kwadrat.y = y;
            } else {
                kwadrat.zablokowany = true;
            }
        }
        rysujKwadrat();
    }, 500);
});