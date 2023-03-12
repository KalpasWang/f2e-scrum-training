import { render } from '@testing-library/react';
import { PriorityDnDStage } from '../components/Stages';
import game from '../shared/gameConfig.json';

describe('PriorityDnDStage', () => {
  describe('當重新開始遊戲', () => {
    it('DnD 重置回預設的樣子', () => {
      // arrange
      const stageData = game.stages.find(
        (stage) => stage.name === 'PriorityDnDStage'
      );

      // act
      const { rerender } = render(
        <PriorityDnDStage stageData={stageData} finishedCount={1} />
      );
      const temp = stageData.candidates.items[0];
      stageData.candidates.items[0] = stageData.backlog.items[0];
      stageData.backlog.items[0] = temp;
      rerender(<PriorityDnDStage stageData={stageData} finishedCount={2} />);
    });
  });
});
