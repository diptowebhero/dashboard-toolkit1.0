import CommonHeader from "../../../common/CommonHeader";
import BasicDataTables from "./BasicDataTables";

const DataTableMain = () => {
  return (
    <div>
      <CommonHeader
        title="Data Tables"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio."
      />
      <div className="space-y-4">
        <BasicDataTables />
      </div>
    </div>
  );
};

export default DataTableMain;