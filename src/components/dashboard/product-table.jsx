import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useReactTable,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import TableTop from "./table-top";
import { Button, Spinner } from "react-bootstrap";
import { HiPencilSquare, HiTrash } from "react-icons/hi2";
import { deleteProduct, setEditFormState, setEditProduct } from "../../store/slices/product-slice";
import { deleteOneProduct } from "../../api/product-service";
import toast from "react-hot-toast";

const ProductTable = ({ loading }) => {
  const { tableMode, data } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (product) => {
    dispatch(setEditProduct(product));
    dispatch(setEditFormState(true));
  };

  const handleDelete = async (productId) => {
    try {
      await deleteOneProduct(productId);
      dispatch(deleteProduct(productId));
      toast.success("Product deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const columnHelper = createColumnHelper();

  const columns = useMemo(
    () => [
      columnHelper.accessor("title", {
        header: "Product Name",
        cell: (info) => (
          <span
            className={tableMode === "short" ? "summary-text" : "compact-text"}
            title={info.getValue()}
          >
            {info.getValue()}
          </span>
        ),
      }),
      columnHelper.accessor("description", {
        header: "Description",
        cell: (info) => (
          <span
            className={tableMode === "short" ? "summary-text" : "compact-text"}
            title={info.getValue()}
          >
            {info.getValue()}
          </span>
        ),
      }),
      columnHelper.accessor("price", {
        cell: (row) => <span>€&nbsp;{row.getValue()}</span>,
        header: "Price",
      }),
      columnHelper.accessor((row) => row, {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="actions">
            <Button
              title="Edit"
              className="btn-edit"
              onClick={(e) => {
                e.stopPropagation();
                handleEdit(row.original);
              }}
            >
              <HiPencilSquare size={20} />
            </Button>
            <Button
              title="Delete"
              className="btn-delete"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(row.original.id);
              }}
            >
              <HiTrash size={20} />
            </Button>
          </div>
        ),
      }),
    ],
    [tableMode]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {data.length === 0 ? (
        loading ? (
          <div className="w-100 text-center pt-2">
            <Spinner animation="border" size="lg" />
          </div>
        ) : (
          <div className="no-item">
            <TableTop />
            <div className="no-item-text w-100 d-flex justify-content-center align-items-center border p-3 rounded-3">
              <span>No products yet</span>
            </div>
          </div>
        )
      ) : (
        <>
          <TableTop />
          <div className="products">
            <table className="d-none d-md-table">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    onClick={() =>
                      navigate(`/dashboard/product/${row.original.id}`)
                    }
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="product-cards-wrapper d-md-none d-flex flex-column gap-4 mt-2">
              {data.map((product) => (
                <div
                  className="product-card rounded-3 d-flex flex-column shadow p-2 gap-2"
                  key={product.id}
                  onClick={() => navigate(`/dashboard/product/${product.id}`)}
                >
                  <div
                    className={`product-title 
                      ${
                        tableMode === "short" ? "summary-text" : "compact-text"
                      }`}
                  >
                    {product.title}
                  </div>
                  <div
                    className={`product-description 
                      ${
                        tableMode === "short" ? "summary-text" : "compact-text"
                      }`}
                  >
                    {product.description}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="product-price">€&nbsp;{product.price}</div>
                    <div className="actions">
                      <Button
                        title="Edit"
                        className="btn-edit"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(product);
                        }}
                      >
                        <HiPencilSquare size={20} />
                      </Button>
                      <Button
                        title="Delete"
                        className="btn-delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(product.id);
                        }}
                      >
                        <HiTrash size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductTable;
