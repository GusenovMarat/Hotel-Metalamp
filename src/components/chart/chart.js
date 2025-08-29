class Chart {
  constructor() {
    this.setClasses();
		this.findChart();  
  }

  setClasses() {
    this.chartClass = '.js-chart',
    this.chartUnit = '.js-chart__unit',
    this.chartCaption = '.js-chart__group-caption',
    this.chartLegendItem = '.js-chart__legend-item',
    this.captionVotes = '.js-sum-votes',
    this.chartCaptionHidden = 'chart__group-caption-hidden',
    this.legendHovered = 'chart__hovered'
    
  }

  findChart() {
    this.chart = document.querySelectorAll(this.chartClass);
  }

  init() {
    this.chart.forEach(item => {
      let unitsList = item.querySelectorAll(this.chartUnit);
      let captionsList = item.querySelectorAll(this.chartCaption);
      let legendList = item.querySelectorAll(this.chartLegendItem);
      let sumVotes = item.querySelector(this.captionVotes);
      legendList.forEach((item, index) => {
      
        item.addEventListener('mouseover', () => {
          captionsList.forEach((caption) => {
            caption.classList.add(this.chartCaptionHidden)
          })
          captionsList[index].classList.remove(this.chartCaptionHidden);
          unitsList[index]?.classList.add(this.legendHovered);
        });
        item.addEventListener('mouseout', () => {
          captionsList[index].classList.toggle(this.chartCaptionHidden);
          unitsList[index]?.classList.remove(this.legendHovered);
          sumVotes.classList.remove(this.chartCaptionHidden)
        });
      });
    })
  }
}

export default Chart