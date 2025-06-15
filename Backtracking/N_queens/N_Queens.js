var solveNQueens = function(n){
    //problem def : place all the queens by replace it ..


    // tracking storage
    const diagI = new Set();
    const diagII = new Set();
    const res = [];
    const cols = new Set();

    //tracking all possible queens and place it 

    function BT(row, path){
        if (row === n){
            res.push([...path]);
            return ;
        }

        for (let col = 0; col < n; col++){
            if(cols.has(col)|| diagI.has(row + col) || diagII.has(row - col)) continue;


            const rowStr =  '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1);


            path.push(rowStr);
            cols.add(col);
            diagI.add(row + col);
            diagII.add(row - col);


            BT(row + 1, path);

            path.pop();
            cols.delete(col);
            diagI.delete(row + col);
            diagII.delete(row - col);

        }
    }
    BT(0,[]);
    return res;
}


console.log(solveNQueens(4))