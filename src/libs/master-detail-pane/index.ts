import { MasterDetailPaneModule } from './master-detail-pane.module'
import { MasterDetailPane } from './master-detail-pane.component'

// MasterPaneに表示するPageで継承する抽象クラス
abstract class MasterPageBase { }

export {
  MasterDetailPane,
  MasterDetailPaneModule,
  MasterPageBase,
}
