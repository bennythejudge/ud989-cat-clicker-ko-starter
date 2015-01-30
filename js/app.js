var viewModel = function () {
   this.clickCount = ko.observable(0);
   this.name = ko.observable("pippo");
   this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
   this.imgAttribution = ko.observable('#');
   this.incrementCounter = function() {
      this.clickCount(this.clickCount() + 1);
      console.log(this.clickCount());   
   };
   this.level = ko.computed(function() {
      console.log(this.clickCount);
      if(this.clickCount()<10) {
         return "grown up";
      } else {
         return "puppy";
      }
   },this);
}

ko.applyBindings(new viewModel());
