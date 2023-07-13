import { Component } from '@angular/core';

@Component({
  selector: 'app-drakkades',
  templateUrl: './drakkades.component.html',
  styleUrls: ['./drakkades.component.scss']
})
export class DrakkadesComponent {

  constructor() {}

  showContent = false;
  isToggled = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showContent = true;
    }, 2000);
  }

  redirectToYoutube() {
    window.open('https://www.youtube.com/@drakkades', '_blank');
  }

  redirectToYoutubeVOD() {
    window.open('https://www.youtube.com/@drakkadesvod', '_blank');
  }

  redirectToTwitch() {
    window.open('https://www.twitch.tv/drakkades', '_blank');
  }

  redirectToDiscord() {
    window.open('https://discord.com/invite/Kv9wzS8', '_blank');
  }

  redirectToTwitter() {
    window.open('https://www.twitter.com/drakkades', '_blank');
  }

  redirectToInstagram() {
    window.open('https://www.instagram.com/drakkades', '_blank');
  }

  redirectToTiktok() {
    window.open('https://www.tiktok.com/@drakkades', '_blank');
  }

  playSound() {
    let audio = new Audio();
    audio.src = "/assets/sounds/prout.mp3";
    audio.load();
    audio.play();
  }
}
