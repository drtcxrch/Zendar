const Table = (props) => {
    const rowArr = [];
    console.log(props)
    if (props.cols === 0) {
      for (let k = 0; k < props.rows; k++) {
        rowArr.push(<tr key={k} >[{k}, 0]</tr>)
      }
    } else {
      for (let i = 0; i < props.rows; i++) {
        let colsArr = [];
        let j;
        for (j = 0; j < props.cols; j++) {
          colsArr.push(<td key={i, j} >[{i}, {j}]</td>)
        }

        rowArr.push(<tr key={i} >{colsArr}</tr>)
        colsArr = [];
      }
    }

    return (
      <table>
        <tbody>
          {rowArr}
        </tbody>
      </table>
    )
};

export default Table;