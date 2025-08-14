export function diamond(n: number) {
    for (let i = 1; i <= n * 2-1; i++) {
        const row = i <= n ? i : 2 * n -1;
        const spaces = " ".repeat(n-row)
        const nums = [...Array(row)].map((_,j) => j + 1).join(" ");
        console.log(spaces + nums);
    }
}
diamond(6);