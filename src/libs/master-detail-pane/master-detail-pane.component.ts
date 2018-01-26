import { Component, ViewChild, Input } from '@angular/core'
import { Nav } from 'ionic-angular'

import { MasterPageBase } from './'

// https://medium.com/@blewpri/master-detail-with-ionic-3-split-panes-866293608d47
@Component({
  selector: 'master-detail-pane',
  templateUrl: 'master-detail-pane.html',
})
export class MasterDetailPane {
  @ViewChild('master') masterNav: Nav
  @ViewChild('detail') detailNav: Nav

  @Input() defaultPage: any // 何も無いときにデフォルトで表示するページ

  @Input() masterPage: any
  @Input() detailPage: any

  private _isOn: boolean = false
  get isOn(): boolean {
    return this._isOn
  }
  set isOn(value: boolean) {
    this._isOn = value
  }

  constructor() { }

  setRootToMaster(page: any, params?: any): Promise<any> {
    return (this.isOn) ?
      Promise.all([this.detailNav.setRoot(this.defaultPage), this.masterNav.setRoot(page, params, { animate: true })]) :
      this.masterNav.setRoot(page, params, { animate: true })
  }

  setRootToDetail(page: any, params?: any): Promise<any> {
    return (this.isOn) ?
      this.detailNav.setRoot(page, params, { animate: true }) :
      this.masterNav.push(page, params)
  }

  pushDetail(page: any, params?: any): Promise<any> {
    return (this.isOn) ?
      this.detailNav.push(page, params) :
      this.masterNav.push(page, params)
  }

  popDetail(): Promise<any> {
    if (this.isOn) {
      if (this.detailNav.length() > 1) {
        return this.detailNav.pop()
      } else {
        return this.detailNav.setRoot(this.defaultPage)
      }
    } else {
      return this.masterNav.pop()
    }
  }

  pushMaster(page: any, params?: any): Promise<any> {
    return this.masterNav.push(page, params)
  }

  private onSplitPaneChanged(isOn) {
    // set local 'isOn' flag...
    this.isOn = isOn
    // if the nav controllers have been instantiated...
    if (this.masterNav && this.detailNav) {
      (isOn) ? this.activateSplitView() :
        this.deactivateSplitView()
    }
  }

  private activateSplitView() {
    let currentView = this.masterNav.getActive()
    if (currentView && !(currentView.component.prototype instanceof MasterPageBase)) {
      // if the current view is a 'Detail' page...
      // - remove it from the 'master' nav stack...
      this.masterNav.pop({ animate: false })
      // - and add it to the 'detail' nav stack...
      this.detailNav.setRoot(
        currentView.component,
        currentView.data, { animate: false })
    }
  }

  private deactivateSplitView() {
    let detailView = this.detailNav.getActive()
    if (!(detailView.component.prototype instanceof MasterPageBase)
      && !(detailView.name === this.defaultPage)) {
      // if the current detail view is a 'Detail' page...
      // ...so, not the placeholder page:
      let index = this.masterNav.getViews().length
      // add it to the master view...
      this.masterNav.insert(index,
        detailView.component,
        detailView.data, { animate: false })
    }
    this.detailNav.setRoot(this.defaultPage)
  }
}
