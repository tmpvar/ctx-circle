var TAU = Math.PI*2;

function circle(ctx, x, y, r, reverse) {
  ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.arc(x, y, r, 0, TAU, !!reverse);
}
