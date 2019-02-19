var React = require('react');

var Clock =React.creatClass({


    formateSeconds: function(totalSeconds){
        var seconds = totalSeconds % 60;
        var minutes = totalSeconds / 60;

        return minutes + ':' + seconds;
    },

    render: function(){
        return(
            <div>

            </div>
        );
    }
});

module.exports = Clock;