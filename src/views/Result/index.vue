<template>
  <div id="results">
    <h1>Gráfica</h1>
    <div id="plot"></div>
  </div>
</template>

<script>
import Plotly from 'plotly.js';
import { database } from '@services/firebase';

export default {
  name: 'result',
  mounted() {
    const data = {};

    const ref = database.ref('/');
    const correctTrace = {
      x: [],
      y: [],
      name: 'Respuestas correctas',
      type: 'bar'
    };

    const incorrectTrace = {
      x: [],
      y: [],
      name: 'Respuestas incorrectas',
      type: 'bar'
    };

    ref.once('value').then(snapshot => {
      Object.values(snapshot.val()).forEach(r => {
        if (!Array.isArray(data[r.answer])) {
          data[r.answer] = [0, 0]; // (correct, incorrect)
        }

        const i = r.right ? 0 : 1; // Index of the result
        data[r.answer][i] += 1;
      });

      Object.keys(data).forEach(d => {
        correctTrace.x.push(d);
        correctTrace.y.push(data[d][0]);

        incorrectTrace.x.push(d);
        incorrectTrace.y.push(data[d][1]);
      });

      var D = [correctTrace, incorrectTrace];
      var layout = {barmode: 'stack'};
      Plotly.newPlot('plot', D, layout);
    });
  },
}
</script>

<style>
#results {
  /*background: red;*/
}
</style>
