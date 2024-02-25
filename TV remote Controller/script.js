let currentChannel = 0;
let powerOn = false;

function changeChannel(channel) {
  if (powerOn) {
    document.querySelectorAll('.hidden-div').forEach(div => {
      div.style.display = 'none';
    });
    document.getElementById(`hiddenDiv${channel}`).style.display = 'block';
    currentChannel = channel;
  }
}

function togglePower() {
  powerOn = !powerOn;
  if (!powerOn) {
    document.querySelectorAll('.hidden-div').forEach(div => {
      div.style.display = 'none';
    });
    document.getElementById('hiddenDiv0').style.display = 'block';
  }
}

document.getElementById('control0').addEventListener('click', togglePower);
