import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSeparator,
  MenubarTrigger,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@/components/ui/menubar";

const Navbar = () => {
  return (
    <nav>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Mantenimiento</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Departamentos</MenubarItem>
            <MenubarItem>Inventario</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Clientes</MenubarItem>
            <MenubarItem>Vendedores</MenubarItem>
            <MenubarItem>Tarjetas de crédito</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Proveedores</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Bancos</MenubarItem>
            <MenubarItem>Conceptos</MenubarItem>
            <MenubarItem>Beneficiarios</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Salir</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Transacciones</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Cargos</MenubarItem>
            <MenubarItem>Descargos</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Ajustes de Existencia</MenubarItem>
            <MenubarItem>Ajustes de Precios</MenubarItem>
            <MenubarItem>Ajuste de Impuesto</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Cuentas por cobrar</MenubarItem>
            <MenubarItem>Cuentas por pagar</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Manejo de Caja Chica</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Ventas</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Facturas</MenubarItem>
            <MenubarItem>Devoluciones</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Presupuestos</MenubarItem>
            <MenubarItem>Notas de Entrega</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Pedidos</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Compras</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Compra de Mercancía</MenubarItem>
            <MenubarItem>Devolución en Compras</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Órdenes de Compra</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Notas de Entrega Proveedores</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Bancos</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Transacciones</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Informes</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>Inventario</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Reporte General</MenubarItem>
                <MenubarItem>Movimiento de Unidades</MenubarItem>
                <MenubarItem>Inventario Físico</MenubarItem>
                <MenubarItem>Reposicuón de Inventario</MenubarItem>
                <MenubarItem>Lista de Precios</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Operaciones de Inventario</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Operaciones</MenubarItem>
                <MenubarItem>Operaciones con Productos</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Clientes</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Reporte General</MenubarItem>
                <MenubarItem>Estado de Cuenta</MenubarItem>
                <MenubarItem>Cuentas por Cobrar</MenubarItem>
                <MenubarItem>Análisis de Vencimientos</MenubarItem>
                <MenubarItem>Retención de impuestos</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Proveedores</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Reporte General</MenubarItem>
                <MenubarItem>Estado de Cuentas</MenubarItem>
                <MenubarItem>Cuentas por Pagar</MenubarItem>
                <MenubarItem>Análisis de Vencimientos</MenubarItem>
                <MenubarItem>Retenciones en la Fuente</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Ventas</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>General de Ventas</MenubarItem>
                <MenubarItem>Ventas Diarias</MenubarItem>
                <MenubarItem>Productos Vendidos</MenubarItem>
                <MenubarItem>Transacciones de Ventas</MenubarItem>
                <MenubarItem>Libro de Ventas IVA</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Compras</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>General de Compras</MenubarItem>
                <MenubarItem>Compras Diarias</MenubarItem>
                <MenubarItem>Productos Comprados</MenubarItem>
                <MenubarItem>Transacciones de Compras</MenubarItem>
                <MenubarItem>Libro de Compras IVA</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Vendedores</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Reporte General</MenubarItem>
                <MenubarItem>Comisiones del Periodo</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Bancos</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>General de Bancos</MenubarItem>
                <MenubarItem>Transacciones</MenubarItem>
                <MenubarItem>Conciliaciones</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Impresión de Etiquetas</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Etiquetas de Inventario</MenubarItem>
                <MenubarItem>Etiquetas de Clientes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSub>
              <MenubarSubTrigger>Resúmenes</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Resumen de Impuesto</MenubarItem>
                <MenubarItem>Resumen de Ventas (Punto de Venta)</MenubarItem>
                <MenubarItem>Comparativo Periodo Actual</MenubarItem>
                <MenubarItem>Comparativo Periodos Anteriores</MenubarItem>
                <MenubarItem>Resumen de Operaciones</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Sistema</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Acerca de...</MenubarItem>
            <MenubarItem>Ayuda</MenubarItem>
            <MenubarItem>Títulos y Correlativos</MenubarItem>
            <MenubarItem>Respaldo de Datos</MenubarItem>
            <MenubarItem>Recuperación de Datos</MenubarItem>
            <MenubarItem>Cambio de Fecha</MenubarItem>
            <MenubarItem>Cierre de Periodo</MenubarItem>
            <MenubarItem>Mantenimiento de Archivos</MenubarItem>
            <MenubarItem>Reconversión Monetaria</MenubarItem>
            <MenubarItem>Anular Documentos</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </nav>
  );
};

export default Navbar;
